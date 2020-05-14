import React from "react"
import "./Checkout.scss"
import Icon from "../Icon/Icon"
import CheckoutGuest from "../CheckoutGuest/CheckoutGuest"
import SingIn from "../SingIn/SingIn"
import BtnSingInGoogle from "../BtnSingInGoogle/BtnSingInGoogle"
import BtnSingInFacebook from "../BtnSingInFacebook/BtnSingInFacebook"
// CONTEXT
import PageManagerContext from "../../context/pageManager-context";
import SectionTransition from "../SectionTransition/SectionTransition"


class Checkout extends React.Component {

  static contextType = PageManagerContext;

  handleCloseCheckout()  {
    this.context.onSectionBtn("home")
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="checkoutBox">
      <SectionTransition/>
        <div className="checkout">
          <div className="headerCheckoutBox">
            <h2>#CHECKOUT </h2>
            <button onClick={() => {
              this.handleCloseCheckout()
            }} className="btnCloseCheckout"><Icon type="arrowRight" /></button>
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
