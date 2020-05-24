import React from "react";
import "./BtnSingIn.scss";

// CONTEXT
import PageManagerContext from "../../context/pageManager-context";

// ROUTER
import { Link } from "react-router-dom";

class BtnSingIn extends React.Component {
  static contextType = PageManagerContext;

  handleSingIn() {
    // TODO HACER QUE EN EL SLIDE SING IN NO LLEVE A
    //PAYMENT SINO QUE DE INICIO DE SESION
    this.context.onSectionBtn("paymentGateway");
  }
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
