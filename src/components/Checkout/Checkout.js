import React from "react";
import "./Checkout.scss";
import Icon from "../Icon/Icon";
import CheckoutGuest from "../CheckoutGuest/CheckoutGuest";
import SingIn from "../SingIn/SingIn";
import BtnSingInGoogle from "../BtnSingInGoogle/BtnSingInGoogle";
import BtnSingInFacebook from "../BtnSingInFacebook/BtnSingInFacebook";

// TRANSITION
import SectionTransition from "../SectionTransition/SectionTransition";

// ROUTER
import { Link } from "react-router-dom";

class Checkout extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className='checkoutBox'>
        <SectionTransition />
        <div className='checkout'>
          <div className='headerCheckoutBox'>
            <h2>#CHECKOUT </h2>
            <Link to={"/"} className='btnCloseCheckout'>
              <Icon type='arrowRight' />
            </Link>
          </div>
          <CheckoutGuest />
          <SingIn redirection='/paymentgateway' />
          <div className='separationLineCheckout'>
            <hr className='separationLine1'></hr>
            <p>OR </p>
            <hr className='separationLine2'></hr>
          </div>
          <BtnSingInGoogle />
          <BtnSingInFacebook />
        </div>
      </div>
    );
  }
}

export default Checkout;
