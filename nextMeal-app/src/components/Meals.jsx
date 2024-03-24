import React from 'react';
import MealCard from './MealCard';

function Meal() {
    return (
        <div className="flex flex-row space-x-2 p-5">
            <MealCard />
            <MealCard/>
        </div>
        
    );
}

export default Meal;