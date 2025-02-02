import React, { useState } from "react";
// import dynamic from "next/dynamic";
import SearchBox from "../common/Map/SearchBox";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import MainPageMarker from "./MainPageMarker";

const DEFAULT_ZOOM = 3;
const DEFAULT_CENTER = {
  lat: 47.948206,
  lng: 21.832424,
};

const MapMainPage = ({ adsPoints }) => {
  const [currentZoom, setCurrenZoom] = useState(DEFAULT_ZOOM);
  const [currentCenter, setCurrentCenter] = useState(DEFAULT_CENTER);

  const onChangeSeacrhBox = (place) => {
    if (!Array.isArray(place) || !place.length) return;
    const lat = place[0].geometry.location.lat();
    const lng = place[0].geometry.location.lng();
    setCurrenZoom(10);
    setCurrentCenter({ lat, lng });
  };

  return (
    <div className="main-page-map-wrap">
      <SearchBox
        placeholder={"Find place..."}
        onPlacesChanged={onChangeSeacrhBox}
      />
      <MapContainer
        style={{ height: "100%" }}
        center={currentCenter}
        zoom={currentZoom}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {adsPoints.map((adPoint) => (
          <MainPageMarker
            key={adPoint.adId}
            adId={adPoint.adId}
            typeAd={adPoint.typeId}
            lat={adPoint.lat}
            lng={adPoint.lng}
          />
        ))}
      </MapContainer>
    </div>
  );
};

export default MapMainPage;
