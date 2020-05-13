import React from "react"
import "./GridProductList.scss"
import ProductListItem from "../ProductListItem/ProductListItem"
import PageManagerContext from "../../context/pageManager-context";


class GridProductList extends React.Component {
  static contextType = PageManagerContext;

   handleClickItem  ()  {
    this.context.onSectionBtn("productDetails")
  }
  render() {
  
    return (
      <div className="gridProductListBox">
        <div className="gridListBox">
          <ul className="grisList">
            <li>
              <a
                onClick={() => {
                  this.handleClickItem()
                }}
                href="#">
                <ProductListItem/>
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  this.handleClickItem()
                }}
                href="#">
                <ProductListItem/>
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  this.handleClickItem()
                }}
                href="#">
                <ProductListItem/>
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  this.handleClickItem()
                }}
                href="#">
                <ProductListItem/>
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  this.handleClickItem()
                }}
                href="#">
                <ProductListItem/>
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  this.handleClickItem()
                }}
                href="#">
                <ProductListItem/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default GridProductList
