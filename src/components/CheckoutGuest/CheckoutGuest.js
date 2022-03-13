import React, { Component } from "react";
import "./CheckoutGuest.scss";

import { Link } from "react-router-dom";

class CheckoutGuest extends Component {
  render() {
    return (
      <div className='checkoutGuestBox'>
        <h3>GUEST CHECKOUT</h3>
        <hr className='separationLineCheckoutGuest'></hr>
        <p>
          YOU CAN CHECKOUT WITHOUT CREATING AN ACCOUNT. YOU WILL HAVE A CHANCE
          TO CREATE AN ACCOUNT LATER.
        </p>
        <Link to='/paymentgateway' className='btnCheckoutGuest'>
          CHECKOUT AS A GUEST
        </Link>
      </div>
    );
  }
}

export default CheckoutGuest;
