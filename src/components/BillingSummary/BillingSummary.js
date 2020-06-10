import React, { Component } from "react";
import "./BillingSummary.scss";

class BillingSummary extends Component {
  render() {
    return (
      <div className='billingSummaryBox'>
        <h3>BILLING SUMMARY</h3>
        <hr></hr>
        <p>
          ITEMS TOTAL: <span></span> €145
        </p>
        <p>
          SHIPPING: <span></span> €14.5
        </p>
        <hr></hr>
        <p>
          TOTAL FOR YOUR ORDER: <span></span> €149.5
        </p>
        <p>
          The total amount you pay includes all applicable customs duties &
          taxes. We guarantee no additional charges on delivery
        </p>
      </div>
    );
  }
}

export default BillingSummary;
