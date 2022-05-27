import React from 'react'
import {Map, GoogleApiWrapper} from 'google-maps-react'

function MapContainer() {
  return (
    <Map 
      google = {this.props.google}
      style = {{width:"100%", height:"100%"}}
      zoom = {10}
      initialCenter = {
        {
          lat: -0.789275,
          lng: 113.921326
        }
      }
    />
  )
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAJ4EPSpJsK29aVP0MBohB_QYwfYrqoYEg"
})(MapContainer)

