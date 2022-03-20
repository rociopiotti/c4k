import React, { Component } from "react";
import "./Faq.scss";
import Icon from "../Icon/Icon";
import BtnBackToTop from "../Btn/BtnBackToTop/BtnBackToTop"
import QuestionAnswerBox from "./QuestionAnswerBox/QuestionAnswerBox";
import SectionTransition from "../SectionTransition/SectionTransition";

//CONTEXT
import PageManagerContext from "../../context/pageManager-context";

class Faq extends Component {
  static contextType = PageManagerContext;

  state = {
    searchState: false,
  };

  handleSearchFaq() {
    this.setState({
      searchState: true,
    });
  }

  handleInputChange(event) {}

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleFaqDataBase() {
    const { faqData } = this.context;
    return faqData.map((item) => {
      return (
        <QuestionAnswerBox
          key={item.id}
          title={item.title}
          items={item.items}
        />
      );
    });
  }

  render() {
    return (
      <div className='FaqBox'>
        <SectionTransition />
        <h2>#FAQ</h2>
        <div className='Faq'>
          <div className='FaqSearchBox'>
            <input
              type='text'
              placeholder='SEARCH FAQ'
              className='searchFaq'
              onChange={this.handleInputChange}></input>
            <span></span>
            <button
              onClick={this.handleSearchFaq.bind(this)}
              className='faqSearchBoxIcon'>
              <Icon type='search' />
            </button>
          </div>
          {this.handleFaqDataBase()}
          <BtnBackToTop />
        </div>
      </div>
    );
  }
}

export default Faq;
