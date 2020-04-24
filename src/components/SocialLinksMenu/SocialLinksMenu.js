import React from "react"
import "./SocialLinksMenu.scss"
import Icon from "../Icon/Icon"

class SocialLinksMenu extends React.Component {
  handleClickLink  (Value)  {
    console.log("Click en el boton que abre:", Value)
  }
  render() {  

    return (
      <div className="socialLinkMenuBox">
        <ul className="socialLinkMenuList">
          <li>
            <a
              onClick={() => {
                this.handleClickLink("InstagramPage")
              }}
              href="#">
              <Icon />
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                this.handleClickLink("FacebookPage")
              }}
              href="#">
              <Icon />
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                this.handleClickLink("LinkedinPage")
              }}
              href="#">
              <Icon />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default SocialLinksMenu
