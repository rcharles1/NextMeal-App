import { React } from 'react';
import RestaurantCard from './RestaurantCard';

function Restaurants() {
    return (
        <div className="flex flex-col space-y-8 h-1/2 w-100 mt-10">
                <div className="flex flex-col space-y-3 text-center">
                    <span className="text-3xl font-semibold text-heading">Know Restaurants </span>
                    <span className="font-semibold px-3 leading-5 block text-base text-pretty text-default/65">Uncover and enjoy a meal at the most exquisite eatery in the city. </span>
                </div>
                <div className="container-snap overflow-x-auto rounded-sm h-80 w-100 px-6 flex flex-row space-x-4">
                    <div>
                        <RestaurantCard />
                    </div>
                    <div>
                        <RestaurantCard />
                    </div>
                    <div>
                        <RestaurantCard />
                    </div>
                </div>
        </div>
    );
}

export default Restaurants;