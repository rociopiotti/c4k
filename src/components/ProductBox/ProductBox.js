import React, { Component } from "react";
import "./ProductBox.scss";
import ItemImageGallery from "../ItemImageGallery/ItemImageGallery";
import ProductDetails from "../ProductDetails/ProductDetails";
import SuggestedItems from "../SuggestedItems/SuggestedItems";
import SectionTransition from "../SectionTransition/SectionTransition";

// CONTEXT
import PageManagerContext from "../../context/pageManager-context";

class ProductBox extends Component {
  static contextType = PageManagerContext;
  state = {
    images: [],
    details: {
      title: "",
      price: "",
      description: "",
      size: "",
      features: "",
      colors: "",
    },
    suggested: [],
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.handleData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.handleData();
    }
  }

  handleData() {
    const currentPath = this.props.location.pathname;
    const currentPathSplitted = currentPath.split("/");
    const sectionId = currentPathSplitted[2];
    const itemId = currentPathSplitted[3];

    const { itemsData } = this.context;

    const rawData = itemsData[sectionId];

    const itemData = rawData.filter((element) => element.id === itemId);

    const images = itemData[0].colors;

    const details = {
      title: itemData[0].title,
      price: itemData[0].price,
      size: itemData[0].size,
      colors: itemData[0].colors,
      description: itemData[0].description,
      features: itemData[0].features,
    };

    const { handleDataBase } = this.context;

    const suggested = handleDataBase.filter((product) => {
      return itemData[0].suggested.includes(product.id);
    });

    const suggestedFiltered = suggested.slice(0, 3);

    this.setState({
      itemId,
      sectionId,
      images,
      details,
      suggested: suggestedFiltered,
    });
  }

  render() {
    const { suggested, images, details, itemId, sectionId } = this.state;

    return (
      <div className='productBoxBox'>
        <SectionTransition />
        <div className='productBox'>
          <ItemImageGallery images={images} sectionId={sectionId} />
          <ProductDetails itemId={itemId} details={details} />
        </div>
        <SuggestedItems suggested={suggested} sectionId={sectionId} />
      </div>
    );
  }
}

export default ProductBox;
