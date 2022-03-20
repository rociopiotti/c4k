import React from "react";
import "./Logo.scss";
import logo from "../../../img/logo.svg";

export const Logo = () => {
  return <img src={logo} className='logo' alt='Logo' />;
};

