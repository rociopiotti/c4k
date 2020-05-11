import React from "react";
import "./Faq.scss";
import Icon from "../Icon/Icon";
import BtnBackToTop from "../BtnBackToTop/BtnBackToTop";
import { QuestionAnswerBox } from "./QuestionAnswerBox/QuestionAnswerBox";

class Faq extends React.Component {
  handleSearchFaq() {
    this.setState({
      searchState: true,
    });
  }

  handleInputChange(event) {
    // console.log("Ingreso texto");
  }
  render() {
    // console.log("-->CURRENT STATE QUESTION", this.state.currentState);
    // console.log("--->CURRENT STATE SEARCH FAQ", this.state.searchState);

    return (
      <div
        onClick={() => {
          this.handleSearchFaq();
        }}
        className="FaqBox">
        <h2>#FAQ</h2>

        <div className="Faq">
          <div className="FaqSearchBox">
            <input
              type="text"
              placeholder="SEARCH FAQ"
              className="searchFaq"
              onChange={this.handleInputChange}></input>
            <span></span>
            <button className="faqSearchBoxIcon">
              <Icon type="search" />
            </button>
          </div>
          <h3>GENERAL</h3>
          <QuestionAnswerBox />
          <QuestionAnswerBox />
          
          <h3>SHIPPING</h3>
          <QuestionAnswerBox />
          <BtnBackToTop />
        </div>
      </div>
    );
  }
}

export default Faq;
