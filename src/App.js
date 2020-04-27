import React from "react"
import "./App.scss"
import Header from "./components/Header/Header.js"
import Home from "./components/Home/Home"
import Footer from "./components/Footer/Footer"
import GridContainer from "./components/GridContainer/GridContainer"
import SuggestedItemGallery from "./components/SuggestedItemGallery/SuggestedItemGallery"
import ProductBox from "./components/ProductBox/ProductBox"
import Checkout from "./components/Checkout/Checkout"
import PaymentGateway from "./components/PaymentGateway/PaymentGateway"
import PaymentConfirmation from "./components/PaymentConfirmation/PaymentConfirmation"
import Stores from "./components/Stores/Stores"
import Faq from "./components/Faq/Faq"
import About from "./components/About/About"

import SearchBox from "./components/SearchBox/SeachBox"
import NavSlide from "./components/NavSlide/NavSlide"
import CartSlide from "./components/CartSlide/CartSlide"
import FilterSlide from "./components/FilterSlide/FilterSlide"
import SortSlide from "./components/SortSlide/SortSlide"
import SingInCreateAccountNavslide from "./components/SingInCreateAccountNavSlide/SingInCreateAccountNavSlide"
import ForgotPasswordSlide from "./components/ForgotPasswordSlide/ForgotPasswordSlide"
import ForgotPasswordModal from "./components/ForgotPasswordModal/ForgotPasswordModal"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy"
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions"

class App extends React.Component {
  state = {
    currentSection: "home",
    currentSlide: null,
  }

  handleHeaderClick(newSlide) {
    console.log("CAMBIAR EL SLIDER POR: ", newSlide)

    this.setState({
      currentSlide: newSlide,
    })
  }

  setSlide(slideType) {
    let slide
    switch (slideType) {
      case "navSlide":
        slide = <NavSlide onCloseClick={this.handleHeaderClick.bind(this)} />
        break
      case "cartSlide":
        slide = <CartSlide onCloseClick={this.handleHeaderClick.bind(this)} />
        break
      case "singInSlide":        
        slide= <SingInCreateAccountNavslide onCloseClick={this.handleHeaderClick.bind(this)}/>
        break
      case "SearchBox":
        slide=  <SearchBox onCloseClick={this.handleHeaderClick.bind(this)}/> 
      break
      default:
        slide = null
        break
    }
    return slide
  }

  render() {
    library.add(fab, faSearch)
    library.add(fab, faBars)
    // console.log("------> CURRENT SLIDE:", this.state.currentSlide)

    return (
      <div className="app">
        {this.setSlide(this.state.currentSlide)}        
        {/* <FilterSlide /> */}
        {/* <SortSlide /> */}
        {/* <ForgotPasswordSlide/>  */}
        {/* <ForgotPasswordModal/> */}

        <Header onMenuClick={this.handleHeaderClick.bind(this)} />
        <Home />
        {/* <GridContainer /> */}
        {/* <ProductBox/> */}
        {/* <SuggestedItemGallery/> */}
        {/* <Checkout/> */}
        {/* <PaymentGateway/> */}
        {/* <Stores/> */}
        {/* <Faq /> */}
        {/* <About/> */}
        {/* <PaymentConfirmation/> */}
        {/* <PrivacyPolicy/> */}
        {/* <TermsAndConditions/> */}
        <Footer />
      </div>
    )
  }
}

export default App
