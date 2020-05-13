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
  faSort,
  faSlidersH,
  faSortAlphaDown,
  faSortAlphaUp,
  faHeart,
  faTimes,
  faMap,
  faListUl,
  faChevronDown,
  faChevronLeft,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
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
    case "sort":
      faIcon = faSort;
      break;
    case "sortAZ":
      faIcon = faSortAlphaUp;
      break;
    case "sortZA":
      faIcon = faSortAlphaDown;
      break;
    case "heart":
      faIcon = faHeart;
      break;
    case "filter":
      faIcon = faSlidersH;
      break;
    case "remove":
      faIcon = faTimes;
      break;
    case "map":
      faIcon = faMap;
      break;
    case "list":
      faIcon = faListUl;
      break;
    case "arrowDown":
      faIcon = faChevronDown;
      break;
    case "arrowLeftChevron":
      faIcon = faChevronLeft;
      break;
    case "facebook":
      faIcon = faFacebookF;
      break;
    case "instagram":
      faIcon = faInstagram;
      break;
    case "linkedin":
      faIcon = faLinkedin;
      break;
      case "info":
        faIcon = faInfoCircle;
        break;
    default:
      faIcon = null;
      break;
  }
  return <FontAwesomeIcon className={"Icon"} icon={faIcon} />;
};

export default Icon;
