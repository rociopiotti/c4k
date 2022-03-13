import React, { Component } from "react";
import "./PrivacyPolicy.scss";
import SectionTransition from "../SectionTransition/SectionTransition";

class PrivacyPolicy extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="termsAndConditionBox">
        <SectionTransition />

        <div className="termsAndCondition">
          <h2>PRIVACY POLICY</h2>
          <h3>LOREM IPMSUM</h3>

          <p>
            Tempor ipsum aliqua Lorem qui ut cillum ipsum qui. Tempor commodo
            officia incididunt culpa minim elit voluptate laborum anim cupidatat
            ex laboris. Ex anim do pariatur minim esse tempor pariatur est.
            Deserunt reprehenderit non aliqua labore velit ullamco ullamco quis
            culpa pariatur consequat ea. Aliquip excepteur exercitation laborum
            ipsum occaecat aute occaecat adipisicing ea excepteur ex laboris
            quis. Aliqua exercitation amet dolor ipsum anim qui Lorem aliqua.
            Duis pariatur elit ex laboris est eu do consequat nostrud ea.
          </p>
        </div>
      </div>
    );
  }
}

export default PrivacyPolicy;
