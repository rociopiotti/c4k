import React from "react";
import "./App.scss";

// CONTEXT
import PageManagerContext from "./context/pageManager-context";

// SECTIONS
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import GridContainer from "./components/GridContainer/GridContainer";
import ProductBox from "./components/ProductBox/ProductBox";
import Stores from "./components/Stores/Stores";
import Faq from "./components/Faq/Faq";
import About from "./components/About/About";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions";
import Checkout from "./components/Checkout/Checkout";
// import PaymentGateway from "./components/PaymentGateway/PaymentGateway";
// import PaymentConfirmation from "./components/PaymentConfirmation/PaymentConfirmation";

// SLIDES
import NavSlide from "./components/NavSlide/NavSlide";
import CartSlide from "./components/CartSlide/CartSlide";
import FilterSlide from "./components/FilterSlide/FilterSlide";
import SortSlide from "./components/SortSlide/SortSlide";
import SingInCreateAccountNavslide from "./components/SingInCreateAccountNavSlide/SingInCreateAccountNavSlide";
// import ForgotPasswordSlide from "./components/ForgotPasswordSlide/ForgotPasswordSlide";
// import ForgotPasswordModal from "./components/ForgotPasswordModal/ForgotPasswordModal";
// import ProductDetails from "./components/ProductDetails/ProductDetails";
// import SuggestedItemGallery from "./components/SuggestedItemGallery/SuggestedItemGallery";

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
    console.log("CAMBIAR EL SLIDER POR: ", newSlide);
    this.setState({
      currentSlide: newSlide,
    });
  }
  setSlide(slideType) {
    let slide;

    switch (slideType) {
      default:
        slide = null;
        break;
      case "navSlide":
        slide = <NavSlide />;
        break;
      case "cartSlide":
        slide = <CartSlide />;
        break;
      case "singInSlide":
        slide = <SingInCreateAccountNavslide />;
        break;
      case "filter":
        slide = <FilterSlide />;
        break;
      case "sort":
        slide = <SortSlide />;
        break;
    }
    return slide;
  }
  handleSection(newSection) {
    console.log("CAMBIAR EL Section POR: ", newSection);
    this.setState({
      currentSection: newSection,
      currentSlide: null,
    });
  }
  setSection(sectionType) {
    let section;
    switch (sectionType) {
      case "home":
        section = <Home />;
        break;
      case "trousers":
        section = <GridContainer />;
        break;
      case "tshirts":
        section = <GridContainer />;
        break;
      case "bags":
        section = <GridContainer />;
        break;
      case "shoes":
        section = <GridContainer />;
        break;
      case "newArrivals":
        section = <GridContainer />;
        break;
      case "productDetails":
        section = <ProductBox />;
        break;
      case "checkout":
        section = <Checkout />;
        break;
      case "stores":
        section = <Stores />;
        break;
      case "faq":
        section = <Faq />;
        break;
      case "about":
        section = <About />;
        break;
      case "termsAndCondition":
        section = <TermsAndConditions />;
        break;
      case "privacyPloicy":
        section = <PrivacyPolicy />;
        break;
      default:
        section = null;
        break;
    }
    return section;
  }
  render() {
    return (
      <PageManagerContext.Provider
        value={{
          onSlideBtn: this.handleSlide.bind(this),
          onSectionBtn: this.handleSection.bind(this),
        }}>
        <div className="app">
          {this.setSlide(this.state.currentSlide)}

          <Header />

          {this.setSection(this.state.currentSection)}

          <Footer />
        </div>
      </PageManagerContext.Provider>
    );
  }
}

export default App;
