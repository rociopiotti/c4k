import React from "react";
import "./BtnAddToBag.scss";

// CONTEXT
import PageManagerContext from "../../context/pageManager-context";

class BtnAddToBag extends React.Component {
  static contextType = PageManagerContext;

  addItem() {
    const itemData = this.props.itemData;
    const newItem = { id: itemData, quantity: "1" };

    this.context.hanldeCartItem(newItem);
    // console.log(this.props.itemData)
  }

  render() {
    return (
      <button
        onClick={() => {
          this.addItem();
          this.context.onSlideBtn("cartSlide");
        }}
        className='btnAddToBag'>
        ADD TO BAG
      </button>
    );
  }
}

export default BtnAddToBag;
