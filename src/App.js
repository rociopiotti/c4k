import React from "react";
import "./App.scss";

// CONTEXT
import PageManagerContext from "./context/pageManager-context";

// ROUTES
import Routes from "./router/Routes";

// AXIOS
import axios from "axios";

// DATABASE PATH

import { URL_PRODUCTS } from "./utils/path";

//ANMATION
import { Timeline, Back } from "gsap/gsap-core";

// EASING
const ease = Back.easeInOut;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: null,
      data: null,
    };

    this.handleSlide = this.handleSlide.bind(this);
  }

  //-------- ANIMATION SLIDE EXIT
  slideOutAnimation(type, refs, onComplete, newSlide) {
    let direction = type === "left" ? "-100vw" : "100vw";

    const { backgroundRef, wrapperRef } = refs;

    const tl = new Timeline({
      onComplete: () => onComplete(newSlide),
      ease: ease,
    });
    tl.to(backgroundRef, { opacity: 0 });
    tl.to(wrapperRef, { left: direction }, 0.4);
  }

  //-------- ANIMATION SLIDE ENTER
  slideInAnimation(refs) {
    const { backgroundRef, wrapperRef } = refs;
    const tl = new Timeline({ ease: ease, repeat: 0, repeatDelay: 0 });
    tl.to(wrapperRef, { left: 0 });
    tl.to(backgroundRef, { opacity: "0.8" }, 0.4);
  }

  //--------- CHANGES SLIDE STATE
  handleSlide(newSlide) {
    this.setState({
      currentSlide: newSlide,
    });
  }

  //--------- GET DATABASE

  handleGetDatabase() {
    axios
      .get(URL_PRODUCTS)
      .then((res) => {
        this.setState({
          data: res.data,
        });
      })
      .catch((error) => console.log("NOT WORKING", error));
  }

  componentDidMount() {
    this.handleGetDatabase();
  }

  render() {
    if (!this.state.data) {
      return <div>... loading</div>;
    }
    return (
      <PageManagerContext.Provider
        value={{
          // SETS STATE CURRENT SLIDE
          onSlideBtn: this.handleSlide.bind(this),
          // PASSES STATE CURRENT SLIDE
          currentSlide: this.state.currentSlide,
          // ANIMATION SLIDE
          slideOutAnimation: this.slideOutAnimation,
          slideInAnimation: this.slideInAnimation,
          // PASSES DATA BASE
          itemsData: this.state.data,
        }}>
        <div className='app'>
          <Routes></Routes>
        </div>
      </PageManagerContext.Provider>
    );
  }
}

export default App;
