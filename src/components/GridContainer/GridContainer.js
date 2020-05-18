import React from "react";
import "./GridContainer.scss";
import GridContainerHeader from "./GridContainerHeader/GridContainerHeader";
import GridProductList from "../GridProductList/GridProductList";
import SectionTransition from "../SectionTransition/SectionTransition";

class GridContainer extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="gridContainerBox">
        <SectionTransition />
        <GridContainerHeader />
        <GridProductList />
      </div>
    );
  }
}

export default GridContainer;
