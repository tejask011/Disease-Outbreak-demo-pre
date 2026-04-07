// src/components/MapView.jsx

import { MapContainer, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// 🎯 Color based on risk
const getColor = (risk) => {
  if (risk > 70) return "red";
  if (risk > 40) return "orange";
  return "green";
};

// 🎯 Radius based on risk (IMPORTANT CHANGE)
const getRadius = (risk) => {
  return risk * 10; // bigger circles for higher risk
};

const MapView = ({ data }) => {
  return (
    <MapContainer
      center={[18.52, 73.85]}
      zoom={12}
      style={{
        height: "450px",
        width: "100%",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {data.map((area, i) => (
        <Circle
          key={i}
          center={[area.lat, area.lng]}
          radius={getRadius(area.risk)}
          pathOptions={{
            color: getColor(area.risk),
            fillColor: getColor(area.risk),
            fillOpacity: 0.5,
          }}
        />
      ))}
    </MapContainer>
  );
};

export default MapView;