import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapEvent = () => {
  const event = {
    eventId: "12345",
    title: "Tech Symposium 2025",
    location: {
      address: "IIT Campus, Delhi, India",
      coordinates: {
        lat: 28.5449,
        lng: 77.1926,
      },
    },
  };
  return (
    <div className="w-full h-[300px] rounded-xl overflow-hidden">
      <MapContainer
        center={[
          event.location.coordinates.lat,
          event.location.coordinates.lng,
        ]}
        zoom={16}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[
            event.location.coordinates.lat,
            event.location.coordinates.lng,
          ]}
        >
          <Popup>{event.title}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapEvent;
