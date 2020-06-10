import React from "react";
import "./CartEmpty.scss";
import Icon from "../Icon/Icon";

const CartEmpty = () => {
  return (
    <div className='cartEmptyBox'>
      <div className='emptyBagIcon'>
        <Icon type='myBag' />
      </div>
      <p>YOUR BAR IS EMPTY</p>
    </div>
  );
};

export default CartEmpty;
