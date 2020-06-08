import React, { Component } from "react";
import "./StoreMap.scss";

import GoogleMapReact from "google-map-react";

import Market from "./Marker";

const API = process.env.REACT_APP_MAPS_API_KEY;

class StoreMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.7467387,
      lng: -73.9862297,
    },
    zoom: 5,
  };
  render() {
    return (
      <div className='storeMapBox'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          <Market lat={40.7467387} lng={-73.9862297} />
          <Market lat={51.5159853} lng={-0.1374377} />
          <Market lat={36.5068357} lng={-4.8858616} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default StoreMap;
