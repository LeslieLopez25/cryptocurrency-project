import React, { useEffect, useState } from "react";

const Loader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-75 z-50 ${
        visible ? "block" : "hidden"
      }`}
      style={{
        backgroundImage: `url("../assets/images/circles.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img src="../assets/images/disk.gif" alt="Loading..." />
    </div>
  );
};

export default Loader;
