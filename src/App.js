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
// import { FAQ_DB } from "./utils/path";

//ANMATION
import { Timeline, Back } from "gsap/gsap-core";

// EASING
const ease = Back.easeInOut;

// let one = URL_PRODUCTS;
// let two = FAQ_DB;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: null,
      data: null,
      faqData: null,
      cart: [],
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

  // //--------- GET DATABASE
  // handleGetDatabase() {
  //   const requestOne = axios.get(one);
  //   const requestTwo = axios.get(two);

  //   axios
  //     .all([requestOne, requestTwo])
  //     .then(
  //       axios.spread((...res) => {
  //         const responseOne = res[0];
  //         const responseTwo = res[1];
  //         this.setState({
  //           data: responseOne.data,
  //           faqData: responseTwo.faqData,
  //         });
  //       })
  //     )
  //     .catch((error) => console.log("NOT WORKING", error));
  // }

  //--------- GET DATABASE
  handleFaqDatabase() {
    // axios
    //   .get(FAQ_DB)
    //   .then((response) => {
    //     this.setState({
    //       faqData: response.faqData,
    //     });
    //   })
    //   .catch((error) => console.log("FAQ DATA NOT WORKING", error));
    // console.log (this.state.faqData)
  }

  //--------- ADDS ITEM TO CART ARRAY
  handleAddToCart(newItem) {
    const newCart = [...this.state.cart, newItem];
    this.setState({
      cart: newCart,
    });
  }

  handleDeleteFromCart(productId, index) {
    let productIndex = index;
    // let newCart = [];
    this.state.cart.forEach((element, index) => {
      if (productId === element.id) {
        productIndex = index;
        return;
      }
    });

    console.log(productIndex);

    // let newCart = [...this.state.cart].slice([...this.state.cart], -productIndex);
  }

  componentDidMount() {
    this.handleGetDatabase();
  }

  handleDataBase() {
    let allProducts = [];

    // 1. Iterar sobre el objecto database completo.
    // 2. Iterar sobre el array de cada categoria.
    for (let key in this.state.data) {
      // base de datos > ingresar en bags > extraer el array
      // mergearlos en un nuevo array:
      if (key === "settings") {
        break;
      }
      allProducts = [...allProducts, ...this.state.data[key]];
    }

    return allProducts;
  }

  // handleFaqDataBase() {
  //   let allFaq = [];

  //   for (let key in this.state.faqData) {
  //     allFaq = [...allFaq, ...this.state.faqData[key]];
  //   }

  //   console.log(allFaq);
  //   return allFaq;
  // }

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
          // PASSES CART HANLDER
          handleAddToCart: this.handleAddToCart.bind(this),
          // PASSES STATE CART
          cart: this.state.cart,
          // PASSES DATABASE CONVERTED INTO AN ARRAY
          handleDataBase: this.handleDataBase(),
          //PASSES FAQ DATA BASE
          handleFaqDatabase: this.handleFaqDatabase(),
          // REMOVE CART ITEM
          handleDeleteFromCart: this.handleDeleteFromCart.bind(this),
        }}>
        <div className='app'>
          <Routes></Routes>
        </div>
      </PageManagerContext.Provider>
    );
  }
}

export default App;
