import React from "react";
import "./Icon.scss";

// FONT-AWESOME:
import {
  faBars,
  faUser,
  faShoppingBag,
  faSearch,
  faArrowLeft,
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
  }
  return <FontAwesomeIcon className={"Icon "} icon={faIcon} />;
};

export default Icon;
