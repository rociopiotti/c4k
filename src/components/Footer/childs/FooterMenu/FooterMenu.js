import React, { Component } from "react";
import "./FooterMenu.scss";
import { Logo } from "../../../shared-components";

import { Link } from "react-router-dom";

//JSON
const footerMenu = [
  { id: "0", name: "STORES", label: "stores" },
  { id: "1", name: "HELP", label: "help" },
  { id: "2", name: "ABOUT", label: "about" },
  { id: "3", name: "TERMS AND CONDITIONS", label: "termsandconditions" },
  { id: "4", name: "PRIVACY POLICY", label: "privacyPolicy" },
];

export class FooterMenu extends Component {
  createList() {
    return footerMenu.map((element) => {
      const { id, name, label } = element;

      return (
        <li className='listItem' key={id}>
          <Link to={`/${label}`}>{name}</Link>
        </li>
      );
    });
  }
  render() {
    return (
      <div className='footerMenuBox'>
        <div className='footerMenuInnerBox'>
          <div className='logoFooter'>
            <Link to='/'>
              <Logo />
            </Link>
          </div>

          <ul className='footerMenu'>{this.createList()}</ul>
        </div>
      </div>
    );
  }
}

