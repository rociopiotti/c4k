import React from "react"
import "./BtnAddToBag.scss"

class BtnAddToBag extends React.Component {
  handleAddToBag(AddItemToCart) {
    console.log("Click en el botón y:", AddItemToCart)
  }
  render() {
    return (
      <button
        onClick={() => {
          this.handleAddToBag("AddItemToCart")
        }}
        className="btnAddToBag">
        ADD TO BAG
      </button>
    )
  }
}

export default BtnAddToBag
