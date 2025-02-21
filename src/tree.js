import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import "./style.css"; // Ensure you import the CSS file

const hierarchyData = {
  name: "HOD",
  image: "/abc/image.png",
  children: [
    {
      name: "Coordinator 1",
      image: "/abc/image.png",
      children: [
        {
          name: "Gen AI",
          image: "/abc/image.png",
          children: [
            {
              name: "Faculty Incharge",
              image: "/abc/image.png",
              children: [
                {
                  name: "Team Leader",
                  image: "/abc/image.png",
                  children: [
                    {
                      name: "Trainers",
                      image: "/abc/image.png",
                      children: [
                        { name: "Trainees", image: "/abc/image.png" }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Company representative",
      image: "/abc/image.png",
      children: [
        {
          name: "AI/ML",
          image: "/abc/image.png",
          children: [
            {
              name: "Faculty Incharge",
              image: "/abc/image.png",
              children: [
                {
                  name: "Team Leader",
                  image: "/abc/image.png",
                  children: [
                    {
                      name: "Trainers",
                      image: "/abc/image.png",
                      children: [
                        { name: "Trainees", image: "/abc/image.png" }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Company Representative 1",
      image: "/abc/image.png",
      children: [
        {
          name: "Fullstack",
          image: "/abc/image.png",
          children: [
            {
              name: "Faculty Incharge",
              image: "/abc/image.png",
              children: [
                {
                  name: "Team Leader",
                  image: "/abc/image.png",
                  children: [
                    {
                      name: "Trainers",
                      image: "/abc/image.png",
                      children: [
                        { name: "Trainees", image: "/abc/image.png" }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Coordinator 2",
      image: "/abc/image.png",
      children: [
        {
          name: "AR/VR",
          image: "/abc/image.png",
          children: [
            {
              name: "Faculty Incharge",
              image: "/abc/image.png",
              children: [
                {
                  name: "Team Leader",
                  image: "/abc/image.png",
                  children: [
                    {
                      name: "Trainers",
                      image: "/abc/image.png",
                      children: [
                        { name: "Trainees", image: "/abc/image.png" }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

// Hierarchy Card Component
const HierarchyCard = ({ name, image }) => (
  <div className="tree-node">
    <Card className="node">
      <CardContent>
        {image ? (
          <img src={image} alt={name} className="profile-image" />
        ) : (
          <PersonIcon fontSize="large" />
        )}
        <Typography className="node-name">{name}</Typography>
      </CardContent>
    </Card>
  </div>
);

// Recursive function to render the hierarchy tree
const renderHierarchy = (node) => {
  if (!node) return null;
  return (
    <div className="tree-node">
      <HierarchyCard name={node.name} image={node.image} />
      {node.children?.length > 0 && (
        <div className="children">
          {node.children.map((child, index) => (
            <div className="tree-node" key={index}>
              {renderHierarchy(child)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Main Hierarchy Tree Component
const HierarchyTree = () => {
  return <div className="tree-container">{renderHierarchy(hierarchyData)}</div>;
};

export default HierarchyTree;
