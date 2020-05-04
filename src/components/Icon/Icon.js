import React from "react";
import "./Icon.scss";

// FONT-AWESOME:
import {
  faBars,
  faUser,
  faShoppingBag,
  faSearch,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = (props) => {
  // DEFINIR ICONS:
  let faIcon;

  switch (props.type) {
    case "burger":
      faIcon = faBars;
      break;
    case "singIn":
      faIcon = faUser;
      break;
    case "myBag":
      faIcon = faShoppingBag;
      break;
    case "search":
      faIcon = faSearch;
      break;
    case "arrowLeft":
      faIcon = faArrowLeft;
      break;
    case "arrowRight":
      faIcon = faArrowRight;
      break;
  }
  return <FontAwesomeIcon className={"Icon "} icon={faIcon} />;
};

export default Icon;
