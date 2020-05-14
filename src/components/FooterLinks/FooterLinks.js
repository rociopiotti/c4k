import React from "react";
import "./FooterLinks.scss";

// import CartEmpty from "../CartEmpty/CartEmpty";
import PageManagerContext from "../../context/pageManager-context";

class FooterLinks extends React.Component {
  static contextType = PageManagerContext;

  clickFooterLinks(ulr) {
    this.context.onSectionBtn();
  }
  render() {
    return (
      <div className="footerLinksBox">
        <ul className="footerLinksList">
          <li>
            <a
              onClick={() => {
                this.context.onSectionBtn("stores");
              }}>
              CONTACT |
            </a>
          </li>

          <li>
            <a
              onClick={() => {
                this.context.onSectionBtn("faq");
              }}>
              HELP |
            </a>
          </li>

          <li>
            <a
              onClick={() => {
                this.context.onSectionBtn("termsAndCondition");
              }}>
              TERMS & CONDITIONS |
            </a>
          </li>

          <li>
            <a
              onClick={() => {
                this.context.onSectionBtn("privacyPloicy");
              }}>
              PRIVACY POLICY
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default FooterLinks;
