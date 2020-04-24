import React from "react"
import "./GridProductList.scss"
import ProductListItem from "../ProductListItem/ProductListItem"

class GridProductList extends React.Component {
   handleClickItem  (ItemPage)  {
    console.log("Click en el boton que abre:", ItemPage)
  }
  render() {
  
    return (
      <div className="gridProductListBox">
        <div className="gridListBox">
          <ul className="grisList">
            <li>
              <a
                onClick={() => {
                  this.handleClickItem("ItemPage")
                }}
                href="#">
                <ProductListItem />
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  this.handleClickItem("ItemPage")
                }}
                href="#">
                <ProductListItem />
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  this.handleClickItem("ItemPage")
                }}
                href="#">
                <ProductListItem />
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  this.handleClickItem("ItemPage")
                }}
                href="#">
                <ProductListItem />
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default GridProductList
