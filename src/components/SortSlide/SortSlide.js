import React, { Component } from "react";
import "./SortSlide.scss";
import HeaderSlideCloseLeft from "../HeaderSlideCloseLeft/HeaderSlideCloseLeft";
import Icon from "../Icon/Icon";

// CONTEXT
import PageManagerContext from "../../context/pageManager-context";

//JSON
const sortList = [
  { id: "0", name: "NAME [A-Z]", icon: "sortAZ", label: "NAME [A-Z]" },
  { id: "1", name: "NAME [Z-A]", icon: "sortZA", label: "NAME [Z-A]" },
  {
    id: "2",
    name: "PRICE LOW TO HIGH",
    icon: "sort",
    label: "PRICE LOW TO HIGH",
  },
  {
    id: "3",
    name: "PRICE HIGH TO LOW",
    icon: "sort",
    label: "PRICE HIGH TO LOW",
  },
  { id: "4", name: "POPULAR", icon: "heart", label: "POPULAR" },
];
class SortSlide extends Component {
  static contextType = PageManagerContext;

  constructor(props) {
    super(props);
    this.SlideBackground = null;
    this.NavCloseBackgroun = null;
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

  clickSortLink(ID) {
    console.log("Click en botón que ordena:", ID);
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
    return sortList.map((element) => {
      const { id, name, icon, label } = element;

      return (
        <li className='listItem' key={id}>
          <button
            onClick={() => {
              this.clickSortLink(label);
            }}>
            <Icon type={icon} />
            {name}
          </button>
        </li>
      );
    });
  }
  render() {
    return (
      <div
        className='sortSlideBackground'
        ref={(div) => (this.SlideBackground = div)}>
        <div
          ref={(div) => (this.NavCloseBackground = div)}
          onClick={this.executeAnimation}
          className='sortCloseBackground'></div>
        <div className='sortSlideBackgroundBox'>
          <div className='sortSlideBox'>
            <HeaderSlideCloseLeft onCloseArrow={this.executeAnimation} />
            <h2 className='sortTitle'>#SORT</h2>
            <ul className='sortSlide'>{this.createList()}</ul>
          </div>
        </div>
      </div>
    );
  }
}
export default SortSlide;
