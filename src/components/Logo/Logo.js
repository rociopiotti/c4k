import React from "react";
import "./Logo.scss";
import logo from "../../img/logo.svg";

class Logo extends React.Component {
  render() {
    return (
      <div  className="logo" >
        <img src={logo} alt="Logo"/>
      </div>
    );
  }
}

export default Logo;
