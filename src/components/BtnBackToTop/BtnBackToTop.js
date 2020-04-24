import React from "react"
import "./BtnBackToTop.scss"

class BtnBackToTop extends React.Component {
 handleGoToTop (GoToTop){
    console.log("Click en el boton que muestra", GoToTop)
  }
  render() {
    
    return (
      <button
        onClick={() => {
          this.handleGoToTop("GoToTop")
        }}
        className="btnBackToTop">
        BACK TO TOP
      </button>
    )
  }
}

export default BtnBackToTop
