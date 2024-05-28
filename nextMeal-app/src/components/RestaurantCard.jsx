import React, { useState, useEffect, useCallback }  from 'react';
import { updateFavoritesList } from '../utilities/getData';

import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Bookmark } from '/src/components/svgs/InterfaceSvg';
import { getMyFavorites } from '../features/wishlist/wishlistSlice';

function RestaurantCard({ restaurant }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.wishlist);
    const [favorite, setFavorite] = useState(false);
    const [googleId, setGoogleId] = useState(null);
    const itemType = 'restaurant';
    
    useEffect(() => {
        dispatch(getMyFavorites());
    }, [dispatch]);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        setGoogleId(userData?.googleId);

        const targetRestaurantId = restaurant._id;
        
        const isFavorite = wishlist.some(item => item.id === targetRestaurantId);
        setFavorite(isFavorite);
    }, [restaurant._id]);

    const handleWishlistClick = useCallback(
        async () => {
            const userData = JSON.parse(localStorage.getItem('user'));
            if (!userData) {
                // Redirect to sign-in page if user is not logged in
                navigate('/signin');
                return;
            }
        
            // Toggle the favorite status
            setFavorite(prevState => !prevState);
        
            // Update database with latest changes
            const itemId = restaurant._id;
        
            try {
                const response = await updateFavoritesList(googleId, itemId, itemType);
                console.log('Favorites updated successfully:', response);
        
                // Update local storage
                const updatedWishlist = JSON.parse(localStorage.getItem('wishlist')) || {};
        
                if (favorite) {
                    //Remove from favorites
                    delete updatedWishlist[itemId];
                } else {
                    // Add to favorites
                    updatedWishlist[itemId] = true;
                }
        
                localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            } catch (error) {
                console.error('Error updating wishlist:', error);
            }
        },[favorite]
    );    
    
    return (
        <>
            { restaurant ? (<div>
                <div key={restaurant._id} className="flex flex-col h-72 w-44 space-y-3 rounded-xl sm:rounded-2xl px-2.5 py-2.5 text-base md:text-xs bg-pure_white drop-shadow-sm text-start text-default/75 sm:h- sm:w-48 md:h-72 md:w-56">
                    <div className="relative h-32 sm:h-36 w-full mx-auto rounded-lg sm:rounded-xl md:rounded-lg overflow-hidden">
                        <div className="absolute inset-0"><img src={`/assets/img/gallery/restaurants/${restaurant.gallery.img1}.webp`} alt="restaurant-photo" className="w-full h-full object-cover" /></div>
                    </div>
                    <div className="flex flex-col space-y-1.5 h-18 w-full md:mt-.5 md:h-fit px-1 sm:px-3 text-start" >
                        <div className="flex justify-between w-full items-center">
                            <div className="sm:text-base md:text-xs font-bold w-fit">{restaurant.name}</div>
                            <div>
                                <button onClick={handleWishlistClick} className=" h-fit w-fit sm:size-6" >
                                    <Bookmark fill={favorite ? 'red' : 'none'}  fillStroke={favorite ? 'red' : 'gray'} height="24" width="20" />
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-row space-x-0.5">
                            <span className="size-3 sm:size-3.5 md:size-2.5 mt-0.5"><img src='/assets/icon/location-fill.svg' alt='Location icon'/></span>
                            <span className="text-xs font-light md:font-extralight truncate">{restaurant.details.address[0]}</span>
                        </div>
                        <span className="line-clamp-2 sm:line-clamp-1 sm:w-fit md:line-clamp-2 text-xs w-36 h-fit font-">{restaurant.description}</span>
                    </div>
                    <div className="w-fit ml-16 sm:ml-20 md:ml-28 border-b-2 border-b-default/75 active:border-bg_variant1 justify-center flex flex-row space-x-1 md:space-x-0.5">
                        <span><NavLink to={`/restaurantprofile/${restaurant._id}`} className="font-semibold text-xs active:text-bg_variant1">Read More</NavLink></span>
                        <span className="size-4 sm:size-4 md:size-3.5 md:mt-0 mt-0.5 pt-0.5"><img src='assets/icon/arrow-right.svg' alt='arrow-right image'/></span>
                    </div>
                </div>
            </div>) :<p className="mx-auto font-bold text-sm text-default/55">Fetching data. Please wait...</p>
            }
        </>
    );
}

export default RestaurantCard;