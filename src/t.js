import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowCircleLeft, FaArrowCircleRight, FaRobot } from "react-icons/fa";
import "./s.css";

const slides = [
  
  {
    image: "images/20250128_140850_(3).jpg",
    description: "Tarcin Robotics, K K Nagar, Madurai, hosted a Technical Discussion on 28.01.2025, covering AI, robotics, and IoT. Experts shared industry trends, applications, and career opportunities, with interactive Q&A sessions. Ideal for students, tech enthusiasts, and professionals seeking to upskill.",
  },
  {
    image: "images/company/chainsys.jpeg",
    description: "TTT Coordinator, Mr. K.R. Senthil Murugan, AP/CSE, visited Chainsys Software Pvt. Ltd. at ELCOT IT Park, Madurai, on February 19, 2025, for an intern project discussion. This visit strengthens academia-industry collaboration, fostering innovation and student opportunities.",
  },
  {
    image: "ima",
    description: "Projects Discussion via Google Meet by Haso Technology, Madurai on 05.02.2025",
  },
  {
    image: "image4.jpg",
    description: "Description for image 4",
  },
];

const Slider = () => {
  const [chatbotVisible, setChatbotVisible] = useState(false);

  return (
    <div className="slider-container">
      <div className="swiper-card">
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          loop
          className="custom-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="slide-card">
                <img src={slide.image} alt={`Slide ${index + 1}`} className="slider-image" />
                <div className="slide-description">{slide.description}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Arrows Below Slider */}
      <div className="slider-navigation">
        <button className="swiper-button-prev">
          <FaArrowCircleLeft />
        </button>
        <button className="swiper-button-next">
          <FaArrowCircleRight />
        </button>
      </div>
      
      {/* Chatbot Icon - Fixed at Bottom Left */}
      <div className="chatbot-icon" onClick={() => setChatbotVisible(!chatbotVisible)}>
        <FaRobot size={40} color="white" />
      </div>

      {/* Chatbot Window - Fixed at Bottom Left */}
      {chatbotVisible && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span className="chatbot-title">Astra</span>
            <button className="chatbot-close" onClick={() => setChatbotVisible(false)}>
              ×
            </button>
          </div>
          <div className="chatbot-messages">
            <div className="chatbot-message">Hey aspirant, welcome to VECT!</div>
            <div className="chatbot-message">You're talking to Astra, your virtual assistant.</div>
            <div className="chatbot-message">Before we start, please help me with your Email Address!</div>
          </div>
          <input type="text" className="chatbot-input" placeholder="Type your message here..." />
        </div>
      )}
    </div>
  );
};

export default Slider;
