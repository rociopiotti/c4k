import React from "react"
import "./GridContainer.scss"
import GridContainerHeader from "./GridContainerHeader/GridContainerHeader"
import GridProductList from "../GridProductList/GridProductList"

class GridContainer extends React.Component {
  render() {
    return (
      <div className="gridContainerBox">
        <GridContainerHeader onGridFilter={this.props.onGridFilter} />
        <GridProductList onProductClick={this.props.onProductClick} />
      </div>
    )
  }
}

export default GridContainer
