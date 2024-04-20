import React, { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';

function RestaurantCard() {
    const [restaurants, setRestaurants] = useState(null);
    
    useEffect(() => {
        const fetchRestaurantDetails = async () => {
            try {
                const response = await fetch('http://localhost:3000/restaurants');
                const data = await response.json();
                setRestaurants(data);
            } catch (error) {
                console.error('Error fetching restaurant details:', error);
            }
        };

        fetchRestaurantDetails();
    }, [ ])

    return (
        <>
            { restaurants ? (<div className="grid grid-cols-2 gap-2 flex flex-row space-x-0 sm:grid-cols-3 sm:gap-8 lg:gap-5">{restaurants.map(restaurant => {
                return (
                    <div key={restaurant._id} className="flex flex-col space-y-4 h-72 w-48 rounded-xl sm:rounded-2xl px-2.5 py-2.5 text-sm bg-pure_white drop-shadow text-center sm:h-72 sm:w-56">
                        <div className="relative h-32 sm:h-36 w-full mx-auto rounded-lg sm:rounded-xl overflow-hidden">
                            <div className="absolute inset-0"><img src={`/assets/img/gallery/restaurants/${restaurant.gallery.img1}.webp`} alt="restaurant-photo" /></div>
                            <div className="absolute top-0 sm:top-2 right-0 sm:right-5 size-6" ><img src='/assets/icon/favorite.svg' /></div>
                        </div>
                        <div className="flex flex-col space-y-1.5 h-18 w-full px-1 sm:px-3" >
                            <div className="sm:text-base font-semibold">{restaurant.name}</div>

                            <div className="flex flex-row mx-auto space-x-0.5">
                                <span className="size-3 sm:size-3.5 mt-0.5"><img src='/assets/icon/location-fill.svg' alt='Location icon'/></span>
                                <span className="text-xs font-extralight">{restaurant.details.address[0]}</span>
                            </div>
                            <span className="line-clamp-2 sm:line-clamp-3 text-xs w-32 h-8 mx-auto font-base">Enjoy the best Biryani, Iftar. Open 8Am-pm</span>
                        </div>
                        <div className="w-fit ml-12 border-b-2 active:border-bg_variant1 justify-center flex flex-row space-x-1">
                            <span><NavLink to={`/restaurantprofile/${restaurant._id}`} className="font-semibold text-xs sm:text-base active:text-bg_variant1">Learn More</NavLink></span>
                            <span className="size-3.5 sm:size-4 mt-0.5 pt-0.5"><img src='assets/icon/arrow-right.svg' alt='arrow-right image'/></span>
                        </div>
                    </div>
                )
                })}</div>) : <p>loading....</p>
            }
        </>
    );
}

export default RestaurantCard;