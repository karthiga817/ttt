import React from "react";
import "./s.css";
const hierarchyData = {
  name: "HOD",
  image: "/images/hod.png",
  children: [
    {
      name: "Coordinator 1",
      image: "/images/coordinator1.png",
      children: []
    },
    {
      name: "Coordinator 2",
      image: "/images/coordinator2.png",
      children: []
    }
  ]
};

const coordinator1Children = [
  {
    name: "AI/ML Incharge",
    image: "/images/aiml.png",
    children: [
      {
        name: "Trainer 1 (AI/ML)",
        image: "/images/trainer1.png",
        children: [
          { name: "Trainee 1", image: "/images/trainee1.png" },
          { name: "Trainee 2", image: "/images/trainee2.png" }
        ]
      }
    ]
  },
  {
    name: "AR/VR Incharge",
    image: "/images/arvr.png",
    children: [
      {
        name: "Trainer 1 (AR/VR)",
        image: "/images/trainer2.png",
        children: [
          { name: "Trainee 1", image: "/images/trainee3.png" },
          { name: "Trainee 2", image: "/images/trainee4.png" }
        ]
      }
    ]
  }
];

const coordinator2Children = [
  {
    name: "Mobile App Incharge",
    image: "/images/mobile.png",
    children: [
      {
        name: "Trainer 1 (Mobile App)",
        image: "/images/trainer3.png",
        children: [
          { name: "Trainee 1", image: "/images/trainee5.png" },
          { name: "Trainee 2", image: "/images/trainee6.png" }
        ]
      }
    ]
  },
  {
    name: "Full Stack Incharge",
    image: "/images/fullstack.jpeg",
    children: [
      {
        name: "Trainer 1 (Full Stack)",
        image: "/images/trainer4.png",
        children: [
          { name: "Trainee 1", image: "/images/trainee7.png" },
          { name: "Trainee 2", image: "/images/trainee8.png" }
        ]
      }
    ]
  }
];

hierarchyData.children[0].children = coordinator1Children;
hierarchyData.children[1].children = coordinator2Children;

const TreeNode = ({ node }) => {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <div style={{ display: "inline-block", padding: "10px", border: "1px solid #ccc", borderRadius: "10px", backgroundColor: "#f9f9f9" }}>
        <img src={node.image} alt={node.name} style={{ width: "100px", height: "100px", borderRadius: "50%" }} onError={(e) => e.target.src = "/images/default.png"} />
        <div style={{ marginTop: "10px", fontWeight: "bold" }}>{node.name}</div>
      </div>
      {node.children && node.children.length > 0 && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const HierarchyTree = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <TreeNode node={hierarchyData} />
    </div>
  );
};

export default HierarchyTree;
