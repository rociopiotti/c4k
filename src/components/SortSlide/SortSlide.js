import React from "react";
import "./SortSlide.scss";
import HeaderSlideCloseLeft from "../HeaderSlideCloseLeft/HeaderSlideCloseLeft";
import Icon from "../Icon/Icon";

class SortSlide extends React.Component {
  clickSortLink(ID) {
    console.log("Click en botón que ordena:", ID);
  }
  render() {
    return (
      <div className="sortSlideBackground">
        <div className="sortSlideBackgroundBox">
          <div className="sortSlideBox">
            <HeaderSlideCloseLeft onCloseClick={this.props.onCloseClick} />

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
        <div
          onClick={() => {
            this.props.onCloseClick(null);
          }}
          className="sortCloseBackground"></div>
      </div>
    );
  }
}
export default SortSlide;
