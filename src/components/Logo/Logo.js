import React from "react";
import "./Logo.scss";
import logo from "../../img/logo.svg";

class Logo extends React.Component {
  render() {
    return <img src={logo} className='logo' alt='Logo' />;
  }
}

export default Logo;
