import React from "react";
import "./About.scss";

import AboutPhoto from "../../img/aboutPhoto.png";

//ANIMATION
import { TweenMax } from "gsap";
import { TimelineMax } from "gsap";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.textAbout1 = null;
    this.textAbout2 = null;
    this.myTween = null;
  }

  animation() {
    const myTween = new TimelineMax({ repeat: -1 });
    myTween
      .from(this.textAbout1, 0, { x: "-100%" }, 0)
      .to(this.textAbout1, 15, { x: "+400%"}, 0)
      .from(this.textAbout2, 0, { x: "-170%" }, 0)
      .to(this.textAbout2, 17, {x: "+300%"   }, 0);
  }

  componentDidMount() {
    this.animation();
  }
  render() {
    return (
      <div className="aboutBackground">
        <img src={AboutPhoto} alt="About photo" className="aboutPhoto" />
        <div className="aboutBox">
          <p className="aboutText1" ref={(p) => (this.textAbout1 = p)}>
            C4K IS POST ## CIBER ## PUNK ## NO GENDER CLOTHES ## CRUELTY FREE
            PROCESS ## EQUAL RIGHTS WORK ## FARE TRADE PRODUCTS ## KEEP IN IT
            TRUE TO OURSELVES ###
          </p>
          <p className="aboutText2" ref={(p) => (this.textAbout2 = p)}>
            C4K IS POST ## CIBER ## PUNK ## NO GENDER CLOTHES ## CRUELTY FREE
            PROCESS ## EQUAL RIGHTS WORK ## FARE TRADE PRODUCTS ## KEEP IN IT
            TRUE TO OURSELVES ###
          </p>
        </div>
      </div>
    );
  }
}

export default About;
