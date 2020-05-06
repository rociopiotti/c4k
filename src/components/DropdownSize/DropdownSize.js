import React from "react";
import "./DropdownSize.scss";
import Icon from "../Icon/Icon";

class DropdownSize extends React.Component {
  state = {
    currentSize: "SIZE",
  };
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
        <button className="dropbtn">
          <p>{itemSize}</p>
          <Icon className="dropDownIcon" type="arrowDown" />
        </button>
        <ul className="dropdownContentSize">
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
