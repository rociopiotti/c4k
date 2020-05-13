import React from "react"
import "./SingInSlide.scss"
import SingIn from "../../SingIn/SingIn"

import BtnSingInGoogle from "../../BtnSingInGoogle/BtnSingInGoogle"
import BtnSingInFacebook from "../../BtnSingInFacebook/BtnSingInFacebook"


import { TweenLite } from "gsap";

class SingInSlide extends React.Component {
  constructor(props) {
    super(props);
    // reference to the DOM node
    this.myElement = null;
    // reference to the animation
    this.myTween = null;
    this.state = {
      mode: "CLOSE",
    };
  }
  
  toggle() {
    let newMode;
    if (this.state.mode === "CLOSE") {
      newMode = "OPEN";
    } else {
      newMode = "CLOSE";
    }
    this.setState({
      mode: newMode,
    });
  }

  componentDidMount() {
    const { mode } = this.state;
    const destY = mode === "CLOSE" ? 1 : 0;
    this.myTween = TweenLite.to(this.myElement, 1, {
      opacity: destY,
    });
    this.myTween.eventCallback("onComplete", () => {
      this.toggle();
     
    });
  }
  render() {
    return (
      <div 
      ref={(div) => (this.myElement = div)} className="singInSlideBox">
        <SingIn />
        <div className="separationLineCheckout">
          <hr className="separationLine1"></hr>
          <p>OR </p>
          <hr className="separationLine2"></hr>
        </div>
        <BtnSingInGoogle />
        <BtnSingInFacebook />
      </div>
    )
  }
}

export default SingInSlide
