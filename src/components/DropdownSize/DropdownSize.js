import React from "react";
import "./DropdownSize.scss";
import Icon from "../Icon/Icon";

//ANIMATION

import { Timeline } from "gsap/gsap-core";
class DropdownSize extends React.Component {
  constructor(props) {
    super(props);
    this.dropdownContent = null;

    this.state = {
      currentSize: "SIZE",
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

    tl.to(
      this.dropdownContent,
      { height: posContent, opacity: opacityContent },
      0
    );
    tl.eventCallback("onComplete", () => {
      this.toggle();
    });
    console.clear();
    console.log("ESTADO", mode);
  }
  handleDropwnSize(newSize) {
    this.setState({
      currentSize: newSize,
    });
  }
  setSize(sizeType) {
    let itemSize;
    switch (sizeType) {
      case "SIZE":
        itemSize = "SIZE";
        break;
      case "SMALL":
        itemSize = "SMALL";
        break;
      case "MEDIUM":
        itemSize = "MEDIUM";
        break;
      case "LARGE":
        itemSize = "LARGE";
        break;
    }
    return itemSize;
  }
  render() {
    console.log("-->CURRENT SIZE:", this.state.currentSize);

    const itemSize = this.setSize(this.state.currentSize);

    return (
      <div className="dropdownBoxCart">
        <button
          onClick={() => {
            this.clickOnDropdown();
          }}
          className="dropbtn">
          <p>{itemSize}</p>
          <Icon className="dropDownIcon" type="arrowDown" />
        </button>
        <ul
          ref={(div) => (this.dropdownContent = div)}
          className="dropdownContentSize">
          <li>
            <button
              onClick={() => {
                this.handleDropwnSize("SMALL");
              }}>
              S
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                this.handleDropwnSize("MEDIUM");
              }}>
              M
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                this.handleDropwnSize("LARGE");
              }}>
              L
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
export default DropdownSize;
