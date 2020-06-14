import React from "react";
import "./GridProductList.scss";
import ProductListItem from "../ProductListItem/ProductListItem";

// CONTEXT
import PageManagerContext from "../../context/pageManager-context";

// ROUTER
import { Link } from "react-router-dom";

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

    const { data } = this.props
    if (!data) {
      return;
    }

    return data.map((element, i) => {
      const { category, id, image, price, title, alttext } = element;
      return (
        <li key={i} className='listItem'>
          <Link key={i} to={`/products/${category}/${id}`}>
            <ProductListItem
              category={category}
              title={title || "N/A"}
              price={price}
              image={image}
              alttext={alttext}
            />
          </Link>
        </li>
      );
    });
  }

  render() {

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
