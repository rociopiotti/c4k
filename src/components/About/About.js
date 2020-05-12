import React from "react";
import "./About.scss";

import AboutPhoto from "../../img/aboutPhoto.png";
import SectionTransition from "../SectionTransition/SectionTransition";

//ANIMATION
import { TimelineMax } from "gsap";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.textAbout1 = null;
    this.textAbout2 = null;
  }

  animation() {
    const myTween = new TimelineMax({ repeat: -1 });
    myTween
      .from(this.textAbout1, 0, { x: "0vw" }, 0)
      .to(this.textAbout1, 45, { x: "120vw"}, 0)
      .from(this.textAbout2, 0, { x: "-150vw" }, 5)
      .to(this.textAbout2, 50, {x: "150vw"   }, 5);
  }

  componentDidMount() {
    this.animation();
  }
  render() {
    return (
      <div className="aboutBackground">
        <SectionTransition />

        <img src={AboutPhoto} alt="About photo" className="aboutPhoto" />
        <div className="aboutBox">
          <p className="aboutText1" ref={(p) => (this.textAbout1 = p)}>
            C4K IS POST ## CIBER <br></br>## PUNK ## NO GENDER CLOTHES<br></br> ## CRUELTY FREE
            PROCESS ## EQUAL RIGHTS WORK <br></br>## FARE TRADE PRODUCTS<br></br> ## KEEP IN IT
            TRUE TO OURSELVES ###
          </p>
          <p className="aboutText2" ref={(p) => (this.textAbout2 = p)}>
            C4K IS POST<br></br> ## CIBER ## PUNK<br></br> ## NO GENDER CLOTHES ## CRUELTY FREE
            PROCESS<br></br> ## EQUAL RIGHTS WORK ## FARE TRADE PRODUCTS<br></br> ## KEEP IN IT
            TRUE TO OURSELVES ###
          </p>
        </div>
      </div>
    );
  }
}

export default About;
