import React, { Component } from "react";
import "./CartItem.scss";
import Icon from "../Icon/Icon";
import Dropdown from "../../utils/DropDown/DropDown";

//ROUTER
import { Link } from "react-router-dom";

//CONTEXT
import PageManagerContext from "../../context/pageManager-context";

class CartItem extends Component {
  static contextType = PageManagerContext;

  removeFromList() {
    const { index } = this.props;
    this.context.handleDeleteFromCart(index);
  }

  handleColorItemImage() {
    const { data, onCartItemClick } = this.props;
    const { id, category, userSelection, alttext, colors } = data;

    const itemColor = colors.filter((item) => {
      const image = item.id.includes(userSelection.color);
      return image;
    });

    const colorItemImage = itemColor.map((element) => {
      return element.image;
    });

    return (
      <Link
        to={`/products/${category}/${id}`}
        onClick={onCartItemClick}
        className='cartItemImgBox'>
        <img
          src={`/public/webdesign/c4k/images/${category}/${colorItemImage}`}
          alt={alttext}
          className='cartItemImg'
        />
      </Link>
    );
  }

  selectQuantity(dropdownType, itemsNumber) {
    const { id } = this.props.data;
    this.context.handleUpdateQuantity(id, parseInt(itemsNumber));
  }

  render() {
    const { data } = this.props;
    const { id, title, price, userSelection } = data;

    return (
      <div className='cartItemBox'>
        <div className='column1'>
          {this.handleColorItemImage()}
          <button className='btnAddItemWishList'>
            <Icon type='heart' />
          </button>
        </div>
        <div className='column2'>
          <button
            className='btnRemoveItem'
            onClick={this.removeFromList.bind(this)}>
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
          <Dropdown
            dropdownType={"quantity"}
            selectQuantity={this.selectQuantity.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default CartItem;
