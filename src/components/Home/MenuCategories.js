import React from "react"
import "./MenuCategories.scss"

const MenuCategories = (props) => {

  const handleClickLink = () => {
    // console.log("Click en el boton lleva a:", Value)
   
  }
    
    return (
      <div className="menuCategoriesBox">
        <ul className="menuCategories">
          <li>
            <a
              onClick={() => {
                props.onHomeMenuClick("trousers")
              }}
              href="#">
              #TROUSERS
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                props.onHomeMenuClick("tshirts")
              }}
              href="#">
              #T-SHIRTS
            </a>
          </li>
          <li>
            <a
             onClick={() => {
              props.onHomeMenuClick("bags")
              }}
             href="#">#BAG</a>
          </li>
          <li>
            <a  onClick={() => {
                props.onHomeMenuClick("shoes")
              }}
            href="#">#SHOES</a>
          </li>
          <li>
            <a  onClick={() => {
                props.onHomeMenuClick("newArrivals")
              }}
            href="#">#NEW ARRIVALS</a>
          </li>
        </ul>
      </div>
    )
  
}

export default MenuCategories
