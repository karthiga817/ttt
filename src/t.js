import React, { useEffect, useRef, useState } from 'react';
import './s.css';

function ImageCard({ images, title, description }) {
  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the card is in view
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Image slider logic (auto change every 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div ref={cardRef} className={`card ${visible ? 'fade-in' : ''}`}>
      <h2 className="title">{title}</h2>
      <div className="content">
        <div className="image-container">
          <img className="image" src={images[currentImage]} alt="Image" />
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

function Desc() {
  const cardData = [
    {
      title: 'Tarcin Robotics',
      images: ['/images/company/tar1.jpg',
              '/images/company/tarcin1.jpg',
              '/images/company/tarcin2.jpg',
        ],
      description: 'Technical Discussion with Trainers by Tarcin Robotics, K K Nagar, Madurai on 28.01.2025.It aims to provide insights into emerging technologies like AI, robotics, and IoT. Experts shared about the industry trends, practical applications, and career opportunities.Trainers engaged in Q&A sessions and this event is ideal for students, tech enthusiasts, and professionals looking to upskill.',
        
    },
    {
      title: 'Full Stack Hackathon',
      images: ['/images/full/hack.webp', ],
      description: 'The TTT Coordinators, Full Stack In-Chargers, and Trainers organized a hackathon at our college for Full Stack trainees on 13.01.2025.Participants were given a challenging problem statement to solve, encouraging innovation and problem-solving. The event provided hands-on experience, allowing trainees to enhance their coding, teamwork, and analytical skills.This event was a great success, fostering learning, collaboration, and a passion for Full Stack development.',
    },
    {
      title: 'Our Team at Tarcin Robotics',
      images: ['/images/aiml/ai1.webp', '/images/aiml/ai2.webp'],
      description: 'Our AI & Data Science team...',
    },
  ];

  return (
    <div className="Desc">
      {cardData.map((card, index) => (
        <ImageCard key={index} {...card} />
      ))}
    </div>
  );
}

export default Desc;
