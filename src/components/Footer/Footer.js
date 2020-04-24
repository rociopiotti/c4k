import React from "react"
import "./Footer.scss"
import FooterMenu from "./FooterMenu/FooterMenu"
import SuscribeBox from "../SuscribeBox/SuscribeBox"
import SocialLinksMenu from "../SocialLinksMenu/SocialLinksMenu"

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <FooterMenu />
        <SuscribeBox />
        <SocialLinksMenu />
      </div>
    )
  }
}

export default Footer
