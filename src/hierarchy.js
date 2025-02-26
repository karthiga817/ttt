import React, { useState, useEffect } from "react";
import ImageMapper from "react-image-mapper";

const Hierarchy = () => {
  const [imageWidth, setImageWidth] = useState(800); // Default width
  const [scaledMap, setScaledMap] = useState(null);
  
  const originalWidth = 800; // Original image width

  const MAP = {
    name: "train-the-trainer-map",
    areas: [
      { name: "Dr. Perumal Raja", shape: "circle", coords: [300, 50, 40] ,href:"https://www.google.com"},
      { name: "IamGowtham", shape: "circle", coords: [120, 150, 30] },
      { name: "Aakash Illayaseelan", shape: "circle", coords: [240, 150, 30] },
      { name: "Rohit Ananda", shape: "circle", coords: [360, 150, 30] },
      { name: "Sivasubramanian", shape: "circle", coords: [480, 150, 30] },
      { name: "Dilip Kumar", shape: "circle", coords: [600, 150, 30] },
      { name: "Dr. Rizal Muham", shape: "circle", coords: [720, 150, 30] },
    ],
  };

  // Function to scale coordinates based on the current image width
  const scaleMap = (currentWidth) => {
    const scaleFactor = currentWidth / originalWidth;
    return {
      ...MAP,
      areas: MAP.areas.map(area => ({
        ...area,
        coords: area.coords.map((coord, index) =>
          index === 2 ? coord * scaleFactor : Math.round(coord * scaleFactor) // Keep radius proportional
        ),
      })),
    };
  };

  // Update map when image resizes
  useEffect(() => {
    const handleResize = () => {
      const container = document.getElementById("image-container");
      if (container) {
        const newWidth = container.clientWidth;
        setImageWidth(newWidth);
        setScaledMap(scaleMap(newWidth));
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once initially

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="image-container" style={{ maxWidth: "100%", textAlign: "center" }}>
      {scaledMap && (
        <ImageMapper
          src="/images/heir.png"
          map={scaledMap}
          width={imageWidth}
        />
      )}
    </div>
  );
};

export default Hierarchy;
