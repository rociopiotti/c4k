import React from "react"
import "./BtnSingInFacebook.scss"

class BtnSingInFacebook extends React.Component {
  handleSingInFacebook  (url)  {
    console.log("Click en botón que lleva a:", url)
  }
  render() {
 
    return (
      <button
        onClick={() => {
          this.handleSingInFacebook("SingInFacebookApi")
        }}
        className="btnSingInFacebook">
        FACEBOOK
      </button>
    )
  }
}

export default BtnSingInFacebook
