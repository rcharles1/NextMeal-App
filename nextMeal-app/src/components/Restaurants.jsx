import { React } from 'react';
import RestaurantCard from './RestaurantCard';

import { useNavigate } from 'react-router-dom';

function Restaurants() {
    const navigate = useNavigate();

    const handleClick = event => {
        navigate('/restaurantsList');
    }
    
    return (
        <div className="flex flex-col space-y-8 justify-center antialiased items-center h-1/2 w-100 caret-transparent">
            <div className="flex flex-col space-y-3 text-center px-3.5">
                <span className="text-3xl sm:text-5xl font-semibold text-heading">
                    Uncover Dining Delights! 
                </span>
                <span className="font-semibold leading-5 block text-base sm:text-xl text-pretty text-default/65">
                    Explore and enjoy a meal at the most exquisite eatery in the city. 
                </span>
            </div>
            <div className="flex flex-col space-y-2 rounded-sm w-full p-2">
                <div className="bg-bg_variant2 justify-center overflow-hidden py-2 pr-0.5 pl-0.5 w-full">
                    <RestaurantCard />
                </div>
                <div className="flex ml-72 text-xs sm:text-sm mt-0.5 sm:w-11/12 sm:justify-end font-semibold text-default/80 hover:text-bg_variant1">
                   <button onClick={handleClick} className="underline underline-offset-2">Show All</button>
                </div>
            </div>
        </div>
    );
}

export default Restaurants;