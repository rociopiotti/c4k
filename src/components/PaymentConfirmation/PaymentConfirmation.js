import React from "react"
import "./PaymentConfirmation.scss"

class PaymentConfirmation extends React.Component {
  render() {
    return (
      <div className="paymentConfirmationBox">
        <div className="paymentConfirmation">
          <h3>#THANKS FOR YOU ORDER</h3>
          <h4>YOU ORDER ID IS 4578866</h4>
          <p>
            WE´VE EMAIL YOUR ORDER DETAILS YOU CAN CHECK YOUR ORDER STATUS IN
            YOUR ACCOUNT OR WITH YOUR ORDER ID.
          </p>
        </div>
      </div>
    )
  }
}

export default PaymentConfirmation
