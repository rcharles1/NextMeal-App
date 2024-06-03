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
            { beverage ? (<>
                <div className="flex flex-col h-64 w-[11rem] rounded-xl sm:rounded-2xl px-1.5 py-1.5 md:px-2 md:py-2 text-sm bg-pure_white drop-shadow-sm text-default/75 caret-transparent text-center sm:h-64 sm:w-48 md:h-64">
                    <div className="relative h-36 md:h-44 w-full mx-auto bg-gray/35 rounded-lg sm:rounded-xl md:rounded-lg overflow-hidden">
                        <div className="absolute p-1 inset-0">
                            <img src={`/assets/img/gallery/meals/beverages/${beverage.img}.webp`} alt='beverage-image' className="w-44 h-full object-scale-down" />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1 sm:h-18 w-full px-1 py-1 rounded-md sm:px-3 justify-center items-start font-medium" >
                        <div className="flex justify-between w-full items-center">
                            <div className="">
                                <NavLink to={`/beverageitem/${beverage._id}`} className="hover:text-bg_variant1/55 text-sm text-wrap sm:text-base font-bold w-fit" >{beverage.name}</NavLink>
                            </div>
                            <button onClick={handleFavoriteClick} className="flex h-fit w-fit sm:size-6" >
                            <Bookmark fill={favorite ? 'red' : 'none'}  stroke={favorite ? 'red' : 'gray'} height="24" width="20" />
                            </button>
                        </div>
                        <div className="flex flex-col space-y-1 w-full px-2 h-fit text-start">
                            <div className="flex justify-between items-center">
                                <span className="text-xs">{beverage.size}</span>
                                <span className="font-semibold text-xs flex justify-end">TZS {beverage.price}</span>
                            </div>
                            <span className="font-semibold">{beverage.brand}</span>
                            
                        </div>
                    </div>
                </div>
            </>) : <p>Fetching data. Please wait..</p>
            }
        </>
    );
}

export default BeverageCard;