import React from "react"
import "./CheckoutGuest.scss"

// CONTEXT
import PageManagerContext from "../../context/pageManager-context";

class CheckoutGuest extends React.Component {
  static contextType = PageManagerContext;
  
  handleCheckOutGuest()  {
    this.context.onSectionBtn("paymentGateway")

  }
  render() {
   
    return (
      <div className="checkoutGuestBox">
        <div className="checkoutGuest">
          <h3>GUEST CHECKOUT</h3>
          <hr className="separationLineCheckoutGuest"></hr>
          <p>
            YOU CAN CHECKOUT WITHOUT CREATING AN ACCOUNT. YOU WILL HAVE A CHANCE
            TO CREATE AN ACCOUNT LATER.
          </p>
          <button
            onClick={() => {
              this.handleCheckOutGuest()
            }}
            className="btnCheckoutGuest">
            CHECKOUT AS A GUEST
          </button>
        </div>
      </div>
    )
  }
}

export default CheckoutGuest
