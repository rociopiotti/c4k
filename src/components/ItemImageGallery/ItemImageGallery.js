import React from "react"
import "./ItemImageGallery.scss"

import itemImg from "../../img/NIN EX4.png"

class ItemImageGallery extends React.Component {
  state = {
    showImageState: "indexImage1",
  }

  handleShowImage(newShowImageState) {
    this.setState({
      showImageState: newShowImageState,
    })
  }
  setImage(indexImage) {
    let itemImage
    switch (indexImage) {
      case "indexImage1":
        itemImage = "indexImage1"

        break
      default:
        itemImage = null
        break
      }
      return itemImage
  }
  render() {
    // console.log("CURRENT IMAGE:", this.state.showImageState)
    
      this.setImage(this.state.showImageState)
    
    return (
      <div className="itemImageGalleryBox">
        <div className="imagesBox">
          <div className="itemImage">
            <img src={itemImg} alt="trousers item" className="galleryItemImg" />
          </div>
        </div>
        <div className="btnGalleryBox">
          <button
            onClick={() => {
              this.handleShowImage("indexImage1")
            }}
            className="btnGallery">
            <div className="buttonRectangle"></div>
          </button>
          <button
            onClick={() => {
              this.handleShowImage("indexImage2")
            }}
            className="btnGallery">
            <div className="buttonRectangle"></div>
          </button>
          <button
            onClick={() => {
              this.handleShowImage("indexImage3")
            }}
            className="btnGallery">
            <div className="buttonRectangle"></div>
          </button>
        </div>
      </div>
    )
  }
}
export default ItemImageGallery
