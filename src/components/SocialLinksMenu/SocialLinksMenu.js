import React from "react";
import "./SocialLinksMenu.scss";
import Icon from "../Icon/Icon";
//JSON
const socialMenu = [
  {
    id: "0",
    link: "https://www.instagram.com/?hl=es",
    icon: "instagram",
    label: "instagram",
  },
  {
    id: "1",
    link: "https://www.facebook.com/",
    icon: "facebook",
    label: "facebook",
  },
  {
    id: "2",
    link: "https://es.linkedin.com/",
    icon: "linkedin",
    label: "linkedin",
  },
];
const SocialLinksMenu = (props) => {
  const createList = () => {
    return socialMenu.map((element) => {
      const { id, link, icon } = element;

      return (
        <li key={id}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Icon type={icon} />
          </a>
        </li>
      );
    });
  };
  return (
    <div className="socialLinkMenuBox">
      <ul className="socialLinkMenuList">{createList()}</ul>
    </div>
  );
};

export default SocialLinksMenu;
