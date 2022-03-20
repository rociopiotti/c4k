import React, { Component } from "react";
import "./Stores.scss";
import { SearchStores, StoreListItem, StoreMap } from "./childs";
import { SectionTransition } from "../shared-components";

//CONTEXT
import PageManagerContext from "../../context/pageManager-context";

class Stores extends Component {
  state = {
    currentMode: "storeAndMap",
    currentSearchState: false,
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  handleSearchStores(newState) {
    this.setState({
      currentMode: newState,
    });
  }
  setMode(displayModeType) {
    let modeDisplay;
    switch (displayModeType) {
      case "storeAndMap":
        modeDisplay = (
          <div className="displayModeBox">
            <StoreListItem /> <StoreMap />
          </div>
        );
        break;
      case "storeList":
        modeDisplay = (
          <div className="displayListBox">
            <StoreListItem />
          </div>
        );
        break;
      case "storeMap":
        modeDisplay = (
          <div className="displayMapBox">
            <StoreMap />
          </div>
        );
        break;
      default:
        modeDisplay = null;
        break;
    }
    return modeDisplay;
  }
  handleSearchBtnStores(newSearchState) {
    this.setState({
      currentSearchState: true,
    });
  }
  render() {
    return (
      <PageManagerContext.Provider
        value={{
          onSearchDisplayClick: this.handleSearchStores.bind(this),
          onSearcBtnClick: this.handleSearchBtnStores.bind(this),
        }}>
        <div className="storePageBox">
          <SectionTransition />

          <h2>#STORES</h2>
          <div className="storePage">
            <SearchStores />
            {this.setMode(this.state.currentMode)}
          </div>
        </div>
      </PageManagerContext.Provider>
    );
  }
}

export default Stores;
