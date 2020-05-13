import React from "react";
import "./MenuCategories.scss";

import PageManagerContext from "../../context/pageManager-context";

const MenuCategories = (props) => {
  return (
    <PageManagerContext.Consumer>
      {context => (
        <div className="menuCategoriesBox">
          <ul className="menuCategories">
            <li>
              <a
                onClick={() => {
                  context.onSectionBtn("trousers");
                }}
                href="#">
                #TROUSERS
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  context.onSectionBtn("tshirts");
                }}
                href="#">
                #T-SHIRTS
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  context.onSectionBtn("bags");
                }}
                href="#">
                #BAG
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  context.onSectionBtn("shoes");
                }}
                href="#">
                #SHOES
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  context.onSectionBtn("newArrivals");
                }}
                href="#">
                #NEW ARRIVALS
              </a>
            </li>
          </ul>
        </div>
      )}
    </PageManagerContext.Consumer>
  );
};

export default MenuCategories;
