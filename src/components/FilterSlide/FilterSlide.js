import React, { Component } from "react";
import "./FilterSlide.scss";
import HeaderSlideCloseLeft from "../HeaderSlideCloseLeft/HeaderSlideCloseLeft";

//CONTEXT
import PageManagerContext from "../../context/pageManager-context";

//JSON
const filsterList = [
  { id: "0", name: "FILTRO A", label: "FILTRO A" },
  { id: "1", name: "FILTRO B", label: "FILTRO B" },
  { id: "2", name: "FILTRO C", label: "FILTRO C" },
  { id: "3", name: "FILTRO D", label: "FILTRO D" },
  { id: "4", name: "FILTRO E", label: "FILTRO E" },
];

class FilterSlide extends Component {
  static contextType = PageManagerContext;

  constructor(props) {
    super(props);
    this.SlideBackground = null;
    this.NavCloseBackground = null;
    this.state = {};
    this.executeAnimation = this.executeAnimation.bind(this);
  }

  executeAnimation() {
    this.context.slideOutAnimation(
      "right",
      {
        backgroundRef: this.NavCloseBackground,
        wrapperRef: this.SlideBackground,
      },
      this.context.onSlideBtn
    );
  }

  clickFilterLink(ID) {
    console.log("Click en botón de filtro:", ID);
  }
  componentDidMount() {
    document.body.style.overflowY = "hidden";
    this.context.slideInAnimation({
      backgroundRef: this.NavCloseBackground,
      wrapperRef: this.SlideBackground,
    });
  }
  componentWillUnmount() {
    document.body.style.overflow = "unset";
  }

  createList() {
    return filsterList.map((element, index) => {
      const { id, name, label } = element;

      return (
        <li className='listItem' key={id}>
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
        className='filterSlideBackground'
        ref={(div) => (this.SlideBackground = div)}>
        <div
          ref={(div) => (this.NavCloseBackground = div)}
          onClick={this.executeAnimation}
          className='filterCloseBackground'></div>
        <div className='filterSlideBackgroundBox'>
          <div className='filterSlideBox'>
            <HeaderSlideCloseLeft onCloseArrow={this.executeAnimation} />
            <h2 className='filterTitle'>#FILTER</h2>
            <ul className='filterSlide'>{this.createList()}</ul>
          </div>
        </div>
      </div>
    );
  }
}
export default FilterSlide;
