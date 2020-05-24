import React from "react";
import "./DropDown.scss";

import Icon from "../Icon/Icon";

//ANIMATION
import { Timeline } from "gsap/gsap-core";

//JSON
const provider = [
  { id: "0", label: "COLOR" },
  { id: "1", label: "GREY" },
  { id: "2", label: "BLACK" },
  { id: "3", label: "WHITE" },
];

class Dropdown extends React.Component {
  createList() {
    return provider.map((element, index) => {
      const { id, label } = element;
      //   if (index === 0) return null;

      /// TO DO TO-DO Remover color de la lista desplegable. poner color solo en la primera opcion
      return (
        <option
          key={id}
          style={{ width: "10px", maxWidth: "10px", color: "#fff" }}>
          {label}
        </option>
      );
    });
  }

  render() {
    return (
      <div className='dropDownBox'>
        <select className='dropdownColorBox'>{this.createList()}</select>
      </div>
    );
  }
}
export default Dropdown;
