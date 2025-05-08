import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateFavoritesList } from '../../utilities/getData';
import { getMyFavorites } from '../../features/wishlist/wishlistSlice';
import Loading from '../ComplementaryComponents/Loading';
import { Bookmark, RatingBubble, CircleHalfFull, LocationIcon } from '../svgs/InterfaceSvg';

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
        setFavorite(wishlist.some(item => item.id === restaurant._id));
    }, [restaurant._id, wishlist]);

    const handleWishlistClick = useCallback(async () => {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (!userData) {
            navigate('/signin');
            return;
        }
        
        try {
            await updateFavoritesList(googleId, restaurant._id, itemType);
            setFavorite(prev => !prev);
        } catch (error) {
            console.error('Error updating wishlist:', error);
        }
    }, [googleId, navigate, restaurant._id]);

    if (!restaurant) return <Loading />;

    const restaurantName = restaurant.name.replace(/\s+/g, '').toLowerCase();
    const rating = restaurant.rating || 0;
    const filledBubbles = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden h-full flex flex-col">
            {/* Restaurant Image */}
            <div className="relative pt-[75%] overflow-hidden">
                <img 
                    src={`/assets/img/gallery/restaurants/${restaurantName}/${restaurant.gallery?.[0]}.webp`} 
                    alt={restaurant.name}
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <button 
                    onClick={handleWishlistClick}
                    className="absolute top-3 right-3 p-2 bg-white/80 rounded-full backdrop-blur-sm hover:bg-white transition-colors"
                    aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                    <Bookmark 
                        fill={favorite ? 'red' : 'none'}  
                        stroke={favorite ? 'red' : 'gray'} 
                        className="w-5 h-5"
                    />
                </button>
            </div>

            {/* Restaurant Info */}
            <div className="p-4 flex-grow flex flex-col">
                <NavLink 
                    to={`/restaurantlistings/${restaurant._id}`}
                    className="text-lg font-bold text-gray-900 hover:text-bg_variant1 transition-colors mb-2 line-clamp-1"
                >
                    {restaurant.name}
                </NavLink>

                <div className="flex items-center text-gray-600 mb-2">
                    <LocationIcon className="w-4 h-4 mr-1" />
                    <span className="text-sm truncate">{restaurant.details.address[0]}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                    <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => {
                            if (i < filledBubbles) {
                                return <RatingBubble key={i} fill="red" stroke="red" className="w-4 h-4" />;
                            } else if (i === filledBubbles && hasHalfStar) {
                                return <CircleHalfFull key={i} fill="red" className="w-4 h-4" />;
                            }
                            return <RatingBubble key={i} fill="none" stroke="red" className="w-4 h-4" />;
                        })}
                    </div>
                    <span className="text-sm text-gray-600">
                        {restaurant.reviews?.length || 0} reviews
                    </span>
                </div>

                <p className="text-sm text-gray-600 line-clamp-2 mt-auto">
                    {restaurant.description}
                </p>
            </div>
        </div>
    );
}

RestaurantCard.propTypes = {
    restaurant: PropTypes.object.isRequired,
};

export default RestaurantCard;