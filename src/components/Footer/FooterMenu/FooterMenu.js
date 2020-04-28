import React from "react"
import "./FooterMenu.scss"

import Logo from "../../Logo/Logo"

const FooterMenu = (props) =>{

 const handleHome =  (Home) => {
    console.log("Click en el boton que abre:", Home)
  }

  // const  handleClickLink = ()  => {
  //   console.log("Click en el boton que abre:")
  // }
  
      return (
      <div className="footerMenuBox">
        <div className="footerMenuInnerBox">
          <button
            onClick={() => {
              handleHome("home")
            }}
            className="logoFooter">
            <Logo />
          </button>
          <ul className="footerMenu">
            <li>
              <a
                onClick={() => {
                  props.onFooterMenuClick("stores")
                }}
                href="#">
                #STORES
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  props.onFooterMenuClick("faq")
                }}
                href="#">
                #FAQ
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  props.onFooterMenuClick("about")
                }}
                href="#">
                #ABOUT
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  props.onFooterMenuClick("termsAndCondition")
                }}
                href="#">
                #TERMS OF USE
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  props.onFooterMenuClick("privacyPloicy")
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
