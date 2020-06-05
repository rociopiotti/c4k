import React, { Component } from "react";
import "./QuestionAnswerBox.scss";

import Icon from "../../Icon/Icon";

//CONTEXT
// import PageManagerContext from "../../../context/pageManager-context";

//ANIMATION
import { Timeline, Back } from "gsap/gsap-core";

const ease = Back.easeInOut;

class QuestionAnswerBox extends Component {
  //   static contextType = PageManagerContext;

  constructor(props) {
    super(props);
    this.FaqBox = [];

    this.state = {
      mode: "OPEN",
    };
  }

  toggle() {
    const { mode } = this.state;
    const newMode = mode === "OPEN" ? "CLOSE" : "OPEN";
    this.setState({
      mode: newMode,
    });
    console.log("HERE 5");
  }

  handleQuestionClick() {
    let windowsWidth = window.innerWidth;
    const { mode } = this.state;
    console.log("HERE");
    if (windowsWidth > 1024) {
      console.log("HERE 1");

      const marginInput = mode === "OPEN" ? "+=16vh" : "-=16vh";
      const tl = new Timeline();
      tl.to(this.FaqBox, { ease: ease, marginTop: marginInput }, 0);
      tl.eventCallback("onComplete", () => {
        this.toggle();
      });
    }
    if (windowsWidth > 800 && windowsWidth < 1024) {
      console.log("HERE 2");

      const marginInput = mode === "OPEN" ? "+=35vh" : "-=35vh";
      const tl = new Timeline();
      tl.to(this.FaqBox, { marginTop: marginInput }, 0);
      tl.eventCallback("onComplete", () => {
        this.toggle();
      });
    }
    if (windowsWidth > 754 && windowsWidth <= 800) {
      console.log("HERE 3");

      const marginInput = mode === "OPEN" ? "+=30vh" : "-=30vh";
      const tl = new Timeline();
      tl.to(this.FaqBox, { marginTop: marginInput }, 0);
      tl.eventCallback("onComplete", () => {
        this.toggle();
      });
    }
    if (windowsWidth <= 754) {
      console.log("HERE 4");

      const marginInput = mode === "OPEN" ? "+=45vh" : "-=45vh";
      const tl = new Timeline();
      tl.to(this.FaqBox, { marginTop: marginInput }, 0);
      tl.eventCallback("onComplete", () => {
        this.toggle();
      });
    }
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
                  this.handleQuestionClick();
                }}>
                <h4 key={index} className='question'>
                  {QA.question}
                  <span></span> <Icon type='arrowDown' />
                </h4>
              </button>
              <div
                key={index}
                
                className='answerBox'>
                <p className='answer' ref={(e) => (this.FaqBox[index] = e)}>{QA.answer}</p>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default QuestionAnswerBox;
