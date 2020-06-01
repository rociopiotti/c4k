import React from "react";
import "./CartItem.scss";
import Icon from "../Icon/Icon";
import Dropdown from "../../utils/DropDown/DropDown";

//ROUTER
import { Link } from "react-router-dom";

class CartItem extends React.Component {
  state = {
    wishList: false,
    removeFromCart: false,
  };

  handleAddToWishList() {
    this.setState({
      wishList: true,
    });
  }

  handleRemoveFromCart() {
    this.setState({
      removeFromCart: true,
    });
  }

  render() {
    const { data, onCartItemClick } = this.props;
    const { id, category, image, title, price, size, colors } = data;
    
    return (
      <div className='cartItemBox'>
        <div className='column1'>
          <Link
            to={`/products/${category}/${id}`}
            onClick={onCartItemClick}
            className='cartItemImgBox'>
            <img
              src={`/images/${category}/${image}`}
              alt={title}
              className='cartItemImg'
            />
          </Link>

          <button
            onClick={() => {
              this.handleAddToWishList();
            }}
            className='btnAddItemWishList'>
            <Icon type='heart' />
          </button>
        </div>
        <div className='column2'>
          <button
            onClick={() => {
              this.handleRemoveFromCart();
            }}
            className='btnRemoveItem'>
            <Icon type='remove' />
          </button>
          <h3 className='cartItemTitle'>{title}</h3>
          <div className='cartItemDescription'>
            <p className='itemNumber'>
              Art N°: <span></span>
              {id}
            </p>
            <p className='itemColor'>
              Color: <span></span> Grey
            </p>
            <p className='itemSize'>
              Size: <span></span> M
            </p>
            <p className='itemTotal'>
              Total: <span></span> €{price}
            </p>
          </div>
          <Dropdown dropdownType={"color"} data={colors} />
          <Dropdown dropdownType={"size"} data={size} />
          <Dropdown dropdownType={"quantity"}  />
        </div>
      </div>
    );
  }
}

export default CartItem;
