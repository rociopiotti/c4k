import React from "react";
import "./DropdownQuantity.scss";
import Icon from "../Icon/Icon";

//ANIMATION
import { Timeline } from "gsap/gsap-core";

class DropdownQuantity extends React.Component {
  constructor(props) {
    super(props);
    this.dropdownContent = null;

    this.state = {
      currentQuantity: "1",
      mode: "CLOSE",
    };
  }
  toggle() {
    const { mode } = this.state;
    const newMode = mode === "CLOSE" ? "OPEN" : "CLOSE";
    this.setState({
      mode: newMode,
    });
  }
  clickOnDropdown() {
    const { mode } = this.state;
    const tl = new Timeline();
    const zIndexContent = mode === "OPEN" ? 0 : "27";
    const posContent = mode === "OPEN" ? "0" : "auto";
    const opacityContent = mode === "OPEN" ? 0 : 1;
    const displayContent = mode === "OPEN" ? "none" : "flex";

    tl.to(
      this.dropdownContent,
      {
        height: posContent,
        zIndex: zIndexContent,
        opacity: opacityContent,
        display: displayContent,
      },
      0
    );
    tl.eventCallback("onComplete", () => {
      this.toggle();
    });
    // console.clear();
    // console.log("ESTADO", mode);
  }
  handleDropwnQuantity(newQuantity) {
    this.setState({
      currentQuantity: newQuantity,
    });
  }
  setQuantity(quantityType) {
    let itemQuantity;
    switch (quantityType) {
      
      case "1":
        itemQuantity = "1";
        break;
      case "2":
        itemQuantity = "2";
        break;
      case "3":
        itemQuantity = "3";
        break;
      case "4":
        itemQuantity = "4";
        break;
      case "5":
        itemQuantity = "5";
        break;
      case "6":
        itemQuantity = "6";
        break;
      case "7":
        itemQuantity = "7";
        break;
      case "8":
        itemQuantity = "8";
        break;
      case "9":
        itemQuantity = "9";
        break;
      case "10":
        itemQuantity = "10";
        break;
      default:
        itemQuantity = null;
        break;
    }
    return itemQuantity;
  }
  createList() {
    const _array = [];

    //---------------------------
    for (let i = 1; i < 10; i++) {
      // _array.push(i);
      _array.push(
        <li key={i}>
          <button
            onClick={(e) => {
              e.preventDefault();

              e.stopPropagation();
              this.handleDropwnQuantity(i.toString());
            }}>
            {i}
          </button>
        </li>
      );
    }
    return _array;

    //---------------------------
  }

  render() {
    const itemQuantity = this.setQuantity(this.state.currentQuantity);
    return (
      <div className="dropdownBoxCartQuantity">
        <button
          onClick={(e) => {
            e.preventDefault();

            e.stopPropagation();
            this.clickOnDropdown();
          }}
          className="dropbtnQuantity">
          <p>{itemQuantity}</p>
          <Icon type="arrowDown" className="dropDownIcon" />
        </button>
        <ul
          ref={(div) => (this.dropdownContent = div)}
          className="dropdownContentSizeQuatity">
          {this.createList()}
        </ul>
      </div>
    );
  }
}

export default DropdownQuantity;
