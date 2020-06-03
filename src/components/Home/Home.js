import React from "react";
import "./Home.scss";
import MenuCategories from "./MenuCategories";
import BackgroundImg from "./BackgroundImg";
import BtnShop from "../BtnShop/BtnShop";

// TRANSITION COMPONENT
import SectionTransition from "../SectionTransition/SectionTransition";

class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  handleBtnShop() {
    let windowsWidth = window.innerWidth;
    if (windowsWidth > 850) {
      window.scrollTo({
        top: 1000,
        behavior: "smooth",
      });
    }
    if (windowsWidth > 800 && windowsWidth <= 1024) {
      window.scrollTo({
        top: 400,
        behavior: "smooth",
      });
    }
    if (windowsWidth > 754 && windowsWidth <= 800) {
      window.scrollTo({
        top: 2000,
        behavior: "smooth",
      });
    }
    if (windowsWidth <= 754) {
      window.scrollTo({
        top: 1100,
        behavior: "smooth",
      });
    }
  }

  render() {
    return (
      <div className='home'>
        <SectionTransition />
        <h1 className='title'>C-4K</h1>
        <BtnShop onClickBtnShop={this.handleBtnShop.bind(this)} />
        <BackgroundImg />
        <MenuCategories />
      </div>
    );
  }
}

export default Home;
