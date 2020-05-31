import React from "react";
import "./GridContainer.scss";
import GridContainerHeader from "./GridContainerHeader/GridContainerHeader";
import GridProductList from "../GridProductList/GridProductList";
import SectionTransition from "../SectionTransition/SectionTransition";
import axios from "axios";

class GridContainer extends React.Component {
  state = {
    data: {},
  };

  componentDidMount() {
    window.scrollTo(0, 0);

    axios.get(`http://localhost:3000/db.json`).then((res) => {
      this.setState({
        data: res.data,
      });
    });
  }

  render() {
    const currentPath = this.props.location.pathname;
    const currentPathSplitted = currentPath.split("/");
    const productId = currentPathSplitted[2];

    console.log(productId);

    return (
      <div className='gridContainerBox'>
        <SectionTransition />
        <GridContainerHeader />
        <GridProductList
          productId={productId}
          data={this.state.data[productId]}
        />
      </div>
    );
  }
}

export default GridContainer;
