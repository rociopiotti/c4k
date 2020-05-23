import React from "react";
import "./App.scss";

// CONTEXT
import PageManagerContext from "./context/pageManager-context";

// ROUTES
import Routes from "./router/Routes";

// SECTIONS

// SLIDES
import NavSlide from "./components/NavSlide/NavSlide";
import CartSlide from "./components/CartSlide/CartSlide";
import FilterSlide from "./components/FilterSlide/FilterSlide";
import SortSlide from "./components/SortSlide/SortSlide";
import SingInCreateAccountNavslide from "./components/SingInCreateAccountNavSlide/SingInCreateAccountNavSlide";
import ForgotPasswordSlide from "./components/ForgotPasswordSlide/ForgotPasswordSlide";
import ForgotPasswordModal from "./components/ForgotPasswordModal/ForgotPasswordModal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.NavBox = null;
    this.NavBackground = null;

    this.state = {
      currentSection: "home",
      currentSlide: null,
      mode: "CLOSE",
    };
  }

  handleSlide(newSlide) {
    this.setState({
      currentSlide: newSlide,
    });
  }

  render() {
    console.log("CURRENT SECTION", this.state.currentSection);
    return (
      <PageManagerContext.Provider
        value={{
          //SETS STATE CURRENT SLIDE
          onSlideBtn: this.handleSlide.bind(this),
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
