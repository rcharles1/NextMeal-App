import React, { useState, useEffect }  from 'react';
import { updateFavoritesList } from '../utilities/getData';

import { NavLink, useHistory } from 'react-router-dom';
import { Favorite, Rating, Bookmark } from '/src/components/svgs/InterfaceSvg';

function RestaurantCard({ restaurant }) {
    const history = useHistory();
    const [favorite, setFavorite] = useState(false);
    const [googleId, setGoogleId] = useState(null);
    const itemType = 'restaurant';

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        setGoogleId(userData?.googleId);
    }, []);

    const handleFavoriteClick = async () => {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (!userData) {
            // User is not authenticated, redirect to login page
            history.push('/login');
            return;
        }
        setFavorite(prevState => !prevState);
        const itemId = restaurant._id;
        try {
            const response = await updateFavoritesList(googleId, itemId, itemType);
            console.log(response);
        } catch (error) {
            console.error('Error updating favorites:', error);
        }
    };
    
    
    return (
        <>
            { restaurant ? (<div>
                <div key={restaurant._id} className="flex flex-col h-72 w-44 space-y-3 rounded-xl sm:rounded-2xl px-2.5 py-2.5 text-base md:text-xs bg-pure_white drop-shadow-sm text-start text-default/75 sm:h-72 sm:w-56 md:h-64 md:w-48">
                    <div className="relative h-32 sm:h-36 w-full mx-auto rounded-lg sm:rounded-xl md:rounded-lg overflow-hidden">
                        <div className="absolute inset-0"><img src={`/assets/img/gallery/restaurants/${restaurant.gallery.img1}.webp`} alt="restaurant-photo" className="w-full h-full object-cover" /></div>
                    </div>
                    <div className="flex flex-col space-y-1.5 h-18 w-full md:mt-.5 md:h-fit px-1 sm:px-3 text-start" >
                        <div className="flex jusitfy-between items-center">
                            <div className="sm:text-base md:text-xs font-bold ">{restaurant.name}</div>
                            <button onClick={handleFavoriteClick} className=" h-fit w-fit sm:size-6" >
                                <Favorite fill={favorite ? 'red' : 'silver'} height="20" width="20" />
                            </button>
                        </div>
                        <div className="flex flex-row space-x-0.5">
                            <span className="size-3 sm:size-3.5 md:size-2.5 mt-0.5"><img src='/assets/icon/location-fill.svg' alt='Location icon'/></span>
                            <span className="text-xs font-light truncate">{restaurant.details.address[0]}</span>
                        </div>
                        <span className="line-clamp-2 sm:line-clamp-3 md:line-clamp-2 text-xs md:text-xs w-36 h-fit font-medium">{restaurant.description}</span>
                    </div>
                    <div className="w-fit ml-16 md:ml-24 border-b-2 border-b-default/75 active:border-bg_variant1 justify-center flex flex-row space-x-1 md:space-x-0.5">
                        <span><NavLink to={`/restaurantprofile/${restaurant._id}`} className="font-semibold text-xs sm:text-base md:text-xs active:text-bg_variant1">Read More</NavLink></span>
                        <span className="size-4 sm:size-4 md:size-3.5 md:mt-0 mt-0.5 pt-0.5"><img src='assets/icon/arrow-right.svg' alt='arrow-right image'/></span>
                    </div>
                </div>
            </div>) :<p className="mx-auto font-bold text-sm text-default/55">Fetching data. Please wait...</p>
            }
        </>
    );
}

export default RestaurantCard;