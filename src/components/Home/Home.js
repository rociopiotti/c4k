import React from "react"
import "./Home.scss"
import MenuCategories from "./MenuCategories"
import BackgroundImg from "./BackgroundImg"
import BtnShop from "../BtnShop/BtnShop"
class Home extends React.Component {
  
  render() {
    return (
      <div className="home">
      <h1 className="title">C-4K</h1>
        <BtnShop/>      
        <BackgroundImg/>
        <MenuCategories onHomeMenuClick={this.props.onHomeMenuClick} />
      </div>
    )
  }
}

export default Home
