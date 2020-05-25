import React from "react";
import "./MenuCategories.scss";

//CONTEXT
import PageManagerContext from "../../context/pageManager-context";

// ROUTER
import { BrowserRouter, Link } from "react-router-dom";

//JSON
const menuCategories = [
  { id: "0", name: "TROUSERS", label: "trousers" },
  { id: "1", name: "T-SHIRT", label: "tshirts" },
  { id: "2", name: "BAGS", label: "bags" },
  { id: "3", name: "SHOES", label: "shoes" },
  { id: "4", name: "NEW ARRIVALS", label: "newArrivals" },
];

const MenuCategories = (props) => {
  // console.log(props);

  const createList = (context) => {
    return menuCategories.map((element, index) => {
      const { id, name, label } = element;
      return (
        <li className='listItem' key={id}>
          <Link to={`/products/${label}`}>{name}</Link>
        </li>
      );
    });
  };
  return (
    <PageManagerContext.Consumer>
      {(context) => (
        <div className='menuCategoriesBox'>
          <ul className='menuCategories'>{createList(context)}</ul>
        </div>
      )}
    </PageManagerContext.Consumer>
  );
};

export default MenuCategories;
