import React from 'react';
import { NavLink } from 'react-router-dom';

function SearchResultCardForRestaurant({ restaurant }) {
    return (
        <>
            {restaurant ? (
                <div className="flex items-center mb-2 space-x-4 text-sm md:text-ssm font-semibold">
                    <div className="size-16 md:size-12 rounded-lg overflow-hidden items-center">
                        <img src={`/assets/img/gallery/restaurants/${restaurant?.gallery?.img1}.webp`} alt="restaurant-photo" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                        <NavLink to={`/restaurantprofile/${restaurant._id}`} className="font-bold focus:text-bg_variant1">{restaurant.name}</NavLink>
                        <p className="text-xs">{restaurant.locationData?.district}, {restaurant.locationData?.region}, {restaurant.locationData?.country}</p>
                    </div>
                </div>
            ) : ''}
        </>
    );
}

export default SearchResultCardForRestaurant;