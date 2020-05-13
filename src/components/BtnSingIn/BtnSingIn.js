import React from "react";
import "./BtnSingIn.scss";

// CONTEXT
import PageManagerContext from "../../context/pageManager-context";

class BtnSingIn extends React.Component {
  static contextType = PageManagerContext;

  handleSingIn() {
    // TODO HACER QUE EN EL SLIDE SING IN NO LLEVE A
    //PAYMENT SINO QUE DE INICIO DE SESION
    this.context.onSectionBtn("paymentGateway");
  }
  render() {
    return (
      <button
        onClick={() => {
          this.handleSingIn();
        }}
        className="btnSingIn">
        SING IN
      </button>
    );
  }
}

export default BtnSingIn;
