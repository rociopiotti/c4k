import React from "react"
import "./BtnShop.scss"
import Icon from "../Icon/Icon"

class BtnShop extends React.Component {
  handleShowMenuCategories() {
    this.props.onClickBtnShop()
  }
  render() {
    return (
      <button
        onClick={() => {
          this.handleShowMenuCategories()
        }}
        className="btnShop">
        <Icon type="arrowLeft" className="arrowIcon" /> SHOP
      </button>
    )
  }
}

export default BtnShop
