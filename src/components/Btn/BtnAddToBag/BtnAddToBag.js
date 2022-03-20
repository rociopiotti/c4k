import React, { Component } from "react";
import "./BtnAddToBag.scss";

class BtnAddToBag extends Component {
  render() {
    return (
      <button
        onClick={() => {
          this.props.onClickAddToBag();
        }}
        className='btnAddToBag'>
        ADD TO BAG
      </button>
    );
  }
}

export default BtnAddToBag;
