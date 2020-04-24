import React from "react"
import "./MenuCategories.scss"

class MenuCategories extends React.Component {
  handleClickLink  (Value)  {
    console.log("Click en el boton lleva a:", Value)
  }
  render() {
    
    return (
      <div className="menuCategoriesBox">
        <ul className="menuCategories">
          <li>
            <a
              onClick={() => {
                this.handleClickLink("TROUSERSPAGE")
              }}
              href="#">
              #TROUSERS
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                this.handleClickLink("T-SHIRTSPAGE")
              }}
              href="#">
              #T-SHIRTS
            </a>
          </li>
          <li>
            <a
             onClick={() => {
                this.handleClickLink("BAGPAGE")
              }}
             href="#">#BAG</a>
          </li>
          <li>
            <a  onClick={() => {
                this.handleClickLink("SHOESPAGE")
              }}
            href="#">#SHOES</a>
          </li>
          <li>
            <a  onClick={() => {
                this.handleClickLink("NEW ARRIVALSPAGE")
              }}
            href="#">#NEW ARRIVALS</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default MenuCategories
