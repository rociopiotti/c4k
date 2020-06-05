import React from "react";
import "./Faq.scss";
import Icon from "../Icon/Icon";
import BtnBackToTop from "../BtnBackToTop/BtnBackToTop";
import QuestionAnswerBox from "./QuestionAnswerBox/QuestionAnswerBox";
import SectionTransition from "../SectionTransition/SectionTransition";

// AXIOS
import axios from "axios";

import { FAQ_DB } from "../../utils/path";

class Faq extends React.Component {
  state = {
    dataFaq: null,
    searchState: false,
  };

  handleSearchFaq() {
    this.setState({
      searchState: true,
    });
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.handlegetFaqDb();
  }

  handleInputChange(event) {}

  handlegetFaqDb() {
    axios
      .get(FAQ_DB)
      .then((res) => {
        this.setState({
          dataFaq: res.data,
        });
      })
      .catch((error) => console.log("NOT WORKING", error));
  }

  handleFaqDataBase() {
    let allfaq = [];
    if (!this.state.dataFaq) {
      return;
    } else {
      for (let key in this.state.dataFaq) {
        allfaq = [...allfaq, ...this.state.dataFaq[key]];
      }
      console.log(allfaq);
      return allfaq;
    }
  }

  render() {
    if (!this.state.dataFaq) {
      return <div>... loading</div>;
    }
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
            <button onClick={this.handleSearchFaq.bind(this)} className='faqSearchBoxIcon'>
              <Icon type='search' />
            </button>
          </div>
          <h3>GENERAL</h3>
          <QuestionAnswerBox  />
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
