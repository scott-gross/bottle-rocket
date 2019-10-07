//import React, { Component } from 'react'
//import PropTypes from 'prop-types'

// AIzaSyCqylVzhov0-sySk1ThBR5xBzHIVcefkO8
import React from 'react';

class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.map = null;
  }
  componentDidUpdate(){
    let loc = this.props.restaurant.location;
    let restaurant = this.props.restaurant;
    if(!!this.props.location) {
      this.map = new window.google.maps.Map(this.refs.map, {
        center: {
          lat: loc.lat,
          lng: loc.lng
        },
        title: restaurant.name,
        zoom: 16
      })
  
      let marker = new window.google.maps.Marker({
        position: {
          lat: loc.lat,
          lng: loc.lng
        },
        map: this.map
      });
      var infowindow = new window.google.maps.InfoWindow({
        content: restaurant.name
      });
      marker.addListener('click', function() {
        infowindow.open(marker.map, marker);
      });
    }   
  }
  
  render() {
    return (
      <div ref='map' style={{ width: '100%', height: 180, backgroundColor: '#e6e6e6' }}></div>
    )
  }
}
export default Maps