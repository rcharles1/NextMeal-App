import React from 'react';

import { NavLink } from 'react-router-dom';

function RestaurantCard({ restaurant }) {
    return (
        <>
            { restaurant ? (<div>
                <div key={restaurant._id} className="flex flex-col  md h-72 w-44 rounded-xl sm:rounded-2xl px-2.5 py-2.5 text-base md:text-xs bg-pure_white drop-shadow-sm text-start text-default/75 sm:h-72 sm:w-56 md:h-64 md:w-48">
                    <div className="relative h-32 sm:h-36 w-full mx-auto rounded-lg sm:rounded-xl md:rounded-lg overflow-hidden">
                        <div className="absolute inset-0">
                            <img src={`/assets/img/gallery/restaurants/${restaurant.gallery.img1}.webp`} alt="restaurant-photo" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute top-0 sm:top-2 right-0 sm:right-5 size-6" >
                            <img src='/assets/icon/favorite.svg' />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1.5 h-18 w-full md:mt-.5 md:h-fit px-1 sm:px-3 text-start" >
                        <div className="sm:text-base md:text-xs font-bold ">{restaurant.name}</div>

                        <div className="flex flex-row space-x-0.5">
                            <span className="size-3 sm:size-3.5 md:size-2.5 mt-0.5"><img src='/assets/icon/location-fill.svg' alt='Location icon'/></span>
                            <span className="text-xs font-light truncate">{restaurant.details.address[0]}</span>
                        </div>
                        <span className="line-clamp-2 sm:line-clamp-3 md:line-clamp-2 text-sm md:text-xs w-36 h-fit font-medium">{restaurant.description}</span>
                    </div>
                    <div className="w-fit ml-12 md:ml-20 border-b-2 active:border-bg_variant1 justify-center flex flex-row space-x-1 md:space-x-0.5">
                        <span><NavLink to={`/restaurantprofile/${restaurant._id}`} className="font-semibold text-sm sm:text-base md:text-xs active:text-bg_variant1">Learn More</NavLink></span>
                        <span className="size-3.5 sm:size-4 md:size-3.5 md:mt-0 mt-0.5 pt-0.5"><img src='assets/icon/arrow-right.svg' alt='arrow-right image'/></span>
                    </div>
                </div>
            </div>) :<p className="mx-auto font-bold text-sm text-default/55">Fetching data. Please wait...</p>
            }
        </>
    );
}

export default RestaurantCard;