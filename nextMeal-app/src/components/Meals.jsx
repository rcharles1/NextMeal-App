import React from 'react';
import MealCard from './MealCard';

function Meal() {
    return (
        <div className="flex flex-col w-100 h-2/3 space-y-6">
            <div className="font-semibold text-3xl sm:px-3.5 px-8 flex flex-col space-y-3 text-center "> 
                <span>Explore the Local's Favorite </span>
                <span className="font-semibold leading-5 block text-base text-pretty text-default/65">
                    These are some of the Popular Local's Favorite Dishes & Cuisines 
                </span>
            </div>
            <div className="flex flex-col space-y-3 rounded-sm w-full p-2">
                <div>
                    <div className="flex flex-row space-x-24 ml-7 font-semibold text-default/80 text-base ">
                        <span>
                            Recommended Meals
                        </span>
                        <span className="text-xs mt-1">
                            <a href='#' className="underline underline-offset-2">Show All</a>
                        </span>
                    </div>
                </div>
                <div className="flex flex-row space-x-5 justify-center pb-2 w-full">
                    <MealCard />
                    <MealCard/>
                </div>
            </div>
        </div>
        
    );
}

export default Meal;