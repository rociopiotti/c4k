import React from "react"
import "./BtnBackToTop.scss"

class BtnBackToTop extends React.Component {
  state = {
    is_visible: false,
  }
  componentDidMount() {
    var scrollComponent = this
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility()
    })
  }
  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      })
    } else {
      this.setState({
        is_visible: false,
      })
    }
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  render() {
    const { is_visible } = this.state
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
