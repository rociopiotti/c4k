import React from "react"
import "./EstimatedTotal.scss"


class EstimatedTotal extends React.Component {
    render () {
        return (
            <div className="estimatedTotalBox">
            
                <p>SUBTOTAL: <span></span> €145 </p>
                <p>SHIPPING: <span></span> €14.5</p>
                <hr></hr>
                <p>TOTAL: <span></span> €149.5</p>
            </div>
        )
    }
}

export default EstimatedTotal