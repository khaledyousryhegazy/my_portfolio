import { useRef, useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWJkZWxmYXR0YSIsImEiOiJjbGp3enZkdnQwZG5yM2NudnM5czEzNTQxIn0.TTJmPL4sv74-PuLSS2JYqg";

export default function Map() {
  // 31.133866403965246, 30.129436378429386
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(30.129436378429386);
  const [lat, setLat] = useState(31.133866403965246);
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.scrollZoom.disable();
  });

  return (
    <div className="w-full px-6">
      <div ref={mapContainer} className="w-auto h-[400px] " />{" "}
    </div>
  );
}
