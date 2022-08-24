// const mapkey = 'AIzaSyCh2j8eK3Hl0IKuSS9DOmXUixpRTEc7gsk'

import React, { Fragment, useCallback, useRef, useState } from "react";
import { GoogleMap, Polyline, useLoadScript } from "@react-google-maps/api";

const MapComponent = () => {
  const polylineRef = useRef(null);
  const listenersRef = useRef([]);
  const [path, setPath] = useState([
    { lat: 41.8781, lng: -87.6298 },
    { lat: 41.8981, lng: -87.6398 }
  ]);

  // Call setPath with new edited path
  const onEdit = useCallback(() => {
    if (polylineRef.current) {
      const nextPath = polylineRef.current
        .getPath()
        .getArray()
        .map((latLng) => latLng.toJSON());
      setPath(nextPath);
    }
  }, [setPath]);

  // Bind refs to current Polyline and listeners
  const onLoad = useCallback(
    (polyline) => {
      polylineRef.current = polyline;
      const path = polyline.getPath();
      listenersRef.current.push(
        path.addListener("set_at", onEdit),
        path.addListener("insert_at", onEdit),
        path.addListener("remove_at", onEdit)
      );
    },
    [onEdit]
  );

  // Clean up refs
  const onUnmount = useCallback(() => {
    listenersRef.current.forEach((lis) => lis.remove());
    polylineRef.current = null;
  }, []);

  const mapContainerStyle = {
    width: "500px",
    height: "500px",
  };

  const showPath = () => {
    console.log(path); //What should be here to show the edited path if its possible to access?
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCh2j8eK3Hl0IKuSS9DOmXUixpRTEc7gsk"
  });

  const center = { lat: 41.8781, lng: -87.6298 };

  if (loadError) return "Error loading Google Map";
  if (!isLoaded) return "Loading Maps....";

  return (
    <Fragment>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Polyline
          ref={polylineRef}
          path={path}
          options={{ editable: true, strokeColor: "#ff0000" }}
          // Event used when manipulating and adding points
          onMouseUp={onEdit}
          onLoad={onLoad}
          onUnmount={onUnmount}
        />
      </GoogleMap>
      <button onClick={showPath}>Save path</button>
    </Fragment>
  );
};

export default MapComponent;