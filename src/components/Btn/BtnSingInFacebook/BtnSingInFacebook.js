import React from "react";
import "./BtnSingInFacebook.scss";

export const BtnSingInFacebook = () => {
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

