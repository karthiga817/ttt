import React, { useEffect, useRef, useState } from 'react';
import './s.css';


function ImageSlider({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [cards]);

  return (
    <div className="slider-container">
      <div className="slider">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={card.image} alt={card.title} className="slider-image" />
            <div className="description">{card.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Desc() {
  const cardData = [
    {
      title: 'Tarcin Robotics',
      image: '/images/company/tar1.webp',
      description:
        'Technical Discussion with Trainers by Tarcin Robotics,Madurai on 28.01.2025. It aims to provide insights into emerging technologies like AI, robotics, and IoT.',
    },
    {
      title: 'Full Stack Hackathon',
      image: '/images/full/hack.webp',
      description:
        'The TTT Coordinators, Full Stack In-Chargers, and Trainers organized a hackathon at our college for Full Stack trainees on 13.01.2025.',
    },
    /*{
      title: 'Haso Technology',
      image: 'images/company/haso.jpg',
      description: 'Projects Discussion via Google Meet by Haso Technology, Madurai on 05.02.2025',
    },*/
    {
      title: 'Chainsys',
      image: 'images/company/chainsys.jpeg',
      description: 'TTT Coordinator, Mr. K.R. Senthil Murugan, AP/CSE, visited Chainsys Software Pvt. Ltd. at ELCOT IT Park, Madurai, on February 19, 2025, for an intern project discussion. This visit strengthens academia-industry collaboration, fostering innovation and student opportunities.',
    },
  
  ];

  return <ImageSlider cards={cardData} />;
}


