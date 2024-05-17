import { React, useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';

import { fetchSampleRestaurants } from '../utilities/getData';

import { useNavigate } from 'react-router-dom';

function Restaurants() {
    const navigate = useNavigate();
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const data = await fetchSampleRestaurants();
                setRestaurants(data);
            } catch (error) {
                console.error('Error fetching restaurants:', error);
            }
        };
        fetchRestaurants();
    }, [])

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
                    Explore best eatery spots in the city. 
                </span>
            </div>
            <div className="flex flex-col space-y-2 rounded-sm w-full p-2">
               {restaurants ? (
                    <div className="bg-bg_variant2 grid grid-cols-2 gap-y-4 gap-x-2 px-2 mx-2 sm:grid-cols-3 sm:px-6 md:px-24 sm:gap-4 md:grid-cols-4 md:gap-0 overflow-hidden py-2 mx-auto w-full">
                        {restaurants.slice(0, 4).map((restaurant, i) => <RestaurantCard key={i} restaurant={restaurant} />)}
                    </div>
               ): <p className="mx-auto font-bold text-sm text-default/55">Fetching data. Please wait...</p>}
                <div className="flex text-xs sm:text-sm mt-0.5 sm:justify-end font-semibold text-default/80 hover:text-bg_variant1">
                   <button onClick={handleClick} className="underline underline-offset-2">View More</button>
                </div>
            </div>
        </div>
    );
}

export default Restaurants;