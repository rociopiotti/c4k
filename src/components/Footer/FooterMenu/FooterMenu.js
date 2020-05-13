import React from "react";
import "./FooterMenu.scss";
import Logo from "../../Logo/Logo";
import PageManagerContext from "../../../context/pageManager-context";

class FooterMenu extends React.Component {
  static contextType = PageManagerContext;

  handleHome() {
    this.context.onSectionBtn("home");
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
                  this.context.onSectionBtn("stores");
                }}
                href="#">
                #STORES
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  this.context.onSectionBtn("faq");
                }}
                href="#">
                #FAQ
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  this.context.onSectionBtn("about");
                }}
                href="#">
                #ABOUT
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  this.context.onSectionBtn("termsAndCondition");
                }}
                href="#">
                #TERMS OF USE
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  this.context.onSectionBtn("privacyPloicy");
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
