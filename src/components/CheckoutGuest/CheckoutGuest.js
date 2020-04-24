import React from "react"
import "./CheckoutGuest.scss"

class CheckoutGuest extends React.Component {
  handleCheckOutGuest(Checkout)  {
    console.log("Click en botón:", Checkout)
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
              this.handleCheckOutGuest("Checkout")
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
