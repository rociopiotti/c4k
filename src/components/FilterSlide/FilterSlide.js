import React from "react";
import "./FilterSlide.scss";
import HeaderSlideCloseLeft from "../HeaderSlideCloseLeft/HeaderSlideCloseLeft";

import PageManagerContext from "../../context/pageManager-context";

//ANMATION
import { Timeline, Back } from "gsap/gsap-core";

const ease = Back.easeInOut;

class FilterSlide extends React.Component {
  static contextType = PageManagerContext;

  constructor(props) {
    super(props);
    this.SlideBackground = null;
    this.NavCloseBackground = null;
    this.state = {};
  }

  //-----------------------------------------------------------------

  executeAnimation(value, onCompleteHandler) {
    const tl = new Timeline({
      onComplete: () => onCompleteHandler(value),
      ease: ease,
    });
    tl.to(this.NavCloseBackground, { opacity: 0 });
    tl.to(this.SlideBackground, { left: "100vw" }, 0.4);
  }
  //-----------------------------------------------------------------

  clickCloseNav() {
    this.executeAnimation(null, this.context.onSlideBtn);
  }
  clickFilterLink(ID) {
    console.log("Click en botón de filtro:", ID);
  }
  componentDidMount() {
    const tl = new Timeline({ ease: ease });
    tl.to(this.SlideBackground, { left: 0 });
    tl.to(this.NavCloseBackground, { opacity: 0.8 }, 0.4);
  }
  render() {
    return (
      <div
        className="filterSlideBackground"
        ref={(div) => (this.SlideBackground = div)}>
        <div
          ref={(div) => (this.NavCloseBackground = div)}
          onClick={() => {
            this.clickCloseNav();
          }}
          className="filterCloseBackground"></div>
        <div className="filterSlideBackgroundBox">
          <div className="filterSlideBox">
            <HeaderSlideCloseLeft />
            <h2 className="filterTitle">#FILTER</h2>
            <ul className="filterSlide">
              <li>
                <button
                  onClick={() => {
                    this.clickFilterLink("FILTRO A");
                  }}>
                  FILTRO A
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.clickFilterLink("FILTRO B");
                  }}>
                  FILTRO B
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.clickFilterLink("FILTRO C");
                  }}>
                  FILTRO C
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.clickFilterLink("FILTRO D");
                  }}>
                  FILTRO D
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.clickFilterLink("FILTRO E");
                  }}>
                  FILTRO E
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default FilterSlide;
