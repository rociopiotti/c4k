import React from "react";
import "./CartItem.scss";
import Icon from "../Icon/Icon";
import Dropdown from "../../utils/DropDown/DropDown";

//ROUTER
import { Link } from "react-router-dom";

class CartItem extends React.Component {
  render() {
    const { data, onCartItemClick } = this.props;
    const { id, category, image, title, price, userSelection } = data;

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

          <button className='btnAddItemWishList'>
            <Icon type='heart' />
          </button>
        </div>
        <div className='column2'>
          <button className='btnRemoveItem'>
            <Icon type='remove' />
          </button>
          <h3 className='cartItemTitle'>{title}</h3>
          <div className='cartItemDescription'>
            <p className='itemNumber'>
              Art N°: <span> {id} </span>
            </p>
            <p className='itemColor'>
              Color: <span>{userSelection.color}</span>
            </p>
            <p className='itemSize'>
              Size: <span>{userSelection.size}</span>
            </p>
            <p className='itemTotal'>
              Total: <span></span> €{price}
            </p>
          </div>
          <Dropdown dropdownType={"quantity"} />
        </div>
      </div>
    );
  }
}

export default CartItem;
