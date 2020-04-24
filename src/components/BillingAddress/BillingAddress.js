import React from "react"
import "./BillingAddress.scss"

class BillingAddress extends React.Component {
  handleCheckboxChange() {
    console.log("Checked")
  }
  render() {
    return (
      <div className="billingAddressBox">
        <h3 className="billingAddresTitle">BILLING ADDRESS</h3>
        <hr className="lineSeparationPayment"></hr>
        <div className="billingAddressInputBox">
          <label>FIRST NAME *</label>
          <br></br>
          <input
            type="text"
            id="firstNameBillingAddress"
            placeholder="FIRST NAME"
            className="billingAddressInput"
          />
        </div>
        <div className="billingAddressInputBox">
          <label>LAST NAME *</label>
          <br></br>
          <input
            type="text"
            id="lastNameBillingAddress"
            placeholder="LAST NAME"
            className="billingAddressInput"
          />
        </div>
        <div className="billingAddressInputBox">
          <label>EMAIL *</label>
          <br></br>
          <input
            type="text"
            id="emailBillingAddress"
            placeholder="EMAIL"
            className="billingAddressInput"
          />
        </div>
        <div className="billingAddressInputBox">
          <label>COUNTRY *</label>
          <br></br>
          <input
            type="text"
            id="contryBillingAddress"
            placeholder="COUNTRY"
            className="billingAddressInput"
          />
        </div>
        <div className="billingAddressInputBox">
          <label>ADDRESS LINE 1 *</label>
          <br></br>
          <input
            type="text"
            id="addresLine1BillingAddress"
            placeholder="ADDRESS LINE 1"
            className="billingAddressInput"
          />
        </div>
        <div className="billingAddressInputBox">
          <label>ADDRESS LINE 2 *</label>
          <br></br>
          <input
            type="text"
            id="addressLine2BillingAddress"
            placeholder="ADDRESS LINE 2"
            className="billingAddressInput"
          />
        </div>
        <div className="billingAddressInputBox">
          <label>CITY / SUBURB *</label>
          <br></br>
          <input
            type="text"
            id="citySuburbBillingAddress"
            placeholder="CITY / SUBURB"
            className="billingAddressInput"
          />
        </div>
        <div className="billingAddressInputBox">
          <label>ZIP CODE / POSTCODE *</label>
          <br></br>
          <input
            type="text"
            id="zipCodePostcodeBillingAddress"
            placeholder="ZIP CODE / POSTCODE"
            className="billingAddressInput"
          />
        </div>
        <div className="billingAddressInputBox">
          <label>MOBILE PHONE *</label>
          <br></br>
          <input
            type="text"
            id="mobilePhoneBillingAddress"
            placeholder="MOBILE PHONE"
            className="billingAddressInput"
          />
        </div>
        <div className="billingAddressInputBox">
          <label className="termsAndConditions">
            <input
              onChange={this.handleCheckboxChange}
              type="checkbox"></input>
            I agree to receive information, special offers and promotions from
            C4K.
          </label>
        </div>
      </div>
    )
  }
}
export default BillingAddress
