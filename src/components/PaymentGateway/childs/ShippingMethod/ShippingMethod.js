import React, { Component } from "react"
import "./ShippingMethod.scss"

export class ShippingMethod extends Component {
  handleCheckboxChange() {
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

