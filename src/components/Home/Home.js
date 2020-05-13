import React from "react";
import "./Home.scss";
import MenuCategories from "./MenuCategories";
import BackgroundImg from "./BackgroundImg";
import BtnShop from "../BtnShop/BtnShop";

class Home extends React.Component {

  handleBtnShop() {
    let windowsWidth = window.innerWidth;
    if (windowsWidth > 850) {
      window.scrollTo({
        top: 2000,
        behavior: "smooth",
      });
    }
    if (windowsWidth > 800 && windowsWidth <= 1024) {
      window.scrollTo({
        top: 500,
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
        top: 1200,
        behavior: "smooth",
      });
    }
  }
  render() {
    return (
      <div className="home">
        <h1 className="title">C-4K</h1>
        <BtnShop onClickBtnShop={this.handleBtnShop.bind(this)} />
        <BackgroundImg />
        <div>
          <MenuCategories />
        </div>
      </div>
    );
  }
}

export default Home;
