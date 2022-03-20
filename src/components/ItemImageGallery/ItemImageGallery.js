import React, { Component } from "react";

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

class ItemImageGallery extends Component {
  render() {
    const { sectionId, images } = this.props;

    return (
      <div className='itemImageGalleryBox'>
        <Slider {...settings}>
          {images.map(({ id, image, alttext }) => (
            <div key={id} className='itemImage'>
              <img
                src={`${sectionId}/${image}`}
                alt={alttext}
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
