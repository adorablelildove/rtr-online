import { Component } from "react";
import {Map, GoogleApiWrapper} from 'google-maps-react'

class MapContainer extends Component{
  render() {
    return(
      <Map  
        google = {this.props.google}
        style = {{width:"100%", height:"100%"}}
        zoom = {10}
        initialCenter = {
          {
            lat: -6.175110,
            lng: 106.865036
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC6UV9ggCv3gh6RjryismRWjKVm7SkmSbg"
})(MapContainer)