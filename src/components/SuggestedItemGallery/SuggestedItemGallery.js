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
    const { suggested } = this.props;

    return (
      <div className='suggestedItemGalleryBox'>
        <h2 className='titleSuggestedItemGallery'>#COMPLETE THE LOOK</h2>
        <div className='suggestedItemGallery'>
          {suggested.map((element) => (
            <Link
              key={element.id}
              to={`/products/${element.category}/${element.id}`}
              className='suggestedItem'>
              <ProductListItem
                category={element.category}
                title={element.title || "N/A"}
                price={element.price}
                image={element.image}
              />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default SuggestedItemGallery;
