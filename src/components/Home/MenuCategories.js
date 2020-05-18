import React from "react";
import "./MenuCategories.scss";

import PageManagerContext from "../../context/pageManager-context";

//JSON
const menuCategories = [
  { id: "0", name: "TROUSERS", label: "trousers" },
  { id: "1", name: "T-SHIRT", label: "tshirts" },
  { id: "2", name: "BAGS", label: "bags" },
  { id: "3", name: "SHOES", label: "shoes" },
  { id: "4", name: "NEW ARRIVALS", label: "newArrivals" },
];

const MenuCategories = (props) => {
  const createList = (context) => {
    return menuCategories.map((element, index) => {
      const { id, name, label } = element;

      return (
        <li className="listItem" key={id}>
          <a
            onClick={() => {
              context.onSectionBtn(label);
            }}>
            {name}
          </a>
        </li>
      );
    });
  };
  return (
    <PageManagerContext.Consumer>
      {(context) => (
        <div className="menuCategoriesBox">
          <ul className="menuCategories">{createList(context)}</ul>
        </div>
      )}
    </PageManagerContext.Consumer>
  );
};

export default MenuCategories;
