import React from "react";
import "./ProductBox.scss";
import ItemImageGallery from "../ItemImageGallery/ItemImageGallery";
import ProductDetails from "../ProductDetails/ProductDetails";
import SuggestedItemGallery from "../SuggestedItemGallery/SuggestedItemGallery";
import SectionTransition from "../SectionTransition/SectionTransition";

class ProductBox extends React.Component {
  render() {
    const currentPath = this.props.location.pathname;
    const currentPathSplitted = currentPath.split("/");
    const sectionId = currentPathSplitted[2];

    return (
      <div className='productBoxBox'>
        <SectionTransition />
        <div className='productBox'>          
          <ItemImageGallery sectionId={sectionId} />
          <ProductDetails  />
        </div>
        <SuggestedItemGallery />
      </div>
    );
  }
}

export default ProductBox;
