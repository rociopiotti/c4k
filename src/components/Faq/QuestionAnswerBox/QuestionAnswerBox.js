import React from "react";
import "./QuestionAnswerBox.scss";

import Icon from "../../Icon/Icon";

//ANMATION
import { Timeline, Back } from "gsap/gsap-core";

const ease = Back.easeInOut;
export class QuestionAnswerBox extends React.Component {
  constructor(props) {
    super(props);
    this.FaqBox = null;

    this.state = {
      searchState: false,
      mode: "OPEN",
    };
  }

  toggle() {
    const { mode } = this.state;
    const newMode = mode === "OPEN" ? "CLOSE" : "OPEN";
    this.setState({
      mode: newMode,
    });
  }

  handleQuestionClick() {
    let windowsWidth = window.innerWidth;
    const { mode } = this.state;
    if (windowsWidth > 850) {
      const marginInput = mode === "OPEN" ? "+=11vh" : "-=11vh";
      const tl = new Timeline();
      tl.to(this.FaqBox, { ease: ease, marginTop: marginInput }, 0);
      tl.eventCallback("onComplete", () => {
        this.toggle();
      });
    }
    if (windowsWidth > 800 && windowsWidth <= 1024) {
      const marginInput = mode === "OPEN" ? "+=35vh" : "-=35vh";
      const tl = new Timeline();
      tl.to(this.FaqBox, { marginTop: marginInput }, 0);
      tl.eventCallback("onComplete", () => {
        this.toggle();
      });
    }
    if (windowsWidth > 754 && windowsWidth <= 800) {
      const marginInput = mode === "OPEN" ? "+=30vh" : "-=30vh";
      const tl = new Timeline();
      tl.to(this.FaqBox, { marginTop: marginInput }, 0);
      tl.eventCallback("onComplete", () => {
        this.toggle();
      });
    }
    if (windowsWidth <= 754) {
      const marginInput = mode === "OPEN" ? "+=45vh" : "-=45vh";
      const tl = new Timeline();
      tl.to(this.FaqBox, { marginTop: marginInput }, 0);
      tl.eventCallback("onComplete", () => {
        this.toggle();
      });
    }
  }

  render() {
    return (
      <div className="questionAnswerBox">
        <button
          onClick={() => {
            this.handleQuestionClick();
          }}>
          <h4 className="question">
            How can I contact a C4K?<span></span> <Icon type="arrowDown" />
          </h4>
        </button>
        <div className="answerBox">
          <div ref={(div) => (this.FaqBox = div)} className="answer">
            <p>
              Lorem ipsum dolor sit amet, mauris ipsum iaculis porttitor
              vestibulum primis, amet duis varius dolor egestas nunc, et
              placerat sapien urna natoque augue, gravida sagittis. Metus morbi
              sed, eros libero non id risus, diam porttitor risus magnis, ipsum
              varius, pellentesque consectetu
            </p>
          </div>
        </div>
      </div>
    );
  }
}
