import React from "react";
import "./App.scss";

// CONTEXT
import PageManagerContext from "./context/pageManager-context";

// ROUTES
import Routes from "./router/Routes";

//ANMATION
import { Timeline, Back } from "gsap/gsap-core";

// EASING
const ease = Back.easeInOut;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: null,
    };

    this.handleSlide = this.handleSlide.bind(this);
  }

  leftSlideOutAnimation(refs, onComplete) {
    const { backgroundRef, wrapperRef } = refs;
    const tl = new Timeline({
      onComplete,
      ease: ease,
    });
    tl.to(backgroundRef, { opacity: 0 });
    tl.to(wrapperRef, { left: "100vw" }, 0.4);
  }

  //--------- CHANGES SLIDE STATE
  handleSlide(newSlide) {
    console.log("handleSlide");

    this.setState({
      currentSlide: newSlide,
    });
  }

  render() {
    return (
      <PageManagerContext.Provider
        value={{
          //SETS STATE CURRENT SLIDE
          onSlideBtn: this.handleSlide.bind(this),
          // PASSES STATE CURRENT SLIDE
          currentSlide: this.state.currentSlide,
          //
          // Dispara la animación de salida del Slide:
          leftSlideOutAnimation: this.leftSlideOutAnimation,
        }}>
        <div className='app'>
          <Routes></Routes>
        </div>
      </PageManagerContext.Provider>
    );
  }
}

export default App;
