import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import PropTypes from "prop-types";

var map;

const LocationMap = props => {
  const mapContainer = useRef(null);
  const [coordinates] = useState([-0.1262362, 51.5001524]);
  const [zoom] = useState(1);
  const initMapboxAndSlider = () => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoidmd1cm5hbmkiLCJhIjoiY2s2NmF5ZXpmMTAxdTNsbnI3dmh4cTJ3ZiJ9.rPIHv99-UOJ2ZRbX3Sb-hg";
    map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: coordinates,
      zoom: zoom,
      attributionControl: false,
      maxZoom: 8,
      minZoom: 1
    });
    // map.setRenderWorldCopies(false)
    map.on("load", () => {
      map.resize();
    });
    map.dragRotate.disable();
  };

  useEffect(() => {
    map && map.remove();
    initMapboxAndSlider();
  }, []);

  return (
    <div className="location-map" ref={mapContainer} />
  )
};
LocationMap.propTypes = {
  location: PropTypes.object
};

export default LocationMap;
