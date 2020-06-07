import React from "react";
import "./EstimatedTotal.scss";

const SHIPPING_COST = 14.5;
const MIN_COST = 170;

class EstimatedTotal extends React.Component {
  calculateCost() {
    const { items } = this.props;

    let cost = 0;
    items.forEach((element) => {
      cost += parseInt(element.price);
    });
    return cost;
  }

  render() {
    const cost = this.calculateCost();
    const shipping = cost < MIN_COST ? SHIPPING_COST : 0;
    const total = cost + shipping;

    return (
      <div className='estimatedTotalBox'>
        <p>
          SUBTOTAL: <span></span>€{cost}
        </p>
        <p>
          SHIPPING: <span></span> €{shipping}
        </p>
        <hr></hr>
        <p>
          TOTAL: <span></span> €{total}
        </p>
      </div>
    );
  }
}

export default EstimatedTotal;
