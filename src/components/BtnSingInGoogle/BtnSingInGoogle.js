import React from "react"
import "./BtnSingInGoogle.scss"

class BtnSingInGoogle extends React.Component {
   handleSingInGoogle  (url) {
    console.log("Click en botón que lleva a:", url)
  }
  render() {
    
    return (
      <button
        onClick={() => {
          this.handleSingInGoogle("SingInGoogleApi")
        }}
        className="btnSingInGoogle">
        GOOGLE
      </button>
    )
  }
}

export default BtnSingInGoogle
