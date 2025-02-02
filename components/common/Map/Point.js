import React from "react";
import { AD_LOST_TYPE_ID } from "../../register-ad/ChooseTypeAd";
import { Marker } from "react-leaflet";

const LostMarker = new L.Icon({
  iconUrl: "/images/point-lost.png",
  iconSize: [30, 45], // (width, height)
});

const FindMarker = new L.Icon({
  iconUrl: "/images/point-find.png",
  iconSize: [30, 45], // (width, height)
});

const Point = ({ typeAd, lat, lng, children }) => {
  return (
    <Marker
      position={[lat, lng]}
      icon={typeAd === AD_LOST_TYPE_ID ? LostMarker : FindMarker}
    >
      {children}
    </Marker>
  );
};

export default Point;
