import React from "react";
import "./SortSlide.scss";
import HeaderSlideCloseLeft from "../HeaderSlideCloseLeft/HeaderSlideCloseLeft";
import Icon from "../Icon/Icon";

//ANMATION
import { Timeline, Back } from "gsap/gsap-core";

const ease = Back.easeInOut;

class SortSlide extends React.Component {
  constructor(props) {
    super(props);
    this.SlideBackground = null;
    this.NavCloseBackgroun = null;

    this.state = {};
  }

  //--------------------------------------------------------
  executeAnimation(value, onCompleteHandler) {
    const tl = new Timeline({
      onComplete: () => onCompleteHandler(value),
      ease: ease,
    });
    tl.to(this.NavCloseBackground, { opacity: 0 });
    tl.to(this.SlideBackground, { left: "100vw" }, 0.4);
  }
  //--------------------------------------------------------

  clickCloseNav() {
    this.executeAnimation(null, this.props.onCloseClick);
  }

  clickSortLink(ID) {
    console.log("Click en botón que ordena:", ID);
  }

  componentDidMount() {
    const tl = new Timeline({
      ease: ease,
    });
    tl.to(this.SlideBackground, { left: 0 });
    tl.to(this.NavCloseBackground, { opacity: 0.8 }, 0.4);
  }

  render() {
    return (
      <div
        className="sortSlideBackground"
        ref={(div) => (this.SlideBackground = div)}>
        <div
          ref={(div) => (this.NavCloseBackground = div)}
          onClick={() => {
            this.clickCloseNav();
          }}
          className="sortCloseBackground"></div>
        <div className="sortSlideBackgroundBox">
          <div className="sortSlideBox">
            <HeaderSlideCloseLeft onCloseClick={this.clickCloseNav.bind(this)} />

            <h2 className="sortTitle">#SORT</h2>
            <ul className="sortSlide">
              <li>
                <button
                  onClick={() => {
                    this.clickSortLink("NAME [A-Z]");
                  }}>
                  <Icon type="sortAZ" />
                  NAME [A-Z]
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.clickSortLink("NAME [Z-A]");
                  }}>
                  <Icon type="sortZA" />
                  NAME [Z-A]
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.clickSortLink("PRICE LOW TO HIGH");
                  }}>
                  <Icon type="sort" />
                  PRICE LOW TO HIGH
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.clickSortLink("PRICE HIGH TO LOW");
                  }}>
                  <Icon type="sort" />
                  PRICE HIGH TO LOW
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.clickSortLink("POPULAR");
                  }}>
                  <Icon type="heart" />
                  POPULAR
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default SortSlide;
