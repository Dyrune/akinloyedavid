import React, { useEffect } from "react";
import { preLoaderAnim } from "./gsapAnimations"; // Make sure you have this function to animate the loader

const Loader = ({ setLoading }) => {
  useEffect(() => {
    // Start the preloader animation when the component is mounted
    preLoaderAnim();

    // Simulate a loading time, or you can replace this with actual loading logic (e.g., fetching data)
    const fakeLoadingDuration = 5000; // Time in ms, adjust this based on your content loading time
    const timeout = setTimeout(() => {
      setLoading(false); // Once loading is done, set loading to false
    }, fakeLoadingDuration);

    // Cleanup timeout on unmount
    return () => clearTimeout(timeout);
  }, [setLoading]);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Architecutre,</span>
        <span>Planning,</span>
        <span>Solutions.</span>
      </div>
    </div>
  );
};

export default Loader;
