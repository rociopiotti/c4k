import React from "react"
import "./SocialLinksMenu.scss"
import Icon from "../Icon/Icon"

const SocialLinksMenu = (props) => {
  return (
    <div className="socialLinkMenuBox">
      <ul className="socialLinkMenuList">
        <li>
          <a href="https://www.instagram.com/?hl=es" target="_blank">
            <Icon />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/" target="_blank">
            <Icon />
          </a>
        </li>
        <li>
          <a href="https://es.linkedin.com/" target="_blank">
            <Icon />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialLinksMenu
