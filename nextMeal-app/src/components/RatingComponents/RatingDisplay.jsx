import React from 'react';
import { Circle, CircleHalfFull } from './YourIconComponents'; // Import your Icon components

const RatingDisplay = ({ rating }) => {
  const totalBubbles = 5;
  const filledBubbles = Math.floor(rating);
  const halfFilled = rating % 1 !== 0;

  return (
    <div className='flex flex-row text-default/75 font-bold w-fit space-x-1 text-ssm md:text-ssm items-center'>
      <div className="flex space-x-0">
        {[...new Array(totalBubbles)].map((_, index) => {
          if (index < filledBubbles) {
            // Full circle for filled ratings
            return (
              <div key={index} className="flex ">
                <Circle fill={'red'} stroke={'red'} height={10} width={10} />
              </div>
            );
          } else if (index === filledBubbles && halfFilled) {
            // Half circle for decimal ratings
            return (
              <div key={index} className="flex ">
                <CircleHalfFull fill={'red'} height={10} width={10}/>
              </div>
            );
          } else {
            // Empty circle for remaining ratings
            return (
              <div key={index} className="flex " >
                <Circle fill={'none'} stroke={'red'} height={10} width={10}/>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default RatingDisplay;
