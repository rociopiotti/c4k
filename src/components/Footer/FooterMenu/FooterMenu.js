import React from "react";
import "./FooterMenu.scss";
import Logo from "../../Logo/Logo";
import PageManagerContext from "../../../context/pageManager-context";

class FooterMenu extends React.Component {
  static contextType = PageManagerContext;

  handleHome() {
    this.context.onHomeMenuClick("home");
  }
  render() {
    return (
      <div className="footerMenuBox">
        <div className="footerMenuInnerBox">
          <button
            onClick={() => {
              this.handleHome();
            }}
            className="logoFooter">
            <Logo />
          </button>
          <ul className="footerMenu">
            <li>
              <a
                onClick={() => {
                  this.context.onHomeMenuClick("stores");
                }}
                href="#">
                #STORES
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  this.context.onHomeMenuClick("faq");
                }}
                href="#">
                #FAQ
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  this.context.onHomeMenuClick("about");
                }}
                href="#">
                #ABOUT
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  this.context.onHomeMenuClick("termsAndCondition");
                }}
                href="#">
                #TERMS OF USE
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  this.context.onHomeMenuClick("privacyPloicy");
                }}
                href="#">
                #PRIVACY POLICY
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FooterMenu;
