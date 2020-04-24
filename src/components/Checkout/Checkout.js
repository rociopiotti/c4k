import React from "react"
import "./Checkout.scss"
import Icon from "../Icon/Icon"
import CheckoutGuest from "../CheckoutGuest/CheckoutGuest"
import SingIn from "../SingIn/SingIn"
import BtnSingInGoogle from "../BtnSingInGoogle/BtnSingInGoogle"
import BtnSingInFacebook from "../BtnSingInFacebook/BtnSingInFacebook"
class Checkout extends React.Component {
  handleCloseCheckout(CloseCheckout)  {
    console.log("Click en botón:", CloseCheckout)
  }
  render() {
    return (
      <div className="checkoutBox">
        <div className="checkout">
          <div className="headerCheckoutBox">
            <h2>#CHECKOUT </h2>
            <button onClick={() => {
              this.handleCloseCheckout("CloseCheckout")
            }} className="btnCloseCheckout"><Icon /></button>
          </div>
          <CheckoutGuest />
          <SingIn />
          <div className="separationLineCheckout">
            <hr className="separationLine1"></hr>
            <p>OR </p>
            <hr className="separationLine2"></hr>
          </div>
          <BtnSingInGoogle />
          <BtnSingInFacebook/>
        </div>
      </div>
    )
  }
}

export default Checkout
