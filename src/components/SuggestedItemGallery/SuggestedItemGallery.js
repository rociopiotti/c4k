import React from "react"
import "./SuggestedItemGallery.scss"
import ProductListItem from "../ProductListItem/ProductListItem"
import PageManagerContext from "../../context/pageManager-context";

class SuggestedItemGallery extends React.Component {
  static contextType = PageManagerContext;
 
  clickSuggestedItem  () {
    this.context.onSectionBtn("productDetails");
    // console.log("Click en Gallery Item");

  }
  render() {    
    return (
      <div className="suggestedItemGalleryBox">
        <h2 className="titleSuggestedItemGallery">#COMPLETE THE LOOK</h2>
        <div className="suggestedItemGallery">
          <button
            onClick={() => {
              this.clickSuggestedItem()
            }}
            className="suggestedItem">
            <ProductListItem />
          </button>
          <button
            onClick={() => {
              this.clickSuggestedItem()
            }}
            className="suggestedItem">
            <ProductListItem />
          </button>
          <button
            onClick={() => {
              this.clickSuggestedItem()
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
