import React from "react"
import "./SuggestedItemGallery.scss"
import ProductListItem from "../ProductListItem/ProductListItem"

class SuggestedItemGallery extends React.Component {
 clickSuggestedItem  (Index) {
    console.log("Click en suggested item:", Index)
  }
  render() {    
    return (
      <div className="suggestedItemGalleryBox">
        <h2 className="titleSuggestedItemGallery">#COMPLETE THE LOOK</h2>
        <div className="suggestedItemGallery">
          <button
            onClick={() => {
              this.clickSuggestedItem("Index 1")
            }}
            className="suggestedItem">
            <ProductListItem />
          </button>
          <button
            onClick={() => {
              this.clickSuggestedItem("Index 2")
            }}
            className="suggestedItem">
            <ProductListItem />
          </button>
          <button
            onClick={() => {
              this.clickSuggestedItem("Index 3")
            }}
            className="suggestedItem">
            <ProductListItem />
          </button>
          
        </div>
      </div>
    )
  }
}

export default SuggestedItemGallery
