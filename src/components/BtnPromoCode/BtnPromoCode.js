import React from "react"
import "./BtnPromoCode.scss"

class BtnPromoCode extends React.Component {
  clickPromoCode  (PromoCode)  {
    console.log("Click en el boton:", PromoCode)
  }
  render() {
    
    return (
      <div className="btnPromoCodeBox">
        <button
          onClick={() => {
            this.clickPromoCode("PromoCode")
          }}
          className="btnPromoCode">
          DO YOU HAVE PROMO CODE?
        </button>
        <input
          type="text"
          className="promoCode"
          name="promoCode"
          placeholder="ENTER CODE"></input>
      </div>
    )
  }
}

export default BtnPromoCode
