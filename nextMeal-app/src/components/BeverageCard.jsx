import React, { useState, useEffect, useCallback }  from 'react';
import { updateFavoritesList } from '../utilities/getData';

import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Bookmark } from '/src/components/svgs/InterfaceSvg';

import { getMyFavorites } from '../features/wishlist/wishlistSlice';

function BeverageCard({ beverage }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const wishlist = useSelector(state => state.wishlist);
    const [favorite, setFavorite] = useState(false);
    const [googleId, setGoogleId] = useState(null);
    const itemType = 'beverage';

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        setGoogleId(userData?.googleId);

        const targetBeverageId = beverage._id;
        
        const isFavorite = wishlist.some(item => item.id === targetBeverageId);
        setFavorite(isFavorite);
    }, [beverage._id]);

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
            const itemId = beverage._id;
        
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
            { beverage ? (<div className="grid grid-cols-2 gap-x-0 gap-y-2.5 mx-1.5 sm:grid-cols-3 sm:gap-8 lg:gap-5">
                <div className="flex flex-col space-y-4 h-64 w-[11rem] rounded-xl sm:rounded-2xl px-2.5 pb-3.5 pt-3 text-base sm:text-sm bg-pure_white drop-shadow-sm text-default/75 caret-transparent text-center sm:h-64 sm:w-48 md:h-72 md:w-56">
                    <div className="relative h-2/3 sm:h-36 w-full mx-auto rounded-md sm:rounded-xl overflow-hidden">
                        <div className="absolute p-1 inset-0">
                            <img src={`/assets/img/gallery/meals/beverages/${beverage.img}.webp`} alt='beverage-image' className="w-44 h-full object-scale-down" />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1 sm:h-18 w-full px-1 py-1 rounded-md sm:px-3 justify-center items-start font-medium" >
                        <div className="flex justify-between w-full items-center">
                            <div className="sm:text-base text-start md:text-xs font-bold ">{beverage.name}</div>
                            <button onClick={handleFavoriteClick} className="flex h-fit w-fit sm:size-6" >
                            <Bookmark fill={favorite ? 'red' : 'none'}  fillStroke={favorite ? 'red' : 'gray'} height="24" width="20" />
                            </button>
                        </div>
                        <div className="flex flex-col space-y-0.5 w-full px-2 h-fit text-start">
                            <div className="flex flex-row justify-between text-xs">
                                <span className="font-semibold">TZS {beverage.price}</span>
                                <span className="md:text-xs md:mt-0.5">{beverage.size}</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-fit h-fit ml-16 sm:ml-14 md:ml-28 border-b-2 border-b-default/75 flex flex-row space-x-1 md:space-x-0.5">
                        <span><NavLink to={`/beverageitem/${beverage._id}`} className="font-semibold md:font-bold text-xs sm:text-base md:text-xs active:text-bg_variant1">Read More</NavLink></span>
                        <span className="size-4 sm:size-4 md:size-3.5 md:mt-0 mt-0.5 pt-0.5">
                            <img src='assets/icon/arrow-right.svg' alt='arrow-right image'/>
                        </span>
                    </div>
                </div>
            </div>) : <p>Fetching data. Please wait..</p>
            }
        </>
    );
}

export default BeverageCard;