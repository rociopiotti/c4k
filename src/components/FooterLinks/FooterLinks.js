import React, { Component } from "react";
import "./FooterLinks.scss";

import PageManagerContext from "../../context/pageManager-context";

// ROUTER

import { Link } from "react-router-dom";
//JSON
const footerMenu = [
  { id: "0", name: "STORES", label: "stores" },
  { id: "1", name: "HELP", label: "help" },
  { id: "2", name: "TERMS AND CONDITIONS", label: "termsandconditions" },
  { id: "3", name: "PRIVACY POLICY", label: "privacypolicy" },
];

class FooterLinks extends Component {
  static contextType = PageManagerContext;
  createList() {
    return footerMenu.map((element, index) => {
      const { id, name } = element;

      const separator = index !== footerMenu.length -1 ? " | " : ""

      return (
        <li className='listItem' key={id}>
        <Link to={`${element.label}`}>{name}{separator}</Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div className='footerLinksBox'>
        <ul className='footerLinksList'>{this.createList()}</ul>
      </div>
    );
  }
}

export default FooterLinks;
