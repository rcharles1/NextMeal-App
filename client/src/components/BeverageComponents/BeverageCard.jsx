import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Bookmark } from '/src/components/svgs/InterfaceSvg';
import { updateFavoritesList } from '../../utilities/getData';

function BeverageCard({ beverage }) {
    const navigate = useNavigate();
    const wishlist = useSelector(state => state.wishlist);
    const [favorite, setFavorite] = useState(false);
    const [googleId, setGoogleId] = useState(null);
    const itemType = 'beverage';

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        setGoogleId(userData?.googleId);
        setFavorite(wishlist.some(item => item.id === beverage._id));
    }, [beverage._id, wishlist]);

    const handleFavoriteClick = useCallback(async () => {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (!userData) {
            navigate('/signin');
            return;
        }

        try {
            await updateFavoritesList(googleId, beverage._id, itemType);
            setFavorite(prev => !prev);
        } catch (error) {
            console.error('Error updating wishlist:', error);
        }
    }, [beverage._id, googleId, navigate]);

    if (!beverage) return null;

    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
            {/* Beverage Image */}
            <div className="relative pt-[100%] bg-gray-100 overflow-hidden">
                <img
                    src={`/assets/img/gallery/meals/beverages/${beverage.gallery?.[0]}.webp`}
                    alt={beverage.name}
                    className="absolute top-0 left-0 w-full h-full object-contain p-4 transition-transform duration-500 hover:scale-105"
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

            {/* Beverage Info */}
            <div className="p-4 flex-grow flex flex-col">
                <NavLink
                    to={`/beveragelistings/${beverage._id}`}
                    className="text-lg font-bold text-gray-900 hover:text-bg_variant1 transition-colors mb-2 line-clamp-1"
                >
                    {beverage.name}
                </NavLink>

                <div className="flex justify-between items-center mt-auto">
                    <div className="space-y-1">
                        <p className="text-sm font-semibold text-gray-900">
                            TZS {beverage.price}
                        </p>
                        <p className="text-base text-gray-100">
                            {beverage.size} • {beverage.volume}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

BeverageCard.propTypes = {
    beverage: PropTypes.object.isRequired,
};

export default BeverageCard;