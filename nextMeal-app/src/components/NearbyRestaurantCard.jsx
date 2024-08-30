import React, { useState, useEffect, useCallback }   from 'react';

import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Bookmark, RatingBubble, CircleHalfFull } from '/src/components/svgs/InterfaceSvg';
import { getMyFavorites } from '../features/wishlist/wishlistSlice';

function NearbyRestaurantCard({ nearbyRestaurant }) {
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

        const targetRestaurantId = nearbyRestaurant._id;
        
        const isFavorite = wishlist.some(item => item.id === targetRestaurantId);
        setFavorite(isFavorite);
    }, [nearbyRestaurant._id]);

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
    
    const restaurantName = nearbyRestaurant.name.replace(/\s+/g, '').toLowerCase();

    // Rating implementation
    const totalBubbles = 5;

    let rating = nearbyRestaurant ? nearbyRestaurant.rating : 0;
    let filledBubbles = Math.floor(rating);
    let halfFilled = rating % 1 !== 0;

    return (
        <>
            {nearbyRestaurant ? 
                <div className="bg-pure_white flex flex-col sm:flex-row sm:space-x-0 h-fit pb-4 sm:h-fit sm:pb-0 sm:w-full md: rounded-md md:rounded-lg overflow-hidden">
                    <div className="relative h-56 sm:h-32 sm:w-5/12 md:h-32 w-full mx-auto sm:rounded-lg md:rounded-xl overflow-hidden">
                        <div className="absolute inset-0"><img src={`/assets/img/gallery/restaurants/${restaurantName}/${nearbyRestaurant.gallery?.[0]}.webp`} alt="restaurant-photo" className="w-full h-full object-cover md:object-fill" /></div>
                    </div>
                    <div className="sm:w-6/12">
                        <div className="flex justify-between w-full p-3 sm:p-1 h-fit items-center">
                            <div className="text-lg sm:text-base md:text-sm text-wrap font-bold w-fit">
                                <NavLink to={`/restaurantprofile/${nearbyRestaurant._id}`} className="hover:text-bg_variant1/55" >{nearbyRestaurant.name}</NavLink>
                            </div>
                        </div>
                        <div className="flex h-fit mx-3 sm:mx-1 -mt-2 sm:mt-0 w-fit justify-between items-center">
                            <div className='flex flex-row text-default/75 font-semibold w-fit space-x-1 text-base md:text-ssm items-center'>
                                <div className="flex -space-x-0.5 sm:space-x-0">
                                    {[...new Array(totalBubbles)].map((_, index) => {
                                        if (index < filledBubbles) {
                                            // Full circle for filled ratings
                                            return (
                                                <div  key={index} className="flex ">
                                                    <RatingBubble fill={'red'} stroke={'red'} height={15} width={15} />
                                                </div>
                                            );
                                        } else if (index === filledBubbles && halfFilled) {
                                            // Half circle for decimal ratings
                                            return (
                                                <div key={index} className="flex ">
                                                    <CircleHalfFull fill={'red'} height={15} width={15}/>
                                                </div>
                                            );
                                        } else {
                                            // Empty circle for remaining ratings
                                            return (
                                                <div key={index} className="flex " >
                                                    <RatingBubble  fill={'none'} stroke={'red'} height={15} width={15}/>
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                                <div className="flex items-center space-x-0.5 sm:text-ssm font-semibold">
                                    <span className="">{`${nearbyRestaurant.reviews?.length} reviews`}</span>
                                </div>
                            </div>
                            <div className="sm:hidden">
                                <button onClick={handleWishlistClick} className="h-fit w-fit" >
                                    <Bookmark fill={favorite ? 'red' : 'none'}  stroke={favorite ? 'red' : 'gray'} height="20" width="24" />
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-row -mt-1 sm:mt-0 w-fit space-x-0.5 mx-3 sm:mx-1 py-1">
                            <span className="size-3 sm:size-3.5 md:size-2.5 mt-.5 md:mt-1"><img src='/assets/icon/location-fill.svg' alt='Location icon'/></span>
                            <span className="text-sm truncate sm:w-32 text-left md:mt-0.5 md:text-ssm font-semibold">{nearbyRestaurant.details.address[0]}</span>
                        </div>
                        <div className="flex flex-wrap text-sm sm:text-xs font-medium md:-mt-1 indent-3 p-1 h-fit w-11/12">
                            {nearbyRestaurant.cuisine.map((item, index, array) => {
                                return (
                                <span key={index} className="flex">
                                    {item}
                                    {index !== array.length - 1 ? <p className="-mx-2">|</p> : <p> </p>}
                                </span>
                                );
                            })}
                        </div>
                    </div>
                </div> 
            : '...'}
        </>
    );
}


export default NearbyRestaurantCard;