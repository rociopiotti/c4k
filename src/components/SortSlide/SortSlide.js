import React from "react"
import "./SortSlide.scss"
import HeaderSlideCloseLeft from "../HeaderSlideCloseLeft/HeaderSlideCloseLeft"

class SortSlide extends React.Component {
  clickSortLink(ID) {
    console.log("Click en botón que ordena:", ID)
  }
  render() {
    return (
      <div className="sortSlideBackground">
     
        <div className="sortSlideBackgroundBox">
          <div className="sortSlideBox">
            <HeaderSlideCloseLeft  onCloseClick={this.props.onCloseClick}/>
            <h2 className="sortTitle">#SORT</h2>
            <ul className="sortSlide">
              <li>
                <button
                  onClick={() => {
                    this.clickSortLink("NAME [A-Z]")
                  }}>
                  NAME [A-Z]
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.clickSortLink("NAME [Z-A]")
                  }}>
                  NAME [Z-A]
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.clickSortLink("PRICE LOW TO HIGH")
                  }}>
                  PRICE LOW TO HIGH
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.clickSortLink("PRICE HIGH TO LOW")
                  }}>
                  PRICE HIGH TO LOW
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.clickSortLink("POPULAR")
                  }}>
                  POPULAR
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div onClick={() => {
            this.props.onCloseClick(null)
          }} className="sortCloseBackground"></div>
      </div>
    )
  }
}
export default SortSlide
