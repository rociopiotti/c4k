import React from "react"
import "./BackgroundImg.scss"
import backgroundImg from "../../img/backgroundHome.png"

class BackgroundImg extends React.Component {
  render() {
    return (
      <div className="backgroundImg">
        <img src={backgroundImg} alt="Background" />
      </div>
    )
  }
}

export default BackgroundImg
