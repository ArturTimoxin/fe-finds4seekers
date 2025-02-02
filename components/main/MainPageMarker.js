import React from "react";
import Point from "../common/Map/Point";
import InfoWindow from "./InfoWindow";
import { Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MainPageMarker = ({ adId, lat, lng, typeAd }) => {
  return (
    <Point typeAd={typeAd} lat={lat} lng={lng}>
      <Popup>
        <InfoWindow adId={adId} />
      </Popup>
    </Point>
  );
};

export default MainPageMarker;
