import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { updateFavorites } from '../utilities/getData';
import { Favorite, Rating } from '/src/components/svgs/InterfaceSvg';

function MealCard({ meal }) {
    const [favorite, setFavorite] = useState(false);
    const [googleId, setGoogleId] = useState(null);
    const itemType = 'meal';

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        setGoogleId(userData?.googleId);
    }, []);


    const handleFavoriteClick = async () => {
        setFavorite(prevState => !prevState);
        const itemId = meal._id;
        try {
            const response = await updateFavorites(googleId, itemId, itemType);
            console.log(response);
        } catch (error) {
            console.error('Error updating favorites:', error);
        }
    };

    return (
        <>
            {meal ? (
                <div className="flex flex-col space-y-4 h-64 w-[11rem] rounded-xl sm:rounded-2xl caret-transparent px-2.5 pb-3.5 pt-3 text-base md:text-sm bg-pure_white drop-shadow-sm text-start text-default/75 sm:h-72 sm:w-56 md:h-64 md:w-48 ">
                    <div className="relative h-32 sm:h-36 w-full mx-auto rounded-md sm:rounded-xl overflow-hidden">
                        <div className="absolute inset-0 ">
                            <img src={`/assets/img/gallery/meals/food/${meal.img}.webp`} alt='meal-image' className="w-44 h-full object-scale-down"/>
                        </div>
                        <button onClick={handleFavoriteClick} className="absolute w-fit top-2 right-0 sm:right-2 size-5 sm:size-7 md:right-0 md:size-5">
                            <Favorite fill={favorite ? 'red' : 'silver'} height="20" width="24" />
                        </button>
                    </div>
                    <div className="flex flex-col space-y-1 h-fit sm:h-18 w-full px-1 sm:px-3 justify-center items-start" >
                        <div className="sm:text-base md:text-sm text-start text-wrap font-bold">{meal.name}</div>
                        <div className="flex flex-row justify-betweeen text-xs space-x-20 items-start">
                            <div className="flex items-center space-x-1.5">
                                <Rating height="18" width="18" />    
                                <span className="font-base">{meal.rating}</span>
                            </div>
                        </div>
                        <span className="w-36 h-fit text-sm md:text-xs md:w-40 font-medium line-clamp-2">{meal.description}</span>
                    </div>
                    <div className="w-fit h-fit ml-14 md:ml-20 border-b-2 justify-center flex flex-row space-x-1 md:space-x-0.5">
                        <span><NavLink to={`/mealitem/${meal._id}`} className="font-semibold md:font-bold text-sm sm:text-base md:text-xs active:text-bg_variant1">Read More</NavLink></span>
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