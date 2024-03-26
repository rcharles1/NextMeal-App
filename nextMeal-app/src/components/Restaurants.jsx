import { React } from 'react';
import RestaurantCard from './RestaurantCard';

function Restaurants() {
    return (
        <div className="flex flex-col space-y-8 h-1/2 w-100 mt-10">
                <div className="flex flex-col space-y-3 text-center">
                    <span className="text-3xl font-semibold text-heading">Know Restaurants </span>
                    <span className="font-semibold px-3 leading-5 block text-base text-pretty text-default/65">Uncover and enjoy a meal at the most exquisite eatery in the city. </span>
                </div>
                <div className="flex flex-col space-y-2 rounded-sm w-full p-2">
                    <div>
                        <div className="flex flex-row justify-between mx-5 font-semibold text-default/80 text-base mx-2">
                            <span>
                                Recommended Restaurants
                            </span>
                            <span className="text-sm mt-0.5">
                                Show All
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