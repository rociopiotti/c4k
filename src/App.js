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
import { FAQ_DB } from "./utils/path";

//ANMATION
import { Timeline, Back } from "gsap/gsap-core";

// EASING
const ease = Back.easeInOut;

// DATABASE VARIABLES
let one = URL_PRODUCTS;
let two = FAQ_DB;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: null,
      data: null,
      faqData: null,
      cart: [
        {
          colors: "BLACK",
          id: "21",
          quantity: 1,
          size: "XXS",
        },
        { colors: "BLACK", id: "20", quantity: 1, size: "XXS" },

        { colors: "BLACK", id: "7", quantity: 1, size: "XXS" },

        { colors: "BLACK", id: "19", quantity: 1, size: "XXS" },
      ],
      searchResultList: [],
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

  //--------- GET DATABASES
  handleGetDatabase() {
    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);

    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((...res) => {
          const responseOne = res[0];
          const responseTwo = res[1];
          this.setState({
            data: responseOne.data,
            faqData: responseTwo.data,
          });
        })
      )
      .catch((error) => console.log("NOT WORKING", error));
  }

  //--------- ADDS ITEM TO CART ARRAY
  handleAddToCart(newItem) {
    const { cart } = this.state;

    const alreadyInCart = cart.filter((cartItem) => {
      return newItem.id === cartItem.id;
    });

    if (alreadyInCart.length > 0) {
      // TODO: Mostar aviso de item in cart.
      return;
    }

    const newCart = [...cart, newItem];
    this.setState({
      cart: newCart,
    });
  }

  //--------- DELETES ITEM CART ARRAY
  handleDeleteFromCart(index) {
    const { cart } = this.state;
    const cartCloned = [...cart];
    cartCloned.splice(index, 1);
    this.setState({
      cart: cartCloned,
    });
  }

  handleUpdateQuantity(itemId, quantity) {
    const { cart } = this.state;
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity,
        };
      }
      return item;
    });

    this.setState({
      cart: updatedCart,
    });
  }

  componentDidMount() {
    this.handleGetDatabase();
  }

  handleDataBase() {
    let allProducts = [];

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

  handleSearchProducts(value) {
    const newResult = value;
    this.setState({
      searchResultList: newResult,
    });
  }

  render() {
    if (!this.state.data && !this.state.faqData) {
      return <div>... loading</div>;
    }
    console.log(this.state.cart);

    return (
      <PageManagerContext.Provider
        value={{
          // SETS STATE CURRENT SLIDE
          onSlideBtn: this.handleSlide.bind(this), // TODO: Pasar binds al constructor.
          // PASSES STATE CURRENT SLIDE
          currentSlide: this.state.currentSlide,
          // ANIMATION SLIDE
          slideOutAnimation: this.slideOutAnimation,
          slideInAnimation: this.slideInAnimation,
          // PASSES PRODUCTS DATA BASE
          itemsData: this.state.data,
          // FAQ DATABASE
          faqData: this.state.faqData,
          // PASSES CART HANLDER
          handleAddToCart: this.handleAddToCart.bind(this),
          handleUpdateQuantity: this.handleUpdateQuantity.bind(this),
          // PASSES STATE CART
          cart: this.state.cart,
          // PASSES DATABASE CONVERTED INTO AN ARRAY
          handleDataBase: this.handleDataBase(),

          // REMOVE CART ITEM
          handleDeleteFromCart: this.handleDeleteFromCart.bind(this),

          // SEARCH
          handleSearchProducts: this.handleSearchProducts.bind(this),
          //searchResultList
          searchResultList: this.state.searchResultList,
        }}>
        <div className='app'>
          <Routes></Routes>
        </div>
      </PageManagerContext.Provider>
    );
  }
}

export default App;
