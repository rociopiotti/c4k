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
  handleGridFilter(newSlide) {
    console.log("CAMBIAR EL SLIDER POR: ", newSlide)
    this.setState({
      currentSlide: newSlide,
    })
  }
  handleHomeClick(newSection) {
    console.log("CAMBIAR EL Section POR: ", newSection)

    this.setState({
      currentSection: newSection,
    })
  }

  setSlide(slideType) {
    let slide
    switch (slideType) {
      case "navSlide":
        slide = (
          <NavSlide
            onCloseClick={this.handleHeaderClick.bind(this)}
            onNavItemClick={this.handleHomeClick.bind(this)}
            onMenuNavClick={this.handleHeaderClick.bind(this)}
          />
        )
        break
      case "cartSlide":
        slide = <CartSlide onCloseClick={this.handleHeaderClick.bind(this)} />
        break
      case "singInSlide":
        slide = (
          <SingInCreateAccountNavslide
            onCloseClick={this.handleHeaderClick.bind(this)}
          />
        )
        break
      case "searchBox":
        slide = <SearchBox onCloseClick={this.handleHeaderClick.bind(this)} />
        break
      case "filter":
        slide = <FilterSlide onCloseClick={this.handleHeaderClick.bind(this)} />
        break
      case "sort":
        slide = <SortSlide onCloseClick={this.handleHeaderClick.bind(this)} />
        break
      default:
        slide = null
        break
    }
    return slide
  }
  setSection(sectionType) {
    let section
    switch (sectionType) {
      case "home":
        section = <Home onHomeMenuClick={this.handleHomeClick.bind(this)} />
        break
      case "trousers":
        section = (
          <GridContainer
            onGridFilter={this.handleGridFilter.bind(this)}
            onProductClick={this.handleHomeClick.bind(this)}
          />
        )
        break
      case "tshirts":
        section = (
          <GridContainer
            onGridFilter={this.handleGridFilter.bind(this)}
            onProductClick={this.handleHomeClick.bind(this)}
          />
        )
        break
      case "bags":
        section = (
          <GridContainer
            onGridFilter={this.handleGridFilter.bind(this)}
            onProductClick={this.handleHomeClick.bind(this)}
          />
        )
        break
      case "shoes":
        section = (
          <GridContainer
            onGridFilter={this.handleGridFilter.bind(this)}
            onProductClick={this.handleHomeClick.bind(this)}
          />
        )
        break
      case "newArrivals":
        section = (
          <GridContainer
            onGridFilter={this.handleGridFilter.bind(this)}
            onProductClick={this.handleHomeClick.bind(this)}
          />
        )
        break
      case "productDetails":
        section = <ProductBox />
        break
      case "stores":
        section = <Stores />
        break
      case "faq":
        section = <Faq />
        break
      case "about":
        section = <About />
        break
      case "termsAndCondition":
        section = <TermsAndConditions />
        break
      case "privacyPloicy":
        section = <PrivacyPolicy />
        break
      default:
        section = null
        break
    }
    return section
  }

  render() {
    library.add(fab, faSearch)
    library.add(fab, faBars)
    // console.log("------> CURRENT SLIDE:", this.state.currentSlide)
    // console.log("------> CURRENT SECTION:", this.state.currentSection)
    console.log("------> CURRENT SECTION:", this.state.currentSection)
    return (
      <div className="app">
        {this.setSlide(this.state.currentSlide)}
        {/* <ForgotPasswordModal/> */}

        <Header
          onMenuClick={this.handleHeaderClick.bind(this)}
          onHomeMenuClick={this.handleHomeClick.bind(this)}
        />
        {this.setSection(this.state.currentSection)}

        {/* <SuggestedItemGallery/> */}
        {/* <Checkout/> */}
        {/* <PaymentGateway/> */}
        {/* <PaymentConfirmation/> */}

        <Footer
          onFooterMenuClick={this.handleHomeClick.bind(this)}
          onHomeMenuClick={this.handleHomeClick.bind(this)}
        />
      </div>
    )
  }
}

export default App
