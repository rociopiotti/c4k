import React from "react";

import "./ItemImageGallery.scss";

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
  render() {
    const { sectionId } = this.props;
    const imageData = this.props.images;

    return (
      <div className='itemImageGalleryBox'>
        <Slider {...settings}>
          {imageData.map(({ id, image }) => (
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
