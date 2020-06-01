import React from "react";
import "./SuggestedItemGallery.scss";
import ProductListItem from "../ProductListItem/ProductListItem";

import { Link } from "react-router-dom";

class SuggestedItemGallery extends React.Component {
  render() {
    const { suggested } = this.props;

    return (
      <div className='suggestedItemGalleryBox'>
        <h2 className='titleSuggestedItemGallery'>#COMPLETE THE LOOK</h2>
        <div className='suggestedItemGallery'>
          {suggested.map(({ id, category, title, price, image }) => (
            <Link
              key={id}
              to={`/products/${category}/${id}`}
              className='suggestedItem'>
              <ProductListItem
                category={category}
                title={title || "N/A"}
                price={price}
                image={image}
              />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default SuggestedItemGallery;
