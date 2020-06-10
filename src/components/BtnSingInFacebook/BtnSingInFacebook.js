import React from "react";
import "./BtnSingInFacebook.scss";

const BtnSingInFacebook = () => {
  const handleSingInFacebook = (url) => {
    console.log("Click en botón que lleva a:", url)
  };

  return (
    <button
      onClick={() => {
        handleSingInFacebook("SingInFacebookApi");
      }}
      className='btnSingInFacebook'>
      FACEBOOK
    </button>
  );
};

export default BtnSingInFacebook;
