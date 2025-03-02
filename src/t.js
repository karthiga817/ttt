import { useState, useEffect } from "react";
import { FaRobot } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from "react-icons/fa";
import "./s.css";

const slides = [
  { src: "images/company/dotcom/1740725861792.jpg", description: "First frame description." },
  { src: "images/company/tarcin/tarcin1.jpg", description: "STarcin Robotics, K K Nagar, Madurai, hosted a Technical Discussion on 28.01.2025, covering AI, robotics, and IoT. Experts shared industry trends, applications, and career opportunities, with interactive Q&A sessions. Ideal for students, tech enthusiasts, and professionals seeking to upskill" },
  { src: "images/company/haso.jpg", description: "Projects Discussion via Google Meet by Haso Technology, Madurai on 05.02.2025" },
  { src: "images/company/chainsys.jpeg", description: "TTT Coordinator, Mr. K.R. Senthil Murugan, AP/CSE, visited Chainsys Software Pvt. Ltd. at ELCOT IT Park, Madurai, on February 19, 2025, for an intern project discussion. This visit strengthens academia-industry collaboration, fostering innovation and student opportunities." },
  { src: "images/company/Beauroi/IMG-20250227-WA0004.jpg", description: "The BEUROI meeting with trainers focused on discussing the intern project, covering key objectives, progress updates, and future milestones. Trainers provided valuable insights, feedback, and guidance to enhance project outcomes and ensure skill development for interns." },
  { src: "images/company/Beauroi/beauroi.jpg", description: "The BEUROI meeting with trainers focused on discussing the intern project, covering key objectives, progress updates, and future milestones. Trainers provided valuable insights, feedback, and guidance to enhance project outcomes and ensure skill development for interns." },

];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="slider-container">
      <button className="arrow left-arrow enhanced-arrow" onClick={goToPrevious}>
        <FaChevronLeft />
      </button>
      <div className="slider">
        {slides.map((slide, index) => (
          <div key={index} className={index === currentIndex ? "slide active" : "slide hidden"}>
            <img src={slide.src} alt={`Slide ${index + 1}`} />
            <div className="slide-description">{slide.description}</div>
          </div>
        ))}
      </div>
      <button className="arrow right-arrow enhanced-arrow" onClick={goToNext}>
        <FaChevronRight />
      </button>
      
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "dot active-dot" : "dot"}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
        
      </div>
      
      <div className="controls">
        <button className="play-pause enhanced-play-pause" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </div>
    
  );
}