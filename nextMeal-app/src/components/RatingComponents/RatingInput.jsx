import React, { useState } from 'react';
import { Circle, CircleHalfFull } from '../svgs/InterfaceSvg';

const RatingInput = ({ initialRating, onRate }) => {
  const totalBubbles = 5;
  const [rating, setRating] = useState(initialRating || 0);

  const handleRate = (newRating) => {
    setRating(newRating);
    onRate(newRating);
  };

  return (
    <div className='flex flex-row text-default/75 font-bold w-fit space-x-1 text-ssm md:text-ssm items-center'>
      <div className="flex space-x-0">
        {[...new Array(totalBubbles)].map((_, index) => {
          const ratingValue = index + 1;
          if (index < rating) {
            // Full circle for filled ratings
            return (
              <div key={index} className="flex ">
                <Circle fill={'red'} stroke={'red'} height={39} width={30} onClick={() => handleRate(ratingValue)} />
              </div>
            );
          } else {
            // Empty circle for remaining ratings
            return (
              <div key={index} className="flex " >
                <Circle fill={'none'} stroke={'red'} height={30} width={30} onClick={() => handleRate(ratingValue)} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default RatingInput;