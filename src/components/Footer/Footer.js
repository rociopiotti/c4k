import React from "react"
import "./Footer.scss"
import FooterMenu from "./FooterMenu/FooterMenu"
import SuscribeBox from "../SuscribeBox/SuscribeBox"
import SocialLinksMenu from "../SocialLinksMenu/SocialLinksMenu"

const Footer = (props) => {
  return (
    <div className="footer">
      <FooterMenu
        onFooterMenuClick={props.onFooterMenuClick}
        onHomeMenuClick={props.onHomeMenuClick}
      />
      <SuscribeBox />
      <SocialLinksMenu />
    </div>
  )
}

export default Footer
