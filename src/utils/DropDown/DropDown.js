import React from "react";
import "./DropDown.scss";

const Dropdown = ({ data, dropdownType, change }) => {
  const createDropdown = () => {
    if (!data) {
      return null;
    }

    if (data.length === 1) {
      return (
        <option style={{ width: "10px", maxWidth: "10px", color: "#fff" }}>
          SIZE
        </option>
      );
    }

    const list = data.map((element, index) => (
      <option
        key={index}
        value={element.id}
        style={{ width: "10px", maxWidth: "10px", color: "#fff" }}>
        {element.id}
      </option>
    ));

    return <>{list}</>;
  };

  const createQuantityList = () => {
    const quantityList = [];

    for (let i = 1; i <= 10; i++) {
      quantityList.push(i);
    }

    return quantityList.map((value, i) => {
      return (
        <option key={i} value={value}>
          {value}
        </option>
      );
    });
  };

  const renderTemplate = () => {
    let dropdownTemplate = null;

    switch (dropdownType) {
      case "size":
        dropdownTemplate = (
          <div className='dropDownBox'>
            <select
              className='colorDropdown'
              onChange={(event) => change(dropdownType, event.target.value)}>
              {createDropdown()}
            </select>
          </div>
        );
        break;
      case "color":
        dropdownTemplate = (
          <div className='dropDownBox'>
            <select
              className='colorDropdown'
              onChange={(event) => change(dropdownType, event.target.value)}>
              {createDropdown()}
            </select>
          </div>
        );
        break;

      case "quantity":
        dropdownTemplate = (
          <div className='dropDownBox'>
            <label>Quantity</label>
            <select className='colorDropdown'>{createQuantityList()}</select>
          </div>
        );
        break;
      default:
        dropdownTemplate = null;
    }

    return dropdownTemplate;
  };

  return <>{renderTemplate()}</>;
};
export default Dropdown;
