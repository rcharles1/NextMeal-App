import { React } from 'react';
import RestaurantCard from './RestaurantCard';

function Restaurants() {
    return (
        <div className="h-1/2 w-100 mt-10 flex flex-col space-y-3 text-center">
                <div className="mt-5 h-20 py-2 pl-4 text-2xl font-semibold text-heading">
                    <h2 className="h-12 tracking-normal">Find the best places to eat, at home or out! </h2>
                </div>
                <div className="container-snap overflow-x-auto rounded-sm h-80 w-100 pt-3 px-4 flex flex-row space-x-4">
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