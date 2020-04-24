import React from "react"
import "./ProductBox.scss"
import ItemImageGallery from "../ItemImageGallery/ItemImageGallery"
import ProductDetails from "../ProductDetails/ProductDetails"
import BtnPromoCode from "../BtnPromoCode/BtnPromoCode"

class ProductBox extends React.Component {
    render() {
        return (
            <div className="productBox">
            <ItemImageGallery/>
            <ProductDetails/>
            </div>

        )
    }
}

export default ProductBox