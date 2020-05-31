import React from "react";

import "./ItemImageGallery.scss";
// DATABASE
import { URL_PRODUCTS } from "../../utils/path";

// AXIOS
import axios from "axios";

// SLIDER LIBRARY
import Slider from "react-slick";

const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  centerMode: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  focusOnSelect: true,
};

class ItemImageGallery extends React.Component {
  state = {
    showImageState: "indexImage1",
    images: [],
    error: false,
  };

  getImages() {
    const { sectionId, itemId } = this.props;

    axios
      .get(`${URL_PRODUCTS}`)
      .then((response) => {
        const rawData = response.data[sectionId];
        const itemData = rawData.filter((element) => element.id === itemId);
        const _images = itemData[0].colors;

        this.setState({
          images: _images,
        });
      })
      .catch((error) => console.log("NOT WORKING", error));
  }

  componentDidMount() {
    this.getImages();
  }

  render() {
    const { images } = this.state;
    const { sectionId } = this.props;
    return (
      <div className='itemImageGalleryBox'>
        <Slider {...settings}>
          {images.map(({ id, image }) => (
            <div key={id} className='itemImage'>
              <img
                src={`/images/${sectionId}/${image}`}
                alt={sectionId}
                className='galleryItemImg'
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
export default ItemImageGallery;
