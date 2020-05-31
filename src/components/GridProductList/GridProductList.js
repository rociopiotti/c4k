import React from "react";
import "./GridProductList.scss";
import ProductListItem from "../ProductListItem/ProductListItem";

// CONTEXT
import PageManagerContext from "../../context/pageManager-context";

// ROUTER
import { Link } from "react-router-dom";

// DATABASE
import { URL_PRODUCTS } from "../../utils/path";

// AXIOS
import axios from "axios";

class GridProductList extends React.Component {
  static contextType = PageManagerContext;

  state = {
    product: [],
    error: false,
  };

  handleClickItem() {
    this.context.onSectionBtn("productDetails");
  }

  createProductsList() {
    if (!this.props.data) {
      return;
    }

    return this.props.data.map((element, i) => {
      console.log(element);

      const { category, id, image, price, title } = element;
      return (
        <li key={i} className='listItem'>
          <Link key={i} to={`/products/${category}/${id}`}>
            <ProductListItem
              category={category}
              title={title || "N/A"}
              price={price}
              image={image}
            />
          </Link>
        </li>
      );
    });
  }

  render() {
    console.log("LIST:::", this.props.data);

    return (
      <div className='gridProductListBox'>
        <div className='gridListBox'>
          <ul className='grisList'>{this.createProductsList()}</ul>
        </div>
      </div>
    );
  }
}

export default GridProductList;
