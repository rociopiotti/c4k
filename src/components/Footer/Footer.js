import React from "react";
import "./Footer.scss";
import { FooterMenu, SuscribeBox, SocialLinksMenu } from "./childs";

const Footer = () => {
  return (
    <div className="footer">
      <FooterMenu />
      <SuscribeBox />
      <SocialLinksMenu />
    </div>
  );
};

export default Footer;
