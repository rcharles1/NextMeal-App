import React from 'react';
import MealCard from './MealCard';

function Meal() {
    return (
        <div className="flex flex-col w-100 h-2/3 space-y-8">
            <div className="font-semibold text-3xl  flex flex-col space-y-3 text-center "> 
                <span>Explore the Local's Favorite </span>
                <span className="font-semibold px-3 leading-5 block text-base text-pretty text-default/65">These are some of the Popular Local's Favorite dishes & Cuisines </span>
            </div>
            <div className="container-snap overflow-x-auto flex flex-row px-5 space-x-4">
                <MealCard />
                <MealCard/>
                <MealCard/>
            </div>
        </div>
        
    );
}

export default Meal;