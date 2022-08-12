import { Map, Marker, PolyLine, GoogleApiWrapper } from "google-maps-react";
export class MapContainer extends Component {
  constructor() {
    this.state = {
      markers: [{ lat: 40.854885, lng: -88.081807 }],
    };
  }
  render() {
    style = {
      width: "100%",
      height: "100%",
    };
    onMapClicked = (mapProps, map, clickEvent) => {
      const updatedMarkers = [...this.state.markers];
      updatedMarkers.push({
        lat: clickEvent.latLng.lat(),
        lng: clickEvent.latLng.lng(),
      });
      this.setState({ markers: updatedMarkers });
    };
    return (
      <Map
        google={this.props.google}
        style={this.style}
        initialCenter={{
          lat: 40.854885,
          lng: -88.081807,
        }}
        zoom={15}
        onClick={this.onMapClicked}
      >
        {this.state.markers.filter((coords, index) => {
          if (index === 0 || index === this.state.markers.length - 1) {
            return <Marker key={`marker-${index}`} position={coords} />;
          }
        })}
        <PolyLine
          path={this.markers}
          strokeColor="#0000ff"
          strokeOpacity={0.8}
          strokeWeight={6}
        />
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCh2j8eK3Hl0IKuSS9DOmXUixpRTEc7gsk",
})(MapContainer);

apiKey: "AIzaSyCh2j8eK3Hl0IKuSS9DOmXUixpRTEc7gsk";
