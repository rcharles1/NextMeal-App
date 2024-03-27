import React, { useState, useEffect } from 'react';

const slides = [
    {
        image: '/assets/img/data/drinks/mango.webp', text :'Mango Juice'
    },
    {
        image: '/assets/img/data/drinks/avocado.webp', text :'Avocado Juice'
    },
    {
        image: '/assets/img/data/seafood.jpeg', text :'Seafood'
    },
    {
        image: '/assets/img/data/biryani.jpg', text :'Seafood'
    },
    {
        image: '/assets/img/data/chicken-biryani.jpg', text :'Seafood'
    },
    
];

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
    }, 3000); 

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="flex space-x-4 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`transition-all duration-500 ease-in-out w-full transform ${index === activeIndex ? 'scale-100 ' : 'scale-75'}`}
        >
          <img src={slide.image} alt="slide image" className="w-48 rounded-xl h-36 object-cover" />
        </div>
      ))}
    </div>
  );
}

export default Slideshow;
