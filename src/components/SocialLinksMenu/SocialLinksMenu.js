import React from "react"
import "./SocialLinksMenu.scss"
import Icon from "../Icon/Icon"

const SocialLinksMenu  = (props) => {
  const handleClickLink = (Value) =>  {
    console.log("Click en el boton que abre:", Value)
  }

    return (
      <div className="socialLinkMenuBox">
        <ul className="socialLinkMenuList">
          <li>
            <a
              onClick={() => {
               handleClickLink("InstagramPage")
              }}
              href="#">
              <Icon />
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                handleClickLink("FacebookPage")
              }}
              href="#">
              <Icon />
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                handleClickLink("LinkedinPage")
              }}
              href="#">
              <Icon />
            </a>
          </li>
        </ul>
      </div>
    )
  }

export default SocialLinksMenu
