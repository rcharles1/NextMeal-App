import { React } from 'react';
import RestaurantCard from './RestaurantCard';

import { useNavigate } from 'react-router-dom';

function Restaurants() {
    const navigate = useNavigate();

    const handleClick = event => {
        navigate('/restaurantsList');
    }
    return (
        <div className="flex flex-col space-y-8 justify-center items-center h-1/2 w-100 caret-transparent">
                <div className="flex flex-col space-y-3 text-center px-3.5">
                    <span className="text-3xl font-semibold text-heading">
                        Uncover Dining Delights! 
                    </span>
                    <span className="font-semibold leading-5 block text-base text-pretty text-default/65">
                        Explore and enjoy a meal at the most exquisite eatery in the city. 
                    </span>
                </div>
                <div className="flex flex-col space-y-2 rounded-sm w-full p-2">
                    <div>
                        <div className="flex flex-row space-x-20 ml-7 font-semibold text-default/80  mx-2">
                            <span className="text-sm">
                                Recommended Restaurants
                            </span>
                            <span className="text-xs mt-0.5">
                                <button onClick={handleClick} className="underline underline-offset-2">Show All</button>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-5 justify-center py-2 mx-auto w-full ">
                        <RestaurantCard />
                        <RestaurantCard />
                    </div>
                </div>
        </div>
    );
}

export default Restaurants;