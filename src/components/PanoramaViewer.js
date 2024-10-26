import React, { useEffect } from 'react';

const PanoramaView = () => {
  useEffect(() => {
    // Dynamically load Pannellum JavaScript and CSS from CDN
    const pannellumScript = document.createElement('script');
    pannellumScript.src = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js";
    pannellumScript.async = true;
    document.body.appendChild(pannellumScript);

    const pannellumCSS = document.createElement('link');
    pannellumCSS.rel = "stylesheet";
    pannellumCSS.href = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css";
    document.head.appendChild(pannellumCSS);

    // Initialize Pannellum viewer after the script loads
    pannellumScript.onload = () => {
      window.pannellum.viewer('panorama-container', {
        type: 'equirectangular',
        panorama: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/2017.02.18_Equirectangular_DC_People_and_Places_3780_%2832132214284%29.jpg/1920px-2017.02.18_Equirectangular_DC_People_and_Places_3780_%2832132214284%29.jpg',  // Replace with your image URL
        autoLoad: true,
        pitch: 0,
        yaw: 0,
        hfov: 120,
        minHfov: 50,
        maxHfov: 120,
        mouseZoom: false,  // Disable mouse wheel zoom
      });
    };

    return () => {
      // Clean up appended script and CSS
      document.body.removeChild(pannellumScript);
      document.head.removeChild(pannellumCSS);
    };
  }, []);

  return (
    <div
      id="panorama-container"
      style={{ width: '100%', height: '85vh' }}
    ></div>
  );
};

export default PanoramaView;
