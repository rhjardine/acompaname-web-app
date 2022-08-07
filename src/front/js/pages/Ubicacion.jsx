import React from "react";
import GoogleMaps from "../component/GoogleMaps";
import { Marker } from "./Marker";

const Ubicacion = () => {
  const latlng = {
    lat: 10.47689358642617,
    lng: -66.8926801365146,
  };
  return(
    <GoogleMaps
      center={latlng}
    >
      <Marker
        draggable={false}
        position={latlng}
      />
    </GoogleMaps>
  )
};

export default Ubicacion;
