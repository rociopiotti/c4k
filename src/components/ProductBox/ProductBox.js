import React from "react"
import "./ProductBox.scss"
import ItemImageGallery from "../ItemImageGallery/ItemImageGallery"
import ProductDetails from "../ProductDetails/ProductDetails"
import BtnPromoCode from "../BtnPromoCode/BtnPromoCode"
import SuggestedItemGallery from "../SuggestedItemGallery/SuggestedItemGallery"

class ProductBox extends React.Component {
  render() {
    return (
      <div className="productBoxBox">
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
