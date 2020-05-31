import React from "react";
import "./ProductListItem.scss";

const imagesFolder = "http://localhost:3000/images/";

class ProductListItem extends React.Component {
  state = {
    images: [],
    error: false,
  };

  render() {
    const { category, title, image, price } = this.props;

    return (
      <div className='productListItemBox'>
        <div className='listItemImage'>
          <img
            src={imagesFolder + category + "/" + image}
            alt='trousers item'
            className='cartItemImg'
          />
        </div>
        <div className='listItemDescription'>
          <h3>{title}</h3>
          <p>EURO {price}</p>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
