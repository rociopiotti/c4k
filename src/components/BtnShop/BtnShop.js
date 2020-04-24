import React from "react"
import "./BtnShop.scss"
import Icon from "../Icon/Icon"

class BtnShop extends React.Component {
   handleShowMenuCategories  (MenuCategories)  {
    console.log("Click en el boton que muestra", MenuCategories)
  }
  render() {
   

    return (
      <button
        onClick={() => {
          this.handleShowMenuCategories("MenuCategories")
        }}
        className="btnShop">
        <Icon className="arrowIcon" /> SHOP
      </button>
    )
  }
}

export default BtnShop
