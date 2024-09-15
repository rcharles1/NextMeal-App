import { useState, useEffect, useCallback }  from 'react';
import PropTypes from 'prop-types';
import { updateFavoritesList } from '../../utilities/getData';

import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Bookmark, RatingBubble, CircleHalfFull } from '/src/components/svgs/InterfaceSvg';
import { getMyFavorites } from '../../features/wishlist/wishlistSlice';
import Loading from '../ComplementaryComponents/Loading';
import { LocationIcon } from '../svgs/InterfaceSvg';

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
    
    const restaurantName = restaurant.name.replace(/\s+/g, '').toLowerCase();

    // Rating implementation
    const totalBubbles = 5;

    let rating = restaurant ? restaurant.rating : 0;
    let filledBubbles = Math.floor(rating);
    let halfFilled = rating % 1 !== 0;

    return (
        <>
            { restaurant ? (<div>
                <div key={restaurant._id} className="flex flex-col h-60 w-44 space-y-3 rounded-xl ssm:rounded-2xl px-1.5 py-1.5 md:px-2 md:py-2 md:rounded-2xl cursor-pointer bg-pure_white drop-shadow-sm text-sm text-start text-default/75 ssm:h-72 ssm:w-56 lg:w-72 lg:h-80">
                    <div className="relative h-36 ssm:h-44 lg:h-48 w-full mx-auto rounded-lg sm:rounded-xl md:rounded-lg overflow-hidden">
                        <img src={`/assets/img/gallery/restaurants/${restaurantName}/${restaurant.gallery?.[0]}.webp`} alt="meal-photo" className="object-cover h-full w-full mx-auto" />
                    </div>
                    <div className="flex flex-col h-18 w-full md:h-fit px-1.5 text-start" >
                        <div className="flex justify-between w-full h-fit items-center">
                            <div className=" w-fit">
                                <NavLink to={`/restaurantlistings/${restaurant._id}`} className="hover:text-bg_variant1/55 text-sm text-wrap ssm:text-base lg:text-lg font-bold w-fit" >{restaurant.name}</NavLink>
                            </div>
                        </div>
                        <div className="flex flex-row space-x-0.5 ssm:space-x-1.5">
                            <span className="size-3 sm:size-3.5 md:size-2.5 mt-.5 md:-mt-0"><LocationIcon stroke="gray" fill="none"/></span>
                            <span className="text-xs truncate font-normal ssm:text-ssm">{restaurant.details.address[0]}</span>
                        </div>
                        <div className="flex h-4 justify-between items-center mt-0.5">
                            <div className="flex flex-row space-x-0.5">
                                <div className="flex">
                                    <div className='flex flex-row text-default/75 font-bold w-fit space-x-1 text-ssm md:text-ssm items-center'>
                                        <div className="flex space-x-0">
                                            {[...new Array(totalBubbles)].map((_, index) => {
                                                if (index < filledBubbles) {
                                                    // Full circle for filled ratings
                                                    return (
                                                        <div key={index} className="flex ">
                                                            <RatingBubble key={index} fill={'red'} stroke={'red'} height={10} width={10} />
                                                        </div>
                                                    );
                                                } else if (index === filledBubbles && halfFilled) {
                                                    // Half circle for decimal ratings
                                                    return (
                                                        <div key={index} className="flex ">
                                                            <CircleHalfFull  key={index} fill={'red'} height={10} width={10}/>
                                                        </div>
                                                    );
                                                } else {
                                                    // Empty circle for remaining ratings
                                                    return (
                                                        <div key={index} className="flex " >
                                                            <RatingBubble  key={index} fill={'none'} stroke={'red'} height={10} width={10}/>
                                                        </div>
                                                    );
                                                }
                                            })}
                                        </div>
                                        <div className="flex items-center space-x-0.5">
                                            <span className="">{`${restaurant.reviews?.length} reviews`}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button onClick={handleWishlistClick} className="h-fit w-fit" >
                                    <Bookmark fill={favorite ? 'red' : 'none'}  stroke={favorite ? 'red' : 'gray'} />
                                </button>
                            </div>
                        </div>
                        <span className="mt-1 line-clamp-1 md:line-clamp-2 text-sm w-full px-1 ssm:px-1.5 h-fit ssm:mb-1 font-medium">{restaurant.description}</span>
                    </div>
                </div>
            </div>) : <Loading />
            }
        </>
    );
}

RestaurantCard.propTypes = {
    restaurant: PropTypes.object.isRequired,
};

export default RestaurantCard;