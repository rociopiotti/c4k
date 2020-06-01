import React from "react";
import "./CartItem.scss";
import Icon from "../Icon/Icon";
import DropdownSize from "../DropdownSize/DropdownSize";
import itemImg from "../../img/NIN EX4.png";
import DropdownQuantity from "../DropdownQuantity/DropdownQuantity";
import PageManagerContext from "../../context/pageManager-context";

//ROUTER
import { Link } from "react-router-dom";
import Dropdown from "../DropDown/DropDown";

class CartItem extends React.Component {
  static contextType = PageManagerContext;

  state = {
    wishList: false,
    removeFromCart: false,
  };

  handleSeeProductBox() {
    this.context.onSlideBtn();
  }

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
    
    const { data , onCartItemClick} = this.props;

    const { id , category, image, title, price } = data;

    console.log(this.props.data);
    return (
      <div className='cartItemBox'>
        <div className='column1'>
          <Link
            to={`products/${category}/${id}`}
            className='cartItemImgBox'
            onClick={onCartItemClick}>
            <img src={`/images/${category}/${image}`} alt={title} className='cartItemImg' />
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
              Art N°: <span></span>{id}
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
          {/* TO DO: CORREGIR SUPERPOSICION DE DROPDOWNS */}
          <Dropdown />
          <DropdownSize />
          <DropdownQuantity />
        </div>
      </div>
    );
  }
}

export default CartItem;
