import React, { useState, useEffect, useCallback }  from 'react';
import { updateFavoritesList } from '../utilities/getData';

import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Bookmark, Rating } from '/src/components/svgs/InterfaceSvg';
import { getMyFavorites } from '../features/wishlist/wishlistSlice';
import Loading from './Loading';

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
                <div key={restaurant._id} className="flex flex-col h-60 w-44 space-y-3 rounded-xl sm:rounded-2xl px-1.5 py-1.5 md:px-2 md:py-2 md:rounded-2xl cursor-pointer bg-pure_white drop-shadow-sm text-sm text-start text-default/75 sm:w-48 md:h-72 md:w-56">
                    <div className="relative h-36 sm:h-36 md:h-44 w-full mx-auto rounded-lg sm:rounded-xl md:rounded-lg overflow-hidden">
                        <div className="absolute inset-0"><img src={`/assets/img/gallery/restaurants/${restaurant.gallery.img1}.webp`} alt="restaurant-photo" className="w-full h-full object-cover" /></div>
                    </div>
                    <div className="flex flex-col h-18 w-full md:h-fit px-1.5 text-start" >
                        <div className="flex justify-between w-full h-fit items-center">
                            <div className="text-sm text-wrap sm:text-base font-bold w-fit">
                                <NavLink to={`/restaurantprofile/${restaurant._id}`} className="hover:text-bg_variant1/55 text-sm text-wrap sm:text-base font-bold w-fit" >{restaurant.name}</NavLink>
                            </div>
                        </div>
                        <div className="flex flex-row space-x-0.5">
                            <span className="size-3 sm:size-3.5 md:size-2.5 mt-.5 md:mt-0"><img src='/assets/icon/location-fill.svg' alt='Location icon'/></span>
                            <span className="text-xs truncate font-light">{restaurant.details.address[0]}</span>
                        </div>
                        <div className="flex h-4 justify-between items-center mt-0.5">
                            <div className="flex flex-row space-x-0.5">
                                <Rating height="10" width="10" />
                                <div className="flex">
                                    <span className="text-xs font-semibold">{restaurant.rating}</span>
                                    <span className="text-xs font-medium text-default/65">({restaurant.reviews.length} Reviews)</span>
                                </div>
                            </div>
                            <div>
                                <button onClick={handleWishlistClick} className="h-fit w-fit" >
                                    <Bookmark fill={favorite ? 'red' : 'none'}  fillStroke={favorite ? 'red' : 'gray'} height="15" width="18" />
                                </button>
                            </div>
                        </div>
                        <span className="mt-1 line-clamp-1 sm:line-clamp-2 md:line-clamp-2 text-sm sm:text-sm w-36 px-1 sm:w-48 sm:px-1.5 h-fit sm:mb-1 font-medium">{restaurant.description}</span>
                    </div>
                </div>
            </div>) : <Loading />
            }
        </>
    );
}

export default RestaurantCard;