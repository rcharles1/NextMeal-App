import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Bookmark, RatingBubble, CircleHalfFull } from '/src/components/svgs/InterfaceSvg';
import { updateFavoritesList } from '../../utilities/getData';
import { getMyFavorites } from '../../features/wishlist/wishlistSlice';

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
        setFavorite(wishlist.some(item => item.id === meal._id));
    }, [meal._id, wishlist]);

    const handleFavoriteClick = useCallback(async () => {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (!userData) {
            navigate('/signin');
            return;
        }

        try {
            await updateFavoritesList(googleId, meal._id, itemType);
            setFavorite(prev => !prev);
        } catch (error) {
            console.error('Error updating wishlist:', error);
        }
    }, [googleId, meal._id, navigate]);

    if (!meal) return null;

    const rating = meal.rating || 0;
    const filledBubbles = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
            {/* Meal Image */}
            <div className="relative pt-[100%] overflow-hidden">
                <img
                    src={`/assets/img/gallery/meals/food/${meal.gallery?.[0]}.webp`}
                    alt={meal.name}
                    className="absolute top-0 left-0 w-full h-full transition-transform duration-500 hover:scale-110"
                />
                <button
                    onClick={handleFavoriteClick}
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

            {/* Meal Info */}
            <div className="p-4 flex-grow flex flex-col">
                <NavLink
                    to={`/meallistings/${meal._id}`}
                    className="text-lg font-bold text-gray-900 hover:text-bg_variant1 transition-colors mb-2 line-clamp-1"
                >
                    {meal.name}
                </NavLink>

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
                        {meal.reviews?.length || 0} reviews
                    </span>
                </div>

                <p className="text-base text-gray-600 line-clamp-2 mt-auto">
                    {meal.description}
                </p>
            </div>
        </div>
    );
}

MealCard.propTypes = {
    meal: PropTypes.object.isRequired,
};

export default MealCard;