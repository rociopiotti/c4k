import React from "react";
import "./DropdownQuantity.scss";
import Icon from "../Icon/Icon";

//ANIMATION
import { TweenLite } from "gsap";
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
    const newMode = mode == "CLOSE" ? "OPEN" : "CLOSE";
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
    }
    return itemQuantity;
  }
  render() {
    // console.log("--->CURRENT QUANTITY:", this.state.currentQuantity);

    const itemQuantity = this.setQuantity(this.state.currentQuantity);
    return (
      <div className="dropdownBoxCartQuantity">
        <button
          onClick={() => {
            this.clickOnDropdown();
          }}
          className="dropbtnQuantity">
          <p>{itemQuantity}</p>
          <Icon type="arrowDown" className="dropDownIcon" />
        </button>
        <ul
          ref={(div) => (this.dropdownContent = div)}
          className="dropdownContentSizeQuatity">
          <li>
            <button
              onClick={() => {
                this.handleDropwnQuantity("1");
              }}>
              1
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                this.handleDropwnQuantity("2");
              }}>
              2
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                this.handleDropwnQuantity("3");
              }}>
              3
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                this.handleDropwnQuantity("4");
              }}>
              4
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                this.handleDropwnQuantity("5");
              }}>
              5
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                this.handleDropwnQuantity("6");
              }}>
              6
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                this.handleDropwnQuantity("7");
              }}>
              7
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                this.handleDropwnQuantity("8");
              }}>
              8
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                this.handleDropwnQuantity("9");
              }}>
              9
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                this.handleDropwnQuantity("10");
              }}>
              10
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default DropdownQuantity;
