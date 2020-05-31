import React from "react";
import "./SuggestedItemGallery.scss";
import ProductListItem from "../ProductListItem/ProductListItem";

//CONTEXT
import PageManagerContext from "../../context/pageManager-context";
import { Link } from "react-router-dom";

class SuggestedItemGallery extends React.Component {
  static contextType = PageManagerContext;

  clickSuggestedItem() {
    this.context.onSectionBtn("productDetails");
  }
  render() {
    return (
      <div className='suggestedItemGalleryBox'>
        <h2 className='titleSuggestedItemGallery'>#COMPLETE THE LOOK</h2>
        <div className='suggestedItemGallery'>
          <Link to='/products/trousers/1' className='suggestedItem'>
            <ProductListItem />
          </Link>
          <Link to='/products/shoes/1' className='suggestedItem'>
            <ProductListItem />
          </Link>
          <Link to='/products/tshirts/1' className='suggestedItem'>
            <ProductListItem />
          </Link>
        </div>
      </div>
    );
  }
}

export default SuggestedItemGallery;
