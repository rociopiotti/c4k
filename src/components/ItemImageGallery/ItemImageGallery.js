import React from "react"
import "./ItemImageGallery.scss"

import itemImg from "../../img/trousers-white1.png"

class ItemImageGallery extends React.Component {
  handleShowImage  (Index)  {
    console.log("Click en el boton que abre:", Index)
  }
  render() {
    
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
              this.handleShowImage("Index Image 1")
            }}
            className="btnGallery"></button>
          <button
            onClick={() => {
              this.handleShowImage("Index Image 2")
            }}
            className="btnGallery"></button>
          <button
            onClick={() => {
              this.handleShowImage("Index Image 3")
            }}
            className="btnGallery"></button>
        </div>
      </div>
    )
  }
}
export default ItemImageGallery
