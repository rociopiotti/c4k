import React from "react";
import "./GridContainer.scss";
import GridContainerHeader from "./GridContainerHeader/GridContainerHeader";
import GridProductList from "../GridProductList/GridProductList";
import SectionTransition from "../SectionTransition/SectionTransition";

// CONTEXT
import PageManagerContext from "../../context/pageManager-context";

class GridContainer extends React.Component {
  static contextType = PageManagerContext;

  componentDidMount() {
    window.scrollTo("15vh", 0);
  }

  render() {
    const currentPath = this.props.location.pathname;
    const currentPathSplitted = currentPath.split("/");
    const productId = currentPathSplitted[2];

    return (
      <div className='gridContainerBox'>
        <SectionTransition />
        <GridContainerHeader />
        <GridProductList
          productId={productId}
          data={this.context.itemsData[productId]}
        />
      </div>
    );
  }
}

export default GridContainer;
