import React from "react"
import "./ProductListItem.scss"

import itemImg from "../../img/trousers-white1.png"

class ProductListItem extends React.Component {
    render () { 
        return (
            <div className= "productListItemBox"> 
            <div className="listItemImage"> 
            <img src={itemImg} alt="trousers item" className="cartItemImg" /></div>
            <div className="listItemDescription">
                <h3>#ITEM TITLE</h3>
                <p>PRICE</p>
            </div>
            </div>
        )
    }
}

export default ProductListItem