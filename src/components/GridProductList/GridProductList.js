import React from "react";
import "./GridProductList.scss";
import ProductListItem from "../ProductListItem/ProductListItem";

// CONTEXT
import PageManagerContext from "../../context/pageManager-context";

// ROUTER
import {  Link } from "react-router-dom";

// DATABASE
import { URL_PRODUCTS } from "../../utils/path";

// AXIOS
import axios from "axios";

//JSONS
const navList = [
  { id: "0", name: "TROUSERS", label: "trousers" },
  { id: "1", name: "T-SHIRT", label: "tshirts" },
  { id: "2", name: "BAGS", label: "bags" },
  { id: "3", name: "SHOES", label: "shoes" },
  { id: "4", name: "NEW ARRIVALS", label: "newArrivals" },
];

class GridProductList extends React.Component {
  static contextType = PageManagerContext;

  handleClickItem() {
    this.context.onSectionBtn("productDetails");
  }
 
  createProductsList() {
    return navList.map((element, i) => {
      const { id, name, label } = element;
      return (
        <li key={i} className='listItem'>
          <Link key={i} to={`/products/${label}/${id}`}>
            <ProductListItem />
          </Link>
        </li>
      );
    });
  }
  render() {
    return (
      <div className='gridProductListBox'>
        <div className='gridListBox'>
          <ul className='grisList'>
            {this.createProductsList()}
            
          </ul>
        </div>
      </div>
    );
  }
}

export default GridProductList;
