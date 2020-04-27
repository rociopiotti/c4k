import React from "react"
import "./MenuCategories.scss"

const MenuCategories= (props) => {
  const handleClickLink = (Value) => {
    console.log("Click en el boton lleva a:", Value)
  }
    
    return (
      <div className="menuCategoriesBox">
        <ul className="menuCategories">
          <li>
            <a
              onClick={() => {
                handleClickLink("TROUSERSPAGE")
              }}
              href="#">
              #TROUSERS
            </a>
          </li>
          <li>
            <a
              onClick={() => {
               handleClickLink("T-SHIRTSPAGE")
              }}
              href="#">
              #T-SHIRTS
            </a>
          </li>
          <li>
            <a
             onClick={() => {
                handleClickLink("BAGPAGE")
              }}
             href="#">#BAG</a>
          </li>
          <li>
            <a  onClick={() => {
                handleClickLink("SHOESPAGE")
              }}
            href="#">#SHOES</a>
          </li>
          <li>
            <a  onClick={() => {
                handleClickLink("NEW ARRIVALSPAGE")
              }}
            href="#">#NEW ARRIVALS</a>
          </li>
        </ul>
      </div>
    )
  
}

export default MenuCategories
