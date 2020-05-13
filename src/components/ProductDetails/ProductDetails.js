import React from "react";
import "./ProductDetails.scss";
import BtnAddToBag from "../BtnAddToBag/BtnAddToBag";
import DropdownSize from "../DropdownSize/DropdownSize";
import DropdownColor from "../DropdownColor/DropdownColor";

class ProductDetails extends React.Component {
  state = {
    curretStateAddBtn: false,
  };

  handleAddToBag() {
    this.setState({
      curretStateAddBtn: true,
    });
  }

  handleFreeShippingModal(ModalFreeShipping) {
    // console.log("Click en el botón que muestra", ModalFreeShipping);
  }

  handleSizeGuide(SizeGuide) {
    // console.log("Click en el botón que muestra", SizeGuide);
  }
  
  render() {
    if (this.state.curretStateAddBtn) {
      // console.log("CLICK ADD TO BAG", this.state.curretStateAddBtn);
    }
    return (
      <div className="productDetailsBox">
        <div className="productDetails">
          <h3 className="titleProductDetails">#ITEM TITLE</h3>
          <h4 className="priceProductDetails">PRICE</h4>
          <div className="dropdownsContainer">
            <DropdownColor />
            <DropdownSize />
          </div>
          <BtnAddToBag clickAddToBag={this.handleAddToBag.bind(this)} />
          <button
            onClick={() => {
              this.handleFreeShippingModal("ModalFreeShipping");
            }}
            className="btnFreeShipping">
            Free shipping on all orders €170
          </button>
          <div className="descriptionProductDetail">
            <h4>DESCRIPTION</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has.
            </p>
          </div>
          <div className="featuresProductDetail">
            <h4>FEATURES</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has.
            </p>
          </div>
          <div className="sizeProductDetail">
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
              className="btnSizeGuide">
              Size Guide
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
