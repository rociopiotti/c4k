import React from "react"
import "./ShippingMethod.scss"

class ShippingMethod extends React.Component {
  handleCheckboxChange() {
    console.log("Checked")
  }
  render() {
    return (
      <div className="shippingMethodBox">
        <h3>SHIPPING METHOD</h3>
        <hr></hr>
        <div className="shippingMethod">

        <label >
          <input  onChange={this.handleCheckboxChange}  type="checkbox"></input>FREE
        </label>
        <p>EXPRESS COURIER (AIR)</p>
        </div>
      </div>
    )
  }
}

export default ShippingMethod
