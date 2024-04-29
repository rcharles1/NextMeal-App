import React from 'react';
import MealCard from './MealCard';

import { useNavigate } from 'react-router-dom';

function Meal() {
    const navigate = useNavigate();

    const handleClick = event => {
        navigate('/mealslist');
    }

    return (
        <div className="flex flex-col w-100 h-2/3 space-y-6 caret-transparent">
            <div className="font-semibold text-3xl sm:text-5xl sm:px-3.5 px-8 flex flex-col space-y-3 text-center "> 
                <span>Explore the Local's Favorite </span>
                <span className="font-semibold leading-5 block text-base sm:text-xl text-pretty text-default/65">
                    These are some of the Popular Local's Favorite Dishes & Cuisines 
                </span>
            </div>
            <div className="flex flex-col space-y-3 rounded-sm w-full p-2">
                
                <div className="bg-bg_variant2 justify-center overflow-hidden py-2 pr-0.5 pl-0.5 w-full">
                    <MealCard />
                </div>
                <div className="flex ml-72 text-xs sm:text-sm mt-0.5 sm:w-11/12 sm:justify-end font-semibold text-default/80 hover:text-bg_variant1">
                   <button onClick={handleClick} className="underline underline-offset-2">Show All</button>
                </div>
            </div>
        </div>
        
    );
}

export default Meal;