import React from "react";
import "./BtnSingInGoogle.scss";

const BtnSingInGoogle = () => {

  const handleSingInGoogle = (url) => {
    console.log("Click en botón que lleva a:", url)
  };

  return (
    <button
      onClick={() => {
        handleSingInGoogle("SingInGoogleApi");
      }}
      className='btnSingInGoogle'>
      GOOGLE
    </button>
  );
};

export default BtnSingInGoogle;
