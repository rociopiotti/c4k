import React from "react";
import "./DropdownColor.scss";
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
class DropdownColor extends React.Component {
  constructor(props) {
    super(props);
    this.dropdownContent = null;

    this.state = {
      currentIndex: 0,
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
    const zIndexContent = mode === "OPEN" ? 0 : "25";
    const posContent = mode === "OPEN" ? "0" : "auto";
    const opacityContent = mode === "OPEN" ? 0 : 1;
    const displayContent = mode === "OPEN" ? "none" : "flex";

    tl.to(
      this.dropdownContent,
      {
        zIndex: zIndexContent,
        height: posContent,
        opacity: opacityContent,
        display: displayContent,
      },
      0.1
    );
    tl.eventCallback("onComplete", () => {
      this.toggle();
    });
    // console.clear();
    // console.log("ESTADO", mode);
  }

  handleDropdownColor(newIndex) {
    this.setState({
      currentIndex: newIndex,
    });
  }

  createList() {
    return provider.map((element, index) => {
      const { id, label } = element;
      if (index === 0) return null;

      return (
        <li key={id}>
          <button
            onClick={() => {
              this.handleDropdownColor(index);
            }}>
            {label}
          </button>
        </li>
      );
    });
  }

  setName() {}
  render() {
    console.log(this.state.currentIndex);
    const itemColor = provider[this.state.currentIndex].label;
    return (
      <div className="dropdownColorBox">
        <button
          onClick={() => {
            this.clickOnDropdown("Dropdown");
          }}
          className="dropbtnColor">
          <div className="colorIcon"></div>
          <p>{itemColor}</p>
          <Icon className="dropDownIcon" type="arrowDown" />
        </button>
        <ul
          ref={(div) => (this.dropdownContent = div)}
          className="dropdownContentSizeColor">
          {this.createList()}
        </ul>
      </div>
    );
  }
}
export default DropdownColor;
