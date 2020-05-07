import React from "react";
import "./BtnPromoCode.scss";

//ANMATION
import { TweenLite } from "gsap";
import { Timeline } from "gsap/gsap-core";

class BtnPromoCode extends React.Component {
  constructor(props) {
    super(props);
    this.inputPromoCode = null;

    this.state = {
      mode: "OPEN",
    };
  }
  toggle() {
    const { mode } = this.state;
    const newMode = mode === "OPEN" ? "CLOSE" : "OPEN";

    this.setState({
      mode: newMode,
    });
    console.log("TOGGLE", mode);
  }

  clickPromoCode(PromoCode) {
    const { mode } = this.state;
    const opacityInput = mode === "OPEN" ? "1" : "0";
    const marginInput = mode === "OPEN" ? "2.5vh" : "1.5vh";

    const tl = new Timeline();
    tl.to(
      this.inputPromoCode,
      { opacity: opacityInput,marginTop: marginInput },
      0
    );
    

    tl.eventCallback("onComplete", () => {
      this.toggle();
    });
    console.log("Estado", mode, marginInput, opacityInput);
  }

  render() {
    return (
      <div className="btnPromoCodeBox">
        <button
          onClick={() => {
            this.clickPromoCode("PromoCode");
          }}
          className="btnPromoCode">
          DO YOU HAVE PROMO CODE?
        </button>
        <input
          ref={(div) => (this.inputPromoCode = div)}
          type="text"
          className="promoCode"
          name="promoCode"
          placeholder="ENTER CODE"></input>
      </div>
    );
  }
}

export default BtnPromoCode;
