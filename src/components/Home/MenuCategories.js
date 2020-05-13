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
                  context.onHomeMenuClick("trousers");
                }}
                href="#">
                #TROUSERS
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  context.onHomeMenuClick("tshirts");
                }}
                href="#">
                #T-SHIRTS
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  context.onHomeMenuClick("bags");
                }}
                href="#">
                #BAG
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  context.onHomeMenuClick("shoes");
                }}
                href="#">
                #SHOES
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  context.onHomeMenuClick("newArrivals");
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
