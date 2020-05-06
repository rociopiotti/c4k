import React from "react";
import "./DropdownQuantity.scss";
import Icon from "../Icon/Icon";

class DropdownQuantity extends React.Component {
  state = {
    currentQuantity: "1",
  };
  clickOnDropdown(Dropdown) {
    console.log("Abro o cierro", Dropdown);
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
    console.log("--->CURRENT QUANTITY:", this.state.currentQuantity);
    const itemQuantity = this.setQuantity(this.state.currentQuantity);
    return (
      <div className="dropdownBoxCart">
        <button
          onClick={() => {
            this.clickOnDropdown("Dropdown");
          }}
          className="dropbtn">
          <p>{itemQuantity}</p>
          <Icon type="arrowDown" className="dropDownIcon" />
        </button>
        <ul className="dropdownContentSize">
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
