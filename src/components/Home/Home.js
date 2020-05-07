import React from "react"
import "./Home.scss"
import MenuCategories from "./MenuCategories"
import BackgroundImg from "./BackgroundImg"
import BtnShop from "../BtnShop/BtnShop"
class Home extends React.Component {
  state = {
    stateBtnShop: false
  }
  handleBtnShop() {
    this.setState  ({
      stateBtnShop:true,
    })
  }
  render() {
    // console.log("------> ESTADO BTN SHOP:", this.state.stateBtnShop)
    return (
      <div className="home">
      <h1 className="title">C-4K</h1>
        <BtnShop onClickBtnShop= {this.handleBtnShop.bind(this)} />      
        <BackgroundImg/>
        <MenuCategories onHomeMenuClick={this.props.onHomeMenuClick} />
      </div>
    )
  }
}

export default Home
