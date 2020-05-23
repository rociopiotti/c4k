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
    const endPoint = this.props.sectionId;

    axios
      .get(`${URL_PRODUCTS}`)
      .then((response) => {
        this.setState({
          images: response.data[endPoint],
        });
      })
      .catch((error) => console.log("NOT WORKING", error));
  }

  componentDidMount() {
    this.getImages();
  }

  showImages() {
    return this.state.images.map((item, index) => (
      <div key={item.id} className='itemImage'>
        <img
          src={`/images/${item.category}/${item.image}`}
          alt='trousers item'
          className='galleryItemImg'
        />
      </div>
    ));
  }

  handleShowImage(newShowImageState) {
    this.setState({
      showImageState: newShowImageState,
    });
  }

  setImage(indexImage) {
    let itemImage;
    switch (indexImage) {
      case "indexImage1":
        itemImage = "indexImage1";
        break;
      default:
        itemImage = null;
        break;
    }
    return itemImage;
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

      // <div className='itemImageGalleryBox'>
      //   <div className='imagesBox'>
      //     {/* <div className='itemImage'>
      //       <img src={itemImg} alt='trousers item' className='galleryItemImg' />
      //     </div> */}
      //     {this.showImages()}
      //   </div>
      //   {/* <div className='btnGalleryBox'>
      //     <button
      //       onClick={() => {
      //         this.handleShowImage("indexImage1");
      //       }}
      //       className='btnGallery'>
      //       <div className='buttonRectangle'></div>
      //     </button>
      //     <button
      //       onClick={() => {
      //         this.handleShowImage("indexImage2");
      //       }}
      //       className='btnGallery'>
      //       <div className='buttonRectangle'></div>
      //     </button>
      //     <button
      //       onClick={() => {
      //         this.handleShowImage("indexImage3");
      //       }}
      //       className='btnGallery'>
      //       <div className='buttonRectangle'></div>
      //     </button>
      //   </div> */}
      // </div>
    );
  }
}
export default ItemImageGallery;
