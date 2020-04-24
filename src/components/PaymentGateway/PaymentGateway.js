import React from "react"
import "./PaymentGateway.scss"
import CartItemList from "../CartItemList/CartItemList"
import EstimatedTotal from "../EstimatedTotal/EstimatedTotal"
import BtnPromoCode from "../BtnPromoCode/BtnPromoCode"
import BillingAddress from "../BillingAddress/BillingAddress"
import DeliveryAddress from "../DeliveryAddress/DeliveryAddress"
import PaymentSettings from "../PaymentSettings/PaymentSettings"
import BillingSummary from "../BillingSummary/BillingSummary"
import FooterLinks from "../FooterLinks/FooterLinks"
import ShippingMethod from "../ShippingMethod/ShippingMethod"

class PaymentGateway extends React.Component {
  render() {
    return (
      <div className="paymentGatewayBox">
        <div className="paymentGateway">
          <h2>#ORDER SUMMARY</h2>
          <div className="orderSummaryBox">
            <div className="column1">
              <CartItemList />
            </div>
            <div className="column2">
              <BtnPromoCode />
              <EstimatedTotal />
            </div>
          </div>
          <div className="adressDataBox">
            <div className="column1">
              <BillingAddress />
            </div>
            <div className="column2">
              <DeliveryAddress />
              
              <ShippingMethod/>
            </div>
          </div>
          <div className="paymentDataBox">
            <div className="column1">
              <PaymentSettings />
            </div>
            <div className="column2">
              <BillingSummary/>
            </div>
          </div>
          <div className="footerLiks">
            <div className="column1">
              <FooterLinks/>
            </div>
           
          </div>
        </div>
      </div>
    )
  }
}

export default PaymentGateway
