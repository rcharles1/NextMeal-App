import React from 'react';
import { NavLink } from 'react-router-dom';

function SearchResultCardForMeal({ meal }) {
    return (
        <>
            {meal ? (
                <div className="flex items-center mb-2 space-x-4 text-sm md:text-ssm font-semibold">
                    <div className="size-16 md:size-12 rounded-lg overflow-hidden items-center">
                        <img src={`/assets/img/gallery/meals/food/${meal?.img}.webp`} alt="meal-photo" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                        <NavLink to={`/restaurantprofile/${meal._id}`} className="font-bold focus:text-bg_variant1">{meal.name}</NavLink>
                        <p className="text-xs">{meal.course}</p>
                        <p className="text-xs font-medium">{meal.type}</p>
                    </div>
                </div>
            ) : ''}
        </>
    );
}

export default SearchResultCardForMeal;