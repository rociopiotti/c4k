import React from "react";
import "./SuggestedItems.scss";
import ProductListItem from "../ProductListItem/ProductListItem";

import { Link } from "react-router-dom";

class SuggestedItems extends React.Component {
  goToTop() {
    window.scrollTo(0, 0);
  }
  render() {
    const { suggested } = this.props;
    
    return (
      <div className='suggestedItemGalleryBox'>
        <h2 className='titleSuggestedItemGallery'>#COMPLETE THE LOOK</h2>
        <div className='suggestedItemGallery'>
          {suggested.map(({ id, category, title, price, image }, index) => (
            <Link
              key={index}
              to={`/products/${category}/${id}`}
              className='suggestedItem'
              onClick={this.goToTop}>
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

export default SuggestedItems;
