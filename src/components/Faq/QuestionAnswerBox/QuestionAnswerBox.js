import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import "./QuestionAnswerBox.scss";

import Icon from "../../Icon/Icon";

//ANIMATION
import { TweenLite, Back } from "gsap/gsap-core";

const ease = Back.easeInOut;

class QuestionAnswerBox extends Component {
  constructor(props) {
    super(props);
    this.FaqBox = [];
  }

  handleQuestionClick(index) {
    const expandedH = isMobile ? "200px" : "100px";
    const height = this.FaqBox[index].clientHeight === 0 ? expandedH : 0;

    TweenLite.to(this.FaqBox[index], {
      ease,
      height,
      onComplete: this.setState({
        currentIndex: index,
      }),
    });
  }

  render() {
    const { title, items } = this.props;

    return (
      <>
        <h3>{title}</h3>
        
        {items.map((QA, index) => {
          return (
            <div key={index} className='questionAnswerBox'>
              <button
                onClick={() => {
                  this.handleQuestionClick(index);
                }}>
                <h4 key={index} className='question'>
                  {QA.question}
                  <span></span> <Icon type='arrowDown' />
                </h4>
              </button>
              <div
                key={index}
                className='answerBox'
                ref={(e) => (this.FaqBox[index] = e)}>
                <p className='answer'>{QA.answer}</p>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default QuestionAnswerBox;
