import { RatingBubble, CircleHalfFull } from '../svgs/InterfaceSvg'; 
import PropTypes from 'prop-types'; 

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
                <RatingBubble fill={'red'} stroke={'red'} height={10} width={10} />
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
                <RatingBubble fill={'none'} stroke={'red'} height={10} width={10}/>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

RatingDisplay.propTypes = {
  rating: PropTypes.number,
};

export default RatingDisplay;