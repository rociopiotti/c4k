import React from "react"
import "./Item.scss"

export const Item = () => {

    return (
      <div className="storeItemBox">
        <h4>C4K</h4>
        <p className="streetData">152 Madison Avenue</p>
        <p className="cityData">New York City , New York</p>
        <p className="postCodeData">10065</p>
        <a href="tel:111-111-1111" className="phoneData">### ### ###</a>
      </div>
    )
};

