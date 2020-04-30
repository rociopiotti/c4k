import React from "react"
import "./Faq.scss"
import Icon from "../Icon/Icon"
import BtnBackToTop from "../BtnBackToTop/BtnBackToTop"

class Faq extends React.Component {
  state = {
    currentState: false,
    searchState: false
  }
  handleQuestionClick() {
    this.setState({
      currentState: true,
    })
  }
  handleSearchFaq() {
    this.setState({
      searchState: true,
    })
  }
  handleInputChange(event) {
    console.log("Ingreso texto")
  }
  render() {
    console.log("-->CURRENT STATE QUESTION", this.state.currentState)
    console.log(
      "--->CURRENT STATE SEARCH FAQ",
      this.state.searchState
    )

    return (
      <div className="FaqBox">
        <h2>#FAQ</h2>

        <div className="Faq">
          <div className="FaqSearchBox">
            <button
              onClick={() => {
                this.handleSearchFaq()
              }}
              className="faqSearchBoxIcon">
              <Icon />
            </button>
            <span></span>
            <input
              type="text"
              placeholder="SEARCH FAQ"
              className="searchFaq"
              onChange={this.handleInputChange}></input>
          </div>
          <div className="questionAnswerBox">
            <h3>GENERAL</h3>
            <button
              onClick={() => {
                this.handleQuestionClick()
              }}>
              <h4 className="question">
                How can I contact a C4K?<span></span> <Icon />
              </h4>
            </button>
            <div className="answer">
              <p>
                Lorem ipsum dolor sit amet, mauris ipsum iaculis porttitor
                vestibulum primis, amet duis varius dolor egestas nunc, et
                placerat sapien urna natoque augue, gravida sagittis. Metus
                morbi sed, eros libero non id risus, diam porttitor risus
                magnis, ipsum varius, pellentesque consectetu
              </p>
            </div>
          </div>

          <BtnBackToTop />
        </div>
      </div>
    )
  }
}

export default Faq
