import React from "react"
import "./ProductDetails.scss"
import Icon from "../Icon/Icon"

import BtnAddToBag from "../BtnAddToBag/BtnAddToBag"
let itemColor = "COLOR"
let itemSize = "SIZE"
class ProductDetails extends React.Component {
  state = {
    currentOption: "null",
  }

  clickOnDropdown(Dropdown) {
    console.log("Abro o cierro", Dropdown)
  }
  handleDropdown(newColor) {
    this.setState({
      currentColor: newColor,
    })
  }
  setColor(colorType) {
    switch (colorType) {
      case "OPTION A":
        itemColor = "OPTION A"
        break
      case "OPTION B":
        itemColor = "OPTION B"
        break
      case "OPTION C":
        itemColor = "OPTION C"
        break
        return itemColor
    }
  }
  handleFreeShippingModal(ModalFreeShipping) {
    console.log("Click en el botón que muestra", ModalFreeShipping)
  }
  handleSizeGuide(SizeGuide) {
    console.log("Click en el botón que muestra", SizeGuide)
  }
  render() {
    console.log("------> CURRENT COLOR:", this.state.currentColor)
    {
      this.setColor(this.state.currentColor)
    }
    return (
      <div className="productDetailsBox">
        <div className="productDetails">
          <h3 className="titleProductDetails">#ITEM TITLE</h3>

          <h4 className="priceProductDetails">PRICE</h4>

          <div className="dropdownsContainer">
            <div className="dropdownBox">
              <button
                onClick={() => {
                  this.clickOnDropdown("Dropdown")
                }}
                className="dropbtn">
                <div className="colorIcon"></div>
                <p>{itemColor}</p>
                <Icon className="dropDownIcon" />
              </button>
              <ul className="dropdownContentSize">
                <li>
                  <button
                    onClick={() => {
                      this.handleDropdown("OPTION A")
                    }}>
                    OPTION A
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      this.handleDropdown("OPTION B")
                    }}>
                    OPTION B
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      this.handleDropdown("OPTION C")
                    }}>
                    OPTION C
                  </button>
                </li>
              </ul>
            </div>
            <div className="dropdownBox">
              <button
                onClick={() => {
                  this.clickOnDropdown("Dropdown")
                }}
                className="dropbtn dropBtnSize">
                <p>SIZE</p>
                <Icon className="dropDownIcon" />
              </button>
              <ul className="dropdownContentSize">
                <li>
                  <button
                    onClick={() => {
                      this.handleDropdown("SMALL")
                    }}>
                    SMALL
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      this.handleDropdown("MEDIUM")
                    }}>
                    MEDIUM
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      this.handleDropdown("LARGE")
                    }}>
                    LARGE
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <BtnAddToBag />
          <button
            onClick={() => {
              this.handleFreeShippingModal("ModalFreeShipping")
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
                this.handleSizeGuide("SizeGuide")
              }}
              className="btnSizeGuide">
              Size Guide
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetails
