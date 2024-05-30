import { React, useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';

import { fetchSampleRestaurants } from '../utilities/getData';

import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

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
        <div className="flex flex-col space-y-8 md:space-y-6 justify-center antialiased items-center h-1/2 w-100 caret-transparent">
            <div className="flex flex-col space-y-3 text-center px-3.5">
                <span className="text-3xl sm:text-5xl font-semibold text-heading">
                    Uncover Dining Delights! 
                </span>
                <span className="font-semibold leading-5 block text-base sm:text-xl text-pretty text-default/65">
                    Explore best eatery spots in the city. 
                </span>
            </div>
            <div className="flex flex-col space-y-2 rounded-sm w-full p-2 md:px-1">
               {restaurants ? (
                    <div className="bg-bg_variant2 grid grid-cols-2 gap-4 px-4 sm:grid-cols-3 sm:gap-8 sm:px-6 md:grid-cols-4 md:-mx-2 lg:gap-2 mx-auto overflow-hidden py-2 w-full">
                        {restaurants.slice(0, 4).map((restaurant, i) => <RestaurantCard key={i} restaurant={restaurant} />)}
                    </div>
               ): <Loading/> }
                <div className="flex justify-end mr-5 md:mr-3 md:text-sm text-xs sm:text-sm mt-0.5 sm:justify-end font-semibold text-default/80 hover:text-bg_variant1">
                   <button onClick={handleClick} className="underline underline-offset-2">Browse All</button>
                </div>
            </div>
        </div>
    );
}

export default Restaurants;