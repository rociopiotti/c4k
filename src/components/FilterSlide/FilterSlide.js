import React from "react"
import "./FilterSlide.scss"
import HeaderSlideCloseLeft from "../HeaderSlideCloseLeft/HeaderSlideCloseLeft"

class FilterSlide extends React.Component {
  clickFilterLink(ID) {
    console.log("Click en botón de filtro:", ID)
  }
  render() {
    return (
      <div className="filterSlideBackground">
        <div className="filterSlideBackgroundBox">
          <div className="filterSlideBox">
            <HeaderSlideCloseLeft onCloseClick={this.props.onCloseClick}/>
            <h2 className="filterTitle">#FILTER</h2>
            <ul className="filterSlide">
              <li>
                <button
                  onClick={() => {
                    this.clickFilterLink("FILTRO A")
                  }}>
                  FILTRO A
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.clickFilterLink("FILTRO B")
                  }}>
                  FILTRO B
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.clickFilterLink("FILTRO C")
                  }}>
                  FILTRO C
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.clickFilterLink("FILTRO D")
                  }}>
                  FILTRO D
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.clickFilterLink("FILTRO E")
                  }}>
                  FILTRO E
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default FilterSlide
