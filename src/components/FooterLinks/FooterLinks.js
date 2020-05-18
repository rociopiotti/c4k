import React from "react";
import "./FooterLinks.scss";

// import CartEmpty from "../CartEmpty/CartEmpty";
import PageManagerContext from "../../context/pageManager-context";

//JSON
const footerMenu = [
  { id: "0", name: "STORES", label: "stores" },
  { id: "1", name: "HELP", label: "faq" },
  { id: "2", name: "TERMS AND CONDITIONS", label: "termsAndCondition" },
  { id: "3", name: "PRIVACY POLICY", label: "privacyPolicy" },
];
class FooterLinks extends React.Component {
  static contextType = PageManagerContext;
  createList() {
    return footerMenu.map((element, index) => {
      const { id, name, label } = element;

      return (
        <li className="listItem" key={id}>
          <a
            onClick={() => {
              this.context.onSectionBtn(label);
            }}>
            {name}
          </a>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="footerLinksBox">
        <ul className="footerLinksList">{this.createList()}</ul>
      </div>
    );
  }
}

export default FooterLinks;
