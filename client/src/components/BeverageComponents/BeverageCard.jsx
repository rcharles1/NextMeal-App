import React, { useState, useEffect, useCallback }  from 'react';
import { updateFavoritesList } from '../../utilities/getData';

import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Bookmark } from '/src/components/svgs/InterfaceSvg';

function BeverageCard({ beverage }) {
    const navigate = useNavigate();
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
                <div className="flex flex-col h-64 w-[11rem] rounded-xl sm:rounded-2xl px-1.5 py-1.5 md:px-2 md:py-2 text-sm bg-pure_white drop-shadow-sm text-default/75 caret-transparent text-center ssm:h-64 ssm:w-56 lg:h-72 lg:w-64 ">
                    <div className="relative h-36 ssm:h-44 w-full mx-auto bg-gray/35 rounded-lg ssm:rounded-xl lg:h-56 overflow-hidden">
                        <div className="absolute p-1 inset-0">
                            <img src={`/assets/img/gallery/meals/beverages/${beverage.gallery?.[0]}.webp`} alt='beverage-image' className="w-44 ssm:w-full h-full object-scale-down hover:scale-110 transition-transform duration-200 ease-in-out" />
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1 sm:h-18 w-full px-1 py-1 rounded-md sm:px-3 justify-center items-start font-medium" >
                        <div className="flex justify-between w-full items-center">
                            <div className="">
                                <NavLink to={`/beveragelistings/${beverage._id}`} className="hover:text-bg_variant1/55 text-sm text-wrap ssm:text-base font-bold w-fit" >{beverage.name}</NavLink>
                            </div>
                        </div>
                        <div>
                            <button onClick={handleFavoriteClick} className="flex h-fit w-fit sm:size-6" >
                                <Bookmark fill={favorite ? 'red' : 'none'}  stroke={favorite ? 'red' : 'gray'} height="24" width="20" />
                            </button>
                            </div>
                        <div className="flex justify-between w-full  h-fit text-start">
                            <div className="flex space-x-1.5 font-semibold">
                                <span className='flex space-x-0.5 text-sm'><p>TZS</p><p>{beverage.price}</p></span>
                                <p className='font-medium'>{beverage.size}</p>
                            </div>
                            <div>
                                <p className='truncate max-w-20'>{beverage.volume}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>) : <p>Fetching data. Please wait..</p>
            }
        </>
    );
}

export default BeverageCard;