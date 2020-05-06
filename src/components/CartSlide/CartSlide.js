import React from "react"
import "./CartSlide.scss"
import HeaderSlideCloseLeft from "../HeaderSlideCloseLeft/HeaderSlideCloseLeft"
import EstimatedTotal from "../EstimatedTotal/EstimatedTotal"
import CartItemList from "../CartItemList/CartItemList"
import BtnPromoCode from "../BtnPromoCode/BtnPromoCode"
import CartEmpty from "../CartEmpty/CartEmpty"

class CartSlide extends React.Component {
  handleCheckoutPage(value) {
    this.props.onCheckouBtn(value)
  }

  render() {
    return (
      <div className="cartSlideBackground">
        <div
          className="cartCloseBackground"
          onClick={() => {
            this.props.onCloseClick(null)
          }}></div>
        <div className="cartSlide">
          <div className="cartSlideBox">
            <HeaderSlideCloseLeft onCloseClick={this.props.onCloseClick} />
            <h2 className="cartSlideTitle">#MY BAG</h2>
            {/* <CartEmpty/> */}
            <CartItemList />
            <BtnPromoCode />
            <EstimatedTotal />
            <button
              onClick={() => {
                this.props.onCloseClick(null)              
                this.handleCheckoutPage("checkout")
              }}
              className="btnCheckout">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default CartSlide
