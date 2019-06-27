import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import CurrentLocation from './Map';

export class MapContainer extends React.Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };


    render() {
      return (
          
        <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
        >
        <Marker onClick={this.onMarkerClick} name={'current location'} />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
         <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>

        </InfoWindow>
        </CurrentLocation>

      );
    }
  }
   
  export default GoogleApiWrapper({
    apiKey: ("AIzaSyDdvDQUxeUclErwgk4Gye0g61SxJzftuXE")
  })(MapContainer)