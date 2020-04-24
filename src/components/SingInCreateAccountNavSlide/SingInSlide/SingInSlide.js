import React from "react"
import "./SingInSlide.scss"
import SingIn from "../../SingIn/SingIn"

import BtnSingInGoogle from "../../BtnSingInGoogle/BtnSingInGoogle"
import BtnSingInFacebook from "../../BtnSingInFacebook/BtnSingInFacebook"

class SingInSlide extends React.Component {
  render() {
    return (
      <div className="singInSlideBox">
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
