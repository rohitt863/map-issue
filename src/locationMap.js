import React, { useEffect, useRef, useState } from "react";
//import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import PropTypes from "prop-types";

var map;

const LocationMap = props => {
  const mapContainer = useRef(null);
  const [zoom] = useState(1);
  const initMapboxAndSlider = () => {
    window.mapboxgl.accessToken =
      "pk.eyJ1Ijoidmd1cm5hbmkiLCJhIjoiY2s2NmF5ZXpmMTAxdTNsbnI3dmh4cTJ3ZiJ9.rPIHv99-UOJ2ZRbX3Sb-hg";
      
      var map = new window.mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
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
    <div className="location-map" style={{width: '400px', height: '300px'}} ref={mapContainer} />
  )
};
LocationMap.propTypes = {
  location: PropTypes.object
};

export default LocationMap;
