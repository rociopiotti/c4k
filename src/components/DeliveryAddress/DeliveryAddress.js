import React from "react"
import "./DeliveryAddress.scss"
import BillingAddress from "../BillingAddress/BillingAddress"

class DeliveryAddress extends React.Component {
  handleCheckboxChange() {
    console.log("Checked")
  }
  render() {
    return (
      <div className="deliveryAddressBox">
        <h3>DELIVERY ADDRESS</h3>
        <hr className="lineSeparationDeliveryAddress"></hr>
        <div className="deliveryAddress">
          <label className="defaultAddressCheckbox">
            <input onChange={this.handleCheckboxChange} type="checkbox"></input> Default (same as billing address)
          </label>
        </div>
        <div className="deliveryAddress">
          <label className="alternativeAddressCheckbox">
            <input onChange={this.handleCheckboxChange} type="checkbox"></input> Add an alternative delivery address
          </label>
          {/*DISPLAYS WHEN CHECKBOX IS CLICKED*/}
          {/* <BillingAddress/> */}
        </div>
      </div>
    )
  }
}

export default DeliveryAddress
