import React from "react";
import "./BtnSingIn.scss";

// ROUTER
import { Link } from "react-router-dom";

class BtnSingIn extends React.Component {


  render() {
    return (
      <div className='btnSingIn'>
        <Link to={`/paymentgateway`} >
        SING IN
      </Link>
      </div>
      
    );
  }
}

export default BtnSingIn;
