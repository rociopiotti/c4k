import React from "react";
import "./DropdownColor.scss";
import Icon from "../Icon/Icon";

//ANIMATION
import { TweenLite } from "gsap";
import { Timeline } from "gsap/gsap-core";

class DropdownColor extends React.Component {
  constructor(props) {
    super(props);
    this.dropdownContent = null;

    this.state = {
      currentColor: "COLOR",
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
    const posContent = mode === "OPEN" ? "0" : "auto";
    const opacityContent = mode === "OPEN" ? 0 : 1;

    tl.to(this.dropdownContent, { height: posContent, opacity:opacityContent}, 0);
    tl.eventCallback("onComplete", () => {
      this.toggle();
    });
    console.clear();
    console.log("ESTADO", mode);
  }

  handleDropdownColor(newColor) {
    this.setState({
      currentColor: newColor,
    });
  }
  setColor(colorType) {
    let itemColor;
    switch (colorType) {
      case "COLOR":
        itemColor = "COLOR";
        break;
      case "OPTION A":
        itemColor = "OPTION A";
        break;
      case "OPTION B":
        itemColor = "OPTION B";
        break;
      case "OPTION C":
        itemColor = "OPTION C";
        break;
    }
    return itemColor;
  }
  render() {
    console.log("------> CURRENT COLOR:", this.state.currentColor);
    const itemColor = this.setColor(this.state.currentColor);
    return (
      <div className="dropdownBox">
        <button
          onClick={() => {
            this.clickOnDropdown("Dropdown");
          }}
          className="dropbtn">
          <div className="colorIcon"></div>
          <p>{itemColor}</p>
          <Icon className="dropDownIcon" type="arrowDown" />
        </button>
        <ul
          ref={(div) => (this.dropdownContent = div)}
          className="dropdownContentSize">
          <li>
            <button
              onClick={() => {
                this.handleDropdownColor("OPTION A");
              }}>
              OPTION A
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                this.handleDropdownColor("OPTION B");
              }}>
              OPTION B
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                this.handleDropdownColor("OPTION C");
              }}>
              OPTION C
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
export default DropdownColor;
