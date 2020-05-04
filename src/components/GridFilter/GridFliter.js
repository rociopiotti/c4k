import React from "react"
import "./GridFilter.scss"
import Icon from "../Icon/Icon"


class GridFilter extends React.Component {
    render() {
        return (
            <div className="filterIcon"><Icon  type="filter"/>FILTER</div>
        )
    }
}

export default GridFilter