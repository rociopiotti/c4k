import React from "react"
import "./BtnAddToBag.scss"

// CONTEXT
import PageManagerContext from "../../context/pageManager-context";

class BtnAddToBag extends React.Component {
  static contextType = PageManagerContext;
  
  render() {
    return (
      <button
        onClick={() => {
          this.context.onSlideBtn("cartSlide");
        }}
        className="btnAddToBag">
        ADD TO BAG
      </button>
    )
  }
}

export default BtnAddToBag
