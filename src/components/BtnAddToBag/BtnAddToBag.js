import React from "react"
import "./BtnAddToBag.scss"

class BtnAddToBag extends React.Component {
  
  render() {
    return (
      <button
        onClick={() => {
          this.props.clickAddToBag()
        }}
        className="btnAddToBag">
        ADD TO BAG
      </button>
    )
  }
}

export default BtnAddToBag
