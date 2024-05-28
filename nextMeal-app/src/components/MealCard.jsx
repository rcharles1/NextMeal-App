import React, { useState, useEffect, useCallback } from 'react';
import { updateFavoritesList } from '../utilities/getData';

import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Rating, Bookmark } from '/src/components/svgs/InterfaceSvg';
import { getMyFavorites } from '../features/wishlist/wishlistSlice';

function MealCard({ meal }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.wishlist);
    const [favorite, setFavorite] = useState(false);
    const [googleId, setGoogleId] = useState(null);
    const itemType = 'meal';

    useEffect(() => {
        dispatch(getMyFavorites());
    }, [dispatch]);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        setGoogleId(userData?.googleId);

        const targetMealId = meal._id;
        
        const isFavorite = wishlist.some(item => item.id === targetMealId);
        setFavorite(isFavorite);
    }, [meal._id]);

    const handleFavoriteClick = useCallback(
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
            const itemId = meal._id;
        
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
            {meal ? (
                <div className="flex flex-col space-y-2 h-64 w-[11rem] rounded-xl sm:rounded-2xl caret-transparent px-2.5 pb-3.5 pt-3 text-base md:text-sm bg-pure_white drop-shadow-sm text-start text-default/75 sm:h-64 sm:w-48 md:h-72 md:w-56">
                    <div className="relative h-32 sm:h-36 w-full mx-auto rounded-md sm:rounded-xl overflow-hidden">
                        <div className="absolute inset-0 ">
                            <img src={`/assets/img/gallery/meals/food/${meal.img}.webp`} alt='meal-image' className="w-44 h-full object-scale-down"/>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1 h-fit sm:h-18 w-full px-1 sm:px-3 justify-center items-start" >
                        <div className="sm:text-base md:text-sm text-start text-wrap font-bold">{meal.name}</div>
                        <div className="flex flex-row justify-between w-full text-xs items-start">
                            <div className="flex items-center space-x-1.5">
                                <Rating height="18" width="18" />    
                                <span className="font-base">{meal.rating}</span>
                            </div>
                            <div className="flex">
                                <button onClick={handleFavoriteClick} className="flex h-fit w-fit sm:size-6" >
                                    <Bookmark fill={favorite ? 'red' : 'none'}  fillStroke={favorite ? 'red' : 'gray'} height="20" width="20" />
                                </button>
                            </div>
                        </div>
                        <span className="w-36 sm:w-fit h-fit text-xs md:text-xs md:w-40 font-medium line-clamp-2">{meal.description}</span>
                    </div>
                    <div className="w-fit h-fit ml-16 sm:ml-20 md:ml-28 border-b-2 border-b-default/75 justify-center flex flex-row space-x-1 md:space-x-0.5">
                        <span><NavLink to={`/mealitem/${meal._id}`} className="font-semibold md:font-bold text-xs active:text-bg_variant1">Read More</NavLink></span>
                        <span className="size-4 sm:size-4 md:size-4 mt-0.5 pt-0.5">
                            <img src='assets/icon/arrow-right.svg' alt='arrow-right image'/>
                        </span>
                    </div>
                </div>
            ) : <p>Cooking...</p>
            }
        </>
    );
}

export default MealCard;