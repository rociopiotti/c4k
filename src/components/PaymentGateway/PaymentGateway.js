import React, { Component } from "react";
import "./PaymentGateway.scss";
import { BillingSummary, BillingAddress, DeliveryAddress, PaymentSettings, ShippingMethod, FooterLinks } from "./childs";
import { SectionTransition } from "../shared-components";
import CartList from "../CartList/CartList";

class PaymentGateway extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className='paymentGatewayBox'>
        <SectionTransition />
        <div className='paymentGateway'>
          <h2>#ORDER SUMMARY</h2>
          <div className='orderSummaryBox'>
            <div className='column1'>
              <CartList showCheckoutButton={false} />
            </div>
            <div className='column2'></div>
          </div>
          <div className='adressDataBox'>
            <div className='column1'>
              <BillingAddress />
            </div>
            <div className='column2'>
              <DeliveryAddress />
              <ShippingMethod />
            </div>
          </div>
          <div className='paymentDataBox'>
            <div className='column1'>
              <PaymentSettings />
            </div>
            <div className='column2'>
              <BillingSummary />
            </div>
          </div>
          <div className='footerLiks'>
            <div className='column1'>
              <FooterLinks />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default PaymentGateway;
