import React from "react";
import "./GridProductList.scss";
import ProductListItem from "../ProductListItem/ProductListItem";

// CONTEXT
import PageManagerContext from "../../context/pageManager-context";

// ROUTER
import { BrowserRouter, Link } from "react-router-dom";

class GridProductList extends React.Component {
  static contextType = PageManagerContext;

  handleClickItem() {
    this.context.onSectionBtn("productDetails");
  }
  render() {
    return (
      <div className='gridProductListBox'>
        <div className='gridListBox'>
          <ul className='grisList'>
            <li>
              <a
                onClick={() => {
                  this.handleClickItem()
                }}
                href="#">
                <ProductListItem/>
              </a>
              {/* <Link to='/products/:label/:name'>
                <ProductListItem />
              </Link> */}
            </li>
            <li>
              <a
                onClick={() => {
                  this.handleClickItem()
                }}
                href="#">
                <ProductListItem/>
              </a>
              {/* <Link to='/products/:label/:name'>
                <ProductListItem />
              </Link> */}
            </li>
            <li>
              <a
                onClick={() => {
                  this.handleClickItem()
                }}
                href="#">
                <ProductListItem/>
              </a>
              {/* <Link to='/products/:label/:name'>
                <ProductListItem />
              </Link> */}
            </li>
            <li>
              <a
                onClick={() => {
                  this.handleClickItem()
                }}
                href="#">
                <ProductListItem/>
              </a>
              {/* <Link to='/products/:label/:name'>
                <ProductListItem />
              </Link> */}
            </li>
            <li>
              <a
                onClick={() => {
                  this.handleClickItem()
                }}
                href="#">
                <ProductListItem/>
              </a>
              {/* <Link to='/products/:label/:name'>
                <ProductListItem />
              </Link> */}
            </li>
            <li>
              <a
                onClick={() => {
                  this.handleClickItem()
                }}
                href="#">
                <ProductListItem/>
              </a>
              {/* <Link to='/products/:label/:name'>
                <ProductListItem />
              </Link> */}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default GridProductList;
