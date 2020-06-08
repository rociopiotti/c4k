import React from "react";
import "./GridContainerHeader.scss";
import GridFilter from "../../GridFilter/GridFliter";
import GridSort from "../../GridSort/GridSort";

import PageManagerContext from "../../../context/pageManager-context";

class GridContainerHeader extends React.Component {
  static contextType = PageManagerContext;

  handleFilterSlide() {
    this.context.onSlideBtn("filter");
  }
  handleSortSlide() {
    this.context.onSlideBtn("sort");
  }

  createTitle() {
    const titles = {
      trousers: "TROUSERS",
      tshirts: "T-SHIRTS",
      bags: "BAGS",
      shoes: "SHOES",
      newarrivals: "NEW ARRIVALS",
    };

    const cleanTitle = this.props.title;

    const title = titles[cleanTitle];

    return title;
  }
  render() {
    return (
      <div className='gridContainerHeaderBox'>
        <div className='gridTitle'>
          <h2>#{this.createTitle()}</h2>
        </div>
        <button
          onClick={() => {
            this.handleFilterSlide();
          }}
          className='gridFilter'>
          <GridFilter />
        </button>
        <button
          onClick={() => {
            this.handleSortSlide();
          }}
          className='gridSort'>
          <GridSort />
        </button>
      </div>
    );
  }
}

export default GridContainerHeader;
