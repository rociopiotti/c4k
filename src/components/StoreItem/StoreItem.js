import React from "react"
import "./StoreItem.scss"

const StoreItem = (props) => {

    return (
      <div className="storeItemBox">
        <h4>C4K</h4>
        <p className="streetData">152 Madison Avenue</p>
        <p className="cityData">New York City , New York</p>
        <p className="postCodeData">10065</p>
        <a href="#" className="phoneData">### ### ###</a>
      </div>
    )
  
}

export default StoreItem
