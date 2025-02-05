import React from "react";
import "./style.css";

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
    children:
    [
      {
        name: "Team lead (AI/ML)",
        image: "/images/trainer1.png",
        children:
        [
          { name: "Trainer 1", image: "/images/trainee1.png" },
          { name: "Trainer 2", image: "/images/trainee2.png" }
          
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
    <div className="tree-node">
      <div className="node">
        <img src={node.image} alt={node.name} className="profile-image" />
        <span className="node-name">{node.name}</span>
      </div>
      {node.children && node.children.length > 0 && (
        <div className="children">
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
    <div className="tree-container">
      <div className="hierarchy-wrapper">
        <TreeNode node={hierarchyData} />
      </div>
    </div>
  );
};

export default HierarchyTree;
