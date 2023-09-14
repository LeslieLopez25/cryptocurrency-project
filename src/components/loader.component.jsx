import React, { useEffect } from "react";
import Disk from "../assets/images/disk.gif";

const Loader = ({ hideLoader }) => {
  useEffect(() => {
    const minDisplayDuration = 2500; // Minimum display duration in milliseconds (2.5 seconds)

    const startTime = new Date().getTime();

    const loaderTimeout = setTimeout(() => {
      hideLoader(); // Call the hideLoader function after the minimum display duration
    }, minDisplayDuration);

    // Check if data has already loaded before the minimum display duration
    if (new Date().getTime() - startTime >= minDisplayDuration) {
      clearTimeout(loaderTimeout); // Clear the timeout if data loaded quickly
      hideLoader(); // Hide the loader immediately
    }

    return () => {
      clearTimeout(loaderTimeout); // Clear the timeout if the component unmounts
    };
  }, [hideLoader]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <img src={Disk} alt="Loading..." className="w-16 h-16" />
      </div>
    </div>
  );
};

export default Loader;
