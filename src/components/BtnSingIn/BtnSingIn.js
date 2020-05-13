import React from "react"
import "./BtnSingIn.scss"

class BtnSingIn extends React.Component {
  handleSingIn (SingIn)  {
    // console.log("Click en botón:", SingIn)
  }
  render() {
   
    return (
      <button
        onClick={() => {
            this.handleSingIn("SingIn")
        }}
        className="btnSingIn">
        SING IN
      </button>
    )
  }
}

export default BtnSingIn
