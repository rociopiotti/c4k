import React from "react"
import "./FooterMenu.scss"

import Logo from "../../Logo/Logo"

class FooterMenu extends React.Component {
  handleHome  (Home)  {
    console.log("Click en el boton que abre:", Home)
  }

   handleClickLink (Value) {
    console.log("Click en el boton que abre:", Value)
  }
  render() {
      return (
      <div className="footerMenuBox">
        <div className="footerMenuInnerBox">
          <button
            onClick={() => {
              this.handleHome("Home")
            }}
            className="logoFooter">
            <Logo />
          </button>
          <ul className="footerMenu">
            <li>
              <a
                onClick={() => {
                  this.handleClickLink("StorePage")
                }}
                href="#">
                #CONTACT US
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  this.handleClickLink("FaqPage")
                }}
                href="#">
                #HELP
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  this.handleClickLink("AboutPage")
                }}
                href="#">
                #ABOUT
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  this.handleClickLink("TermsOfUse")
                }}
                href="#">
                #TERMS OF USE
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  this.handleClickLink("PrivacyPolicy")
                }}
                href="#">
                #PRIVACY POLICY
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default FooterMenu
