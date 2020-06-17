import React, { Component } from "react";
import "./PaymentConfirmation.scss";
import SectionTransition from "../SectionTransition/SectionTransition";

class PaymentConfirmation extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className='paymentConfirmationBox'>
        <SectionTransition />
        <div className='paymentConfirmation'>
          <h3>#THANKS FOR YOU ORDER</h3>
          <h4>YOU ORDER ID IS 4578866</h4>
          <p>
            WE´VE EMAIL YOUR ORDER DETAILS YOU CAN CHECK YOUR ORDER STATUS IN
            YOUR ACCOUNT OR WITH YOUR ORDER ID.
          </p>
        </div>
      </div>
    );
  }
}

export default PaymentConfirmation;
