import React from "react"
import "./GridProductList.scss"
import ProductListItem from "../ProductListItem/ProductListItem"

class GridProductList extends React.Component {
   handleClickItem  ()  {
    // console.log("Click en el boton que abre:", ItemPage)
    this.props.onProductClick("productDetails")
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
