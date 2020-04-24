import React from "react"
import "./FooterLinks.scss"

class FooterLinks extends React.Component {
  clickFooterLinks  (url){
    console.log("Click en el boton que lleva a:", url)
  }
  render() {
    return (
      <div className="footerLinksBox">
        <ul className="footerLinksList">
          <li>
            <a
              onClick={() => {
                this.clickFooterLinks("About.html")
              }}>
              CONTACT |
            </a>
          </li>

          <li>
            <a
              onClick={() => {
                this.clickFooterLinks("Faq.html")
              }}>
              HELP |
            </a>
          </li>

          <li>
            <a
              onClick={() => {
                this.clickFooterLinks("TermsAndConditions.html")
              }}>
              TERMS & CONDITIONS |
            </a>
          </li>

          <li>
            <a
              onClick={() => {
                this.clickFooterLinks("PrivacyPolicy.html")
              }}>
              PRIVACY POLICY
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default FooterLinks
