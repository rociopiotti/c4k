import React from "react";
import "./ProductDetails.scss";
import BtnAddToBag from "../BtnAddToBag/BtnAddToBag";
import Dropdown from "../../utils/DropDown/DropDown";

// CONTEXT
import PageManagerContext from "../../context/pageManager-context";

class ProductDetails extends React.Component {
  static contextType = PageManagerContext;
  // TO DO - ADD SIZE GUIDE Y FRE SHIPPING MODAL CASE
  handleFreeShippingModal(ModalFreeShipping) {
    // console.log("Click en el botón que muestra", ModalFreeShipping);
  }

  handleSizeGuide(SizeGuide) {
    // console.log("Click en el botón que muestra", SizeGuide);
  }

  handleAddToBag() {
    const itemId = this.props.itemId;
    const newItem = { id: itemId, quantity: "1" };
    this.context.hanldeCartItem(newItem);
    this.context.onSlideBtn("cartSlide");
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
            <Dropdown dropdownType={"color"} data={colors} />
            <Dropdown dropdownType={"size"} data={size} />
            <Dropdown dropdownType={"quantity"} data={size} />
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
