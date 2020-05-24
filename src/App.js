import React from "react";
import "./App.scss";

// CONTEXT
import PageManagerContext from "./context/pageManager-context";

// ROUTES
import Routes from "./router/Routes";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSection: "home",
      currentSlide: null,
      
    };
  }

  //--------- CHANGES SLIDE STATE
  handleSlide(newSlide) {
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
        }}>
        <div className='app'>
          <Routes></Routes>
        </div>
      </PageManagerContext.Provider>
    );
  }
}

export default App;
