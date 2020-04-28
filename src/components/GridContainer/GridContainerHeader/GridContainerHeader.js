import React from "react"
import "./GridContainerHeader.scss"
import GridFilter from "../../GridFilter/GridFliter"
import GridSort from "../../GridSort/GridSort"

class GridContainerHeader extends React.Component {
  handleFilterSlide  () {
    this.props.onGridFilter("filter")
  }
  handleSortSlide  (){
    this.props.onGridFilter("sort")
  }
  render() {
  
    return (
      <div className="gridContainerHeaderBox">
        <div className="gridTitle">
          <h2>#GRID TITLE</h2>
        </div>
        <button
          onClick={() => {
            this.handleFilterSlide()
          }}
          className="gridFilter">
          <GridFilter />
        </button>
        <button
          onClick={() => {
            this.handleSortSlide()
          }}
          className="gridSort">
          <GridSort />
        </button>
      </div>
    )
  }
}

export default GridContainerHeader
