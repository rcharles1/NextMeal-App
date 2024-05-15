import React, { useState, useEffect } from 'react';
import { slides } from '../utilities/links';

function Slideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 5000); 

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="flex space-x-1 p-1 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`transition-all duration-500 ease-in-out transform ${index === activeIndex ? 'scale-100' : 'scale-75'}`}
        >
          <img src={`/assets/img/gallery/meals/covers/${slide.image}-cover.webp`} alt="slide-image" className={`w-64 rounded-xl h-28 object-cover ${index === activeIndex ? 'w-80' : ''}`} />
        </div>
      ))}
    </div>
  );
}

export default Slideshow;
