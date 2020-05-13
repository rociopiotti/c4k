import React from "react"
import "./ProductBox.scss"
import ItemImageGallery from "../ItemImageGallery/ItemImageGallery"
import ProductDetails from "../ProductDetails/ProductDetails"
import SuggestedItemGallery from "../SuggestedItemGallery/SuggestedItemGallery"
import SectionTransition from "../SectionTransition/SectionTransition"

class ProductBox extends React.Component {
  render() {
    return (
      <div className="productBoxBox">
        <SectionTransition />
        <div className="productBox">
          <ItemImageGallery />
          <ProductDetails />
        </div>
        <SuggestedItemGallery />
      </div>
    )
  }
}

export default ProductBox
