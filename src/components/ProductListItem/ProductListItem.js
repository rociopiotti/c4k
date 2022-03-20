import React, { Component } from "react";
import "./ProductListItem.scss";

import { DEV } from "../../utils";

class ProductListItem extends Component {
  state = {
    images: [],
    error: false,
  };

  render() {
    const { category, title, image, price, alttext } = this.props;

    return (
      <div className='productListItemBox'>
        <div className='listItemImage'>
          <img
            src={DEV.IMAGES_FOLDER + category + "/" + image}
            alt={alttext}
            className='cartItemImg'
          />
        </div>
        <div className='listItemDescription'>
          <h3>{title}</h3>
          <p>€{price}</p>
        </div>
      </div>
    );
  }
}

export default ProductListItem;
