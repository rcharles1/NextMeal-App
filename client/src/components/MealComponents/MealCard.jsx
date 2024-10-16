import { useState, useEffect, useCallback } from 'react';
import { updateFavoritesList } from '../../utilities/getData';
import PropTypes from 'prop-types';

import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RatingBubble, CircleHalfFull, Bookmark } from '/src/components/svgs/InterfaceSvg';
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
        },[favorite, googleId, meal._id, navigate]
    ); 

    // Rating implementation
    const totalBubbles = 5;

    let rating = meal ? meal.rating : 0;
    let filledBubbles = Math.floor(rating);
    let halfFilled = rating % 1 !== 0;
    
    return (
        <>
            {meal ? (
                <div className="flex flex-col h-64 w-40 rounded-xl sm:rounded-2xl caret-transparent px-1.5 md:px-2 md:py-2 pt-1.5 text-sm bg-pure_white drop-shadow-sm text-start text-default/75 ssm:w-56 ssm:h-64 ">
                    <div className="relative h-36 sm:h-36 md:h-44 w-full bg-gray/35 mx-auto rounded-lg sm:rounded-xl md:rounded-lg overflow-hidden">
                        <img src={`/assets/img/gallery/meals/food/${meal.gallery?.[0]}.webp`} alt='meal-image' className="w-full h-full object-contain object-center hover:scale-110 transition-transform duration-200 ease-in-out"/>
                    </div>
                    <div className="flex flex-col h-fit sm:h-18 w-full px-1 sm:px-2 mt-4  justify-center items-start" >
                        <div className="">
                            <NavLink to={`/meallistings/${meal._id}`} className="hover:text-bg_variant1/55 text-sm text-wrap sm:text-base font-bold w-fit">{meal.name}</NavLink>
                        </div>
                        <div className="flex flex-row justify-between w-full text-xs items-center">
                            <div className="flex items-center space-x-1">
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
                                    
                                </div>
                            </div>
                            <div className="flex">
                                <button onClick={handleFavoriteClick} className="flex h-fit w-fit" >
                                    <Bookmark fill={favorite ? 'red' : 'none'}  stroke={favorite ? 'red' : 'gray'} height="15" width="18" />
                                </button>
                            </div>
                        </div>
                        <span className="mt-1.5 sm:mt-2 line-clamp-2 sm:line-clamp-2 md:line-clamp-2 text-sm sm:text-sm w-fit px-1 sm:w-full h-fit sm:mb-1 font-medium">{meal.description}</span>
                    </div>
                </div>
            ) : <p>...</p>
            }
        </>
    );
}

MealCard.propTypes = {
    meal: PropTypes.object.isRequired,
};

export default MealCard;