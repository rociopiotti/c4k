import React from "react"
import "./FooterMenu.scss"

import Logo from "../../Logo/Logo"

const FooterMenu = (props) =>{
 const handleHome =  (Home) => {
    console.log("Click en el boton que abre:", Home)
  }

  const  handleClickLink = (Value)  => {
    console.log("Click en el boton que abre:", Value)
  }
      return (
      <div className="footerMenuBox">
        <div className="footerMenuInnerBox">
          <button
            onClick={() => {
              handleHome("Home")
            }}
            className="logoFooter">
            <Logo />
          </button>
          <ul className="footerMenu">
            <li>
              <a
                onClick={() => {
                  handleClickLink("StorePage")
                }}
                href="#">
                #CONTACT US
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                 handleClickLink("FaqPage")
                }}
                href="#">
                #HELP
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                 handleClickLink("AboutPage")
                }}
                href="#">
                #ABOUT
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  handleClickLink("TermsOfUse")
                }}
                href="#">
                #TERMS OF USE
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                 handleClickLink("PrivacyPolicy")
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

export default FooterMenu
