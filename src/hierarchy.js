import React, { useState, useEffect } from "react";
import ImageMapper from "react-image-mapper";

const Hierarchy = () => {
  const [imageWidth, setImageWidth] = useState(800); // Default width
  const [scaledMap, setScaledMap] = useState(null);
  
  const originalWidth = 800; // Original image width

  const MAP = {
    name: "train-the-trainer-map",
    areas: [
      { name: "Dr. Perumal Raja", shape: "circle", coords: [409, 64, 34]},
      { name: "IamGowtham", shape: "circle", coords: [120, 150, 30] },
      { name: "Aakash Illayaseelan", shape: "circle", coords: [240, 150, 30] },
      { name: "Rohit Ananda", shape: "circle", coords: [360, 150, 30] },
      { name: "Sivasubramanian", shape: "circle", coords: [480, 150, 30] },
      { name: "Dilip Kumar", shape: "circle", coords: [600, 150, 30] },
      { name: "Dr. Rizal Muham", shape: "circle", coords: [720, 150, 30] },
      { name: "Mr.KR.Senthil Murugan", shape: "circle", coords: [158, 234, 20] },
      { name: "AR/VR", shape: "circle", coords: [55, 422, 20], href: "http://localhost:3001/ArVr" },
      { name: "AI/ML", shape: "circle", coords: [160, 422, 20],href: "http://localhost:3001/machine-learning"  },
      { name: "Full Stack", shape: "circle", coords: [294, 422, 20],href:"http://localhost:3001/fullstack"},
      { name: "Mobile App Development", shape: "circle", coords: [470, 422, 20] ,href:"http://localhost:3001/aad"},
      { name: "Cloud Computing", shape: "circle", coords: [550, 422, 20],href:"http://localhost:3001/cloud-computing" },
      { name: "Data Analytics", shape: "circle", coords: [630, 422, 20] ,href:"http://localhost:3001/Data-analyst"},
      { name: "Gen-AI", shape: "circle", coords: [740, 422, 20] ,href:"http://localhost:3001/Dsa"}
    ],
  };

  const scaleMap = (currentWidth) => {
    const scaleFactor = currentWidth / originalWidth;
    return {
      ...MAP,
      areas: MAP.areas.map(area => ({
        ...area,
        coords: area.coords.map((coord, index) =>
          index === 2 ? Math.round(coord * scaleFactor) : Math.round(coord * scaleFactor) // Keep radius proportional
        ),
      })),
    };
  };

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
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="image-container" style={{ maxWidth: "100%", textAlign: "center" }}>
      {scaledMap && (
        <ImageMapper
          src="/images/t.png"
          map={scaledMap}
          width={imageWidth}
          onLoad={() => setScaledMap(scaleMap(imageWidth))} // Ensure image loads before mapping
        />
      )}
    </div>
  );
};

export default Hierarchy;