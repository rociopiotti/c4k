import React, { Component } from "react";
import "./ProductDetails.scss";
import BtnAddToBag from "../Btn/BtnAddToBag/BtnAddToBag";
import Dropdown from "../../utils/DropDown/DropDown";

// CONTEXT
import PageManagerContext from "../../context/pageManager-context";

class ProductDetails extends Component {
  static contextType = PageManagerContext;
  constructor(props) {
    super(props);
    this.state = {
      size: null,
      color: null,
      quantity: 1,
    };
  }
  // TO DO - ADD SIZE GUIDE Y FRE SHIPPING MODAL CASE
  handleFreeShippingModal(ModalFreeShipping) {
    // console.log("Click en el botón que muestra", ModalFreeShipping);
  }

  handleSizeGuide(SizeGuide) {
    // console.log("Click en el botón que muestra", SizeGuide);
  }

  updatenewItem(dropdownType, selectedOption) {
    this.setState({
      [dropdownType]: selectedOption,
    });
  }

  handleAddToBag() {
    const { size, color, quantity } = this.state;
    const { itemId } = this.props;

    const newItem = {
      id: itemId,
      quantity,
      size,
      colors: color,
    };
    this.context.handleAddToCart(newItem);
    this.context.onSlideBtn("cartSlide");
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.color) {
      const { details } = this.props;

      const color = details.colors ? details.colors[0].id : "";
      const size = details.size ? details.size[0].id : "";

      this.setState({
        color,
        size,
      });
    }
  }

  render() {
    const { details } = this.props;

    const { title, price, size, colors, description, features } = details;

    return (
      <div className='productDetailsBox'>
        <div className='productDetails'>
          <h3 className='titleProductDetails'>{title}</h3>
          <h4 className='priceProductDetails'> €{price}</h4>
          <div className='dropdownsContainer'>
            <Dropdown
              dropdownType={"color"}
              data={colors}
              change={this.updatenewItem.bind(this)}
            />
            <Dropdown
              dropdownType={"size"}
              data={size}
              change={this.updatenewItem.bind(this)}
            />
          </div>
          <BtnAddToBag onClickAddToBag={this.handleAddToBag.bind(this)} />
          <button
            onClick={() => {
              this.handleFreeShippingModal("ModalFreeShipping");
            }}
            className='btnFreeShipping'>
            Free shipping on all orders €170
          </button>
          <div className='descriptionProductDetail'>
            <h4>DESCRIPTION</h4>
            <p>{description}</p>
          </div>
          <div className='featuresProductDetail'>
            <h4>FEATURES</h4>
            <p>{features}</p>
          </div>
          <div className='sizeProductDetail'>
            <h4>SIZE</h4>
            <p>
              Height 5'11", <br></br>
              Bust 31", <br></br>
              Waist 23", <br></br>
              Hips 33"<br></br>
              Model Wears S
            </p>
            <button
              onClick={() => {
                this.handleSizeGuide("SizeGuide");
              }}
              className='btnSizeGuide'>
              Size Guide
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
