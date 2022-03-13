import React, { Component } from "react";
import "./BtnShop.scss";
import Icon from "../Icon/Icon";

class BtnShop extends Component {
  handleShowMenuCategories() {
    this.props.onClickBtnShop();
  }
  render() {
    return (
      <button
        onClick={() => {
          this.handleShowMenuCategories();
        }}
        className='btnShop'>
        <Icon type='arrowLeftChevron' className='arrowIcon' />
        <span></span>
        SHOP
      </button>
    );
  }
}

export default BtnShop;
