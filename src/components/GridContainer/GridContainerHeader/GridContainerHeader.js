import React from "react"
import "./GridContainerHeader.scss"
import GridFilter from "../../GridFilter/GridFliter"
import GridSort from "../../GridSort/GridSort"

class GridContainerHeader extends React.Component {
  handleFilterSlide  (FilterSlide) {
    console.log("Click en el boton que abre:", FilterSlide)
  }
  handleSortSlide  (SortSlide){
    console.log("Click en el boton que abre:", SortSlide)
  }
  render() {
  
    return (
      <div className="gridContainerHeaderBox">
        <div className="gridTitle">
          <h2>#GRID TITLE</h2>
        </div>
        <button
          onClick={() => {
            this.handleFilterSlide("FilterSlide")
          }}
          className="gridFilter">
          <GridFilter />
        </button>
        <button
          onClick={() => {
            this.handleSortSlide("SortSlide")
          }}
          className="gridSort">
          <GridSort />
        </button>
      </div>
    )
  }
}

export default GridContainerHeader
