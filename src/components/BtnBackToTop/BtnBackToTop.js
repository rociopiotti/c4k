import React from "react"
import "./BtnBackToTop.scss"

class BtnBackToTop extends React.Component {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  render() {
    return (
      <button
        onClick={() => {
          this.scrollToTop()
        }}
        className="btnBackToTop">
        BACK TO TOP
      </button>
    )
  }
}

export default BtnBackToTop
