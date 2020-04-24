import React from "react"
import "./Logo.scss"
import logo from '../../img/logo.svg'; 

class Logo extends React.Component {
  render() {
    return (
      <a className="logo">
         <img src={logo} alt="Logo" />
      </a>
    )
  }
}

export default Logo
