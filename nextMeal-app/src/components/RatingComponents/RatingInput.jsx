import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type checking

import { RatingBubble } from '../svgs/InterfaceSvg'; 

const RatingInput = ({ onRate }) => {
  const totalBubbles = 5; // Total number of rating bubbles
  const [rating, setRating] = useState(0);
  const size = 'sm'; // Controls icon size

  const handleRate = (newRating) => {
    setRating(newRating);
    onRate(newRating);
  };

  return (
    <div className="flex flex-row space-x-1 items-center">
      {[...Array(totalBubbles)].map((_, index) => {
        const ratingValue = index + 1;
        const isFilled = ratingValue <= rating;

        return (
          <div key={index} className="cursor-pointer">
            {/* Use a custom SVG or icon for the rating bubble */}
            <div
              onClick={() => handleRate(ratingValue)}
              className={`w-8 h-8 ${isFilled ? 'text-red-500' : 'text-gray-300'}`}
            >
              {isFilled ?  <RatingBubble height={`${size === 'sm' ? '28' : '30'}`} width={`${size === 'sm' ? '28' : '30'}`} fill='red' stroke='red'/> : <RatingBubble height={`${size === 'sm' ? '28' : '65'}`} width={`${size === 'sm' ? '28' : '65'}`} fill='none' stroke='red'/> }
            </div>
          </div>
        );
      })}
    </div>
  );
};

RatingInput.propTypes = {
  initialRating: PropTypes.number,
  onRate: PropTypes.func.isRequired,
};

export default RatingInput;
