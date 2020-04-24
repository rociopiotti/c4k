import React from "react"
import "./PaymentSettings.scss"
import Icon from "../Icon/Icon"

import mastercardImg from "../../img/mastercard.svg"
import visaImg from "../../img/visa.svg"
import amexImg from "../../img/amex.svg"
import paypalImg from "../../img/paypal.svg"

class PaymentSettings extends React.Component {
  handlePaymentMethod(ID) {
    console.log(
      "Click en el boton que selecciona metodo de pago con id n°:",
      ID
    )
  }
  handleInfoCVV(InfoCVV) {
    console.log("Click en el boton que muestra modal con:", InfoCVV)
  }
  handlePayment(OrderConfirmation) {
    console.log("Click en el boton que muestra:", OrderConfirmation)
  }
  render() {
    return (
      <div className="paymentSettingsBox">
        <h3>PAYMENT</h3>
        <hr className="lineSeparationSettings"></hr>
        <p>PLEASE CHOOSE YOUT PAYMENT METHOD</p>
        <div className="paymentSettingsImageBox">
          <button
            onClick={() => {
              this.handlePaymentMethod("1")
            }}
            className="paymentSettingsImage">
            <img
              src={mastercardImg}
              alt="masterdar"
              className="paymentMethImg"
            />
          </button>
          <button
            onClick={() => {
              this.handlePaymentMethod("2")
            }}
            className="paymentSettingsImage">
            <img src={visaImg} alt="visa" className="paymentMethImg" />
          </button>
          <span></span>
          <button
            onClick={() => {
              this.handlePaymentMethod("3")
            }}
            className="paymentSettingsImage">
            <img src={amexImg} alt="amex" className="paymentMethImg" />
          </button>
          <button
            onClick={() => {
              this.handlePaymentMethod("4")
            }}
            className="paymentSettingsImage">
            <img src={paypalImg} alt="paypal" className="paymentMethImg" />
          </button>
          <span></span>
        </div>
        <div className="paymentSettingsInputBox">
          <label>CARD NUMBER *</label>

          <input
            type="text"
            id="cardNumber"
            placeholder=""
            className="paymentSettingsInput"
          />
        </div>
        <div className="paymentSettingsInputBox">
          <label>EXPIRY DATE *</label>

          <input
            type="text"
            id="monthExpiryDate"
            placeholder="MONTH"
            className="paymentSettingsInput smallInput"
          />
          <input
            type="text"
            id="yearExpiryDate"
            placeholder="YEAR"
            className="paymentSettingsInput smallInput"
          />
        </div>
        <div className="paymentSettingsInputBox ">
          <label>CCV CODE *</label>

          <input
            type="text"
            id="ccv"
            placeholder="CVV CODE"
            className="paymentSettingsInput smallInput"
          />
          <button
            onClick={() => {
              this.handleInfoCVV("InfoCVV")
            }}
            className="btnInfoCvvCode">
            WHAT IS THIS? <Icon />
            <div className="infoTextCvvCode">
              <p>
                The Security Code on your credit card or debit card is a 3 digit
                number on the back of your VISA®, MasterCard® and Discover®
                branded credit and debit cards. On your American Express®
                branded credit or debit card it is a 4 digit numeric code on the
                front of the card.
              </p>
            </div>
          </button>
        </div>
        <p className="acceptGlobalEText">
          By clicking place order and pay, you agree to purchase your item(s)
          from Global-e as merchant of record for this transaction, on
          Global-e’s Terms and Conditions and Privacy Policy. Global-e is an
          international fulfilment service provider to C-4K.
        </p>
        <button
          onClick={() => {
            this.handlePayment("OrderConfirmation")
          }}
          className="btnPayAndOrder">
          PAY AND ORDER
        </button>
      </div>
    )
  }
}

export default PaymentSettings
