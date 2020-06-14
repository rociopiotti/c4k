import React, {Component} from "react";
import "./About.scss";

// IMG
import AboutPhoto from "../../img/aboutPhoto.png";
import AboutPhotoLowRes from "../../img/aboutPhotoLowRes.png";

// TRANSITION COMPONENT
import SectionTransition from "../SectionTransition/SectionTransition";

//ANIMATION
import { TimelineMax } from "gsap";

// MOBILE
import { isMobile } from "react-device-detect";

class About extends Component {
  constructor(props) {
    super(props);
    this.textAbout1 = null;
    this.textAbout2 = null;
  }

  animation() {
    const myTween = new TimelineMax({ repeat: -1 });
    myTween
      .from(this.textAbout1, 0, { x: "0vw" }, 0)
      .to(this.textAbout1, 35, { x: "120vw" }, 0)
      .from(this.textAbout2, 0, { x: "-150vw" }, 5)
      .to(this.textAbout2, 45, { x: "150vw" }, 5);
  }

  renderImage() {
    if (isMobile) {
      return <img src={AboutPhotoLowRes} alt='About' className='aboutPhoto' />;
    } else {
      return <img src={AboutPhoto} alt='About' className='aboutPhoto' />;
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.animation();
  }
  render() {
    return (
      <div className='aboutBackground'>
        <SectionTransition />

        {this.renderImage()}
        <div className='aboutBox'>
          <p className='aboutText1' ref={(p) => (this.textAbout1 = p)}>
            C4K IS POST ## CIBER <br></br>## PUNK ## NO GENDER CLOTHES<br></br>{" "}
            ## CRUELTY FREE PROCESS ## EQUAL RIGHTS WORK <br></br>## FARE TRADE
            PRODUCTS<br></br> ## KEEP IN IT TRUE TO OURSELVES ###
          </p>
          <p className='aboutText2' ref={(p) => (this.textAbout2 = p)}>
            C4K IS POST<br></br> ## CIBER ## PUNK<br></br> ## NO GENDER CLOTHES
            ## CRUELTY FREE PROCESS<br></br> ## EQUAL RIGHTS WORK ## FARE TRADE
            PRODUCTS<br></br> ## KEEP IN IT TRUE TO OURSELVES ###
          </p>
        </div>
      </div>
    );
  }
}

export default About;
