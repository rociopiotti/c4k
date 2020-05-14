import React from "react";
import "./DropdownSize.scss";
import Icon from "../Icon/Icon";

//ANIMATION
import { Timeline } from "gsap/gsap-core";

//JSON
const provider = [
  { id: "SMALL", label: "SMALL" },
  { id: "MEDIUM", label: "MEDIUM" },
  { id: "LARGE", label: "LARGE" },
];
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
    const newMode = mode === "CLOSE" ? "OPEN" : "CLOSE";
    this.setState({
      mode: newMode,
    });
  }
  clickOnDropdown() {
    const { mode } = this.state;
    const tl = new Timeline();
    const zIndexContent = mode === "OPEN" ? 0 : "26";
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
      default:
        itemSize = null;
        break;
    }
    return itemSize;
  }

  createList() {
    return provider.map((element) => {
      const { id, label } = element;
      return (
        <li key={id}>
          <button
            onClick={(e) => {
              e.stopPropagation();  
              this.handleDropwnSize(id);
            }}>
            {label}
          </button>
        </li>
      );
    });
  }
  render() {
    const itemSize = this.setSize(this.state.currentSize);

    return (
      <div
        onClick={(e) => {
          e.stopPropagation();  
          this.clickOnDropdown();
        }}
        className="dropdownBoxCartSize">
        <button className="dropbtnSize">
          <p>{itemSize}</p>
          <Icon className="dropDownIcon" type="arrowDown" />
        </button>
        <ul
          ref={(div) => (this.dropdownContent = div)}
          className="dropdownContentSize">
          {this.createList()}
        </ul>
      </div>
    );
  }
}
export default DropdownSize;
