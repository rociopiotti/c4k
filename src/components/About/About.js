import React from "react"
import "./About.scss"

import AboutPhoto from "../../img/aboutPhoto.png"

class About extends React.Component {
  render() {
    return (
      <div className="aboutBackground">
        <div className="aboutBox">
          <img src={AboutPhoto} alt="About photo" className="aboutPhoto" />
          <p className="aboutText1">
            C4K IS POST ## CIBER ## PUNK ## NO GENDER CLOTHES ## CRUELTY FREE
            PROCESS ## EQUAL RIGHTS WORK ## FARE TRADE PRODUCTS ## KEEP IN IT
            TRUE TO OURSELVES ###
          </p>
          <p className="aboutText2">
            C4K IS POST ## CIBER ## PUNK ## NO GENDER CLOTHES ## CRUELTY FREE
            PROCESS ## EQUAL RIGHTS WORK ## FARE TRADE PRODUCTS ## KEEP IN IT
            TRUE TO OURSELVES ###
          </p>
        </div>
      </div>
    )
  }
}

export default About
