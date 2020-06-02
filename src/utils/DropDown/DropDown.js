import React from "react";
import "./DropDown.scss";

const Dropdown = ({ data, dropdownType }) => {
  const createSizeList = () => {
    if (!data) {
      return null;
    }
    const sizeList = data.map((element, index) => (
      <option
        key={index}
        style={{ width: "10px", maxWidth: "10px", color: "#fff" }}>
        {element.id}
      </option>
    ));

    return <select className='dropdown'>{sizeList}</select>;
  };
  
  const createColorList = () => {
    if (!data) {
      return null;
    }
    const colorList = data.map((element, index) => (
      <option
        key={index}
        style={{ width: "10px", maxWidth: "10px", color: "#fff" }}>
        {element.id}
      </option>
    ));

    return <select className='colorDropdown'> {colorList} </select>;
  };

  const createQuantityList = () => {
    const quantityList = [];

    for (let i = 1; i < 11; i++) {
      quantityList.push(<option key={i}> {i}</option>);
    }

    return <select className='colorDropdown'> {quantityList} </select>;
  };

  const renderTemplate = () => {
    let dropdownTemplate = null;

    switch (dropdownType) {
      case "size":
        dropdownTemplate = (
          <div className='dropDownBox'>{createSizeList()} </div>
        );
        break;
      case "color":
        dropdownTemplate = (
          <div className='dropDownBox'>
            <span className='colorIcon'></span> {createColorList()}
          </div>
        );
        break;
      case "quantity":
        dropdownTemplate = (
          <div className='dropDownBox'>{createQuantityList()}</div>
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
