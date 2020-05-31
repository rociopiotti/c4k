import React from "react";

import "./ItemImageGallery.scss";
// DATABASE
import { URL_PRODUCTS } from "../../utils/path";
import { URL_TROUSERS } from "../../utils/path";
import { URL_BAGS } from "../../utils/path";
import { URL_SHOES } from "../../utils/path";
import { URL_TSHIRTS } from "../../utils/path";

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
    const endPoint1 = this.props.sectionId;

    axios
      .get(`${URL_PRODUCTS}`)
      .then((response) => {
        this.setState({
          images: response.data[endPoint1],
        });
      })
      .catch((error) => console.log("NOT WORKING", error));
  }

  componentDidMount() {
    this.getImages();
  }

  render() {
    return (
      <div className='itemImageGalleryBox'>
        <Slider {...settings}>
          {this.state.images.map((item, index) => (
            <div key={item.id} className='itemImage'>
              <img
                src={`/images/${item.category}/${item.image}`}
                alt='trousers item'
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
