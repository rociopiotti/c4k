import React, { Component } from "react";
import "./StoreMap.scss";

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class StoreMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  render() {
    return <div 
    
    className='storeMapBox'>
      <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyA1p5jM6fQdHnsYqU4EOb5-SivNNW4xMl8"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
    </div>;
  }
}

export default StoreMap;
