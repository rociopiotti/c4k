import React from "react";
import "./FilterSlide.scss";
import HeaderSlideCloseLeft from "../HeaderSlideCloseLeft/HeaderSlideCloseLeft";

import PageManagerContext from "../../context/pageManager-context";

//ANMATION
import { Timeline, Back } from "gsap/gsap-core";

const ease = Back.easeInOut;

//JSON
const filsterList = [
  { id: "0", name: "FILTRO A", label: "FILTRO A" },
  { id: "1", name: "FILTRO B", label: "FILTRO B" },
  { id: "2", name: "FILTRO C", label: "FILTRO C" },
  { id: "3", name: "FILTRO D", label: "FILTRO D" },
  { id: "4", name: "FILTRO E", label: "FILTRO E" },
];

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
    // console.log("Click en botón de filtro:", ID);
  }
  componentDidMount() {
    const tl = new Timeline({ ease: ease });
    tl.to(this.SlideBackground, { left: 0 });
    tl.to(this.NavCloseBackground, { opacity: 0.8 }, 0.4);
  }

  createList() {
    return filsterList.map((element, index) => {
      const { id, name, label } = element;

      return (
        <li className="listItem" key={id}>
          <button
            onClick={() => {
              this.clickFilterLink(label);
            }}>
            {name}
          </button>
        </li>
      );
    });
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
            <ul className="filterSlide">{this.createList()}</ul>
          </div>
        </div>
      </div>
    );
  }
}
export default FilterSlide;
