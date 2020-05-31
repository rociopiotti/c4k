import React from "react";
import "./ProductBox.scss";
import ItemImageGallery from "../ItemImageGallery/ItemImageGallery";
import ProductDetails from "../ProductDetails/ProductDetails";
import SuggestedItemGallery from "../SuggestedItemGallery/SuggestedItemGallery";
import SectionTransition from "../SectionTransition/SectionTransition";

// CONTEXT
import PageManagerContext from "../../context/pageManager-context";

class ProductBox extends React.Component {
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

    // Recibir la data "cruda" del context
    const rawData = itemsData[sectionId];

    const itemData = rawData.filter((element) => element.id === itemId);

    // Separar un array con las imagenes
    const images = itemData[0].colors;

    // Separar un objecto con los datos del producto.
    const details = {
      title: itemData[0].title,
      price: itemData[0].price,
      size: itemData[0].size,
      colors: itemData[0].colors,
      description: itemData[0].description,
      features: itemData[0].features,
    };
    // Separar un array con items sugeridos

    //--------------------------------------------------------
    // const suggested = [...itemData[0].suggested];
    let allProducts = [];

    // 1. Iterar sobre el objecto database completo.
    // 2. Iterar sobre el array de cada categoria.
    for (let key in itemsData) {
      // base de datos > ingresar en bags > extraer el array
      // mergearlos en un nuevo array:
      allProducts = [...allProducts, ...itemsData[key]];
    }

    // 2.1. Buscar coincidedncias y guardalas.
    const suggested = allProducts.filter((product) => {
      return itemData[0].suggested.includes(product.id);
    });

    //--------------------------------------------------------

    this.setState({
      sectionId,
      images,
      details,
      suggested,
    });
  }

  render() {
    const { suggested, images, details, sectionId } = this.state;
    return (
      <div className='productBoxBox'>
        <SectionTransition />
        <div className='productBox'>
          <ItemImageGallery images={images} sectionId={sectionId} />
          <ProductDetails details={details} />
        </div>
        <SuggestedItemGallery suggested={suggested} sectionId={sectionId} />
      </div>
    );
  }
}

export default ProductBox;
