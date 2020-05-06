import React from "react";
import "./DropdownColor.scss";
import Icon from "../Icon/Icon";

class DropdownColor extends React.Component {
  state = {
    currentColor: "COLOR",
  };
  clickOnDropdown(Dropdown) {
    console.log("Abro o cierro", Dropdown);
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
          <Icon className="dropDownIcon" />
        </button>
        <ul className="dropdownContentSize">
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
