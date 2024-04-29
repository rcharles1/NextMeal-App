import React, { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';

function MealCard() {
    const  [meals, setMeals] = useState(null);

    useEffect(() => {
        const fetchMealDetails = async () => {
            try {
                const response = await fetch('http://localhost:3000/meals/');
                const data = await response.json();
                setMeals(data);
            } catch (error) {
                console.error('Error fetching meal details:', error);
            }
        };

        fetchMealDetails();
    }, [])
    
    return (
        <>
            { meals ? (<div className="grid grid-cols-2 gap-y-3 gap-x-0 mx-1.5 sm:grid-cols-3 sm:gap-8 lg:gap-5">{meals.map(meal => {
                return (
                    <div className="flex flex-col space-y-4 h-64 w-[11rem]  rounded-xl sm:rounded-2xl px-2.5 pb-3.5 pt-3 text-base bg-pure_white drop-shadow-sm text-start text-default/75 sm:h-72 sm:w-56">
                        <div className="relative h-32 sm:h-36 w-full mx-auto rounded-md sm:rounded-xl overflow-hidden">
                            <div className="absolute inset-0 ">
                                <img src={`/assets/img/gallery/meals/food/${meal.img}.webp`} alt='meal-image' className="w-44 h-full object-scale-down"/>
                            </div>
                            <div className="absolute top-2 right-0 sm:right-2 size-5 sm:size-7">
                                <img src='/assets/icon/favorite.svg'/>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1 h-fit sm:h-18 w-full px-1 sm:px-3 justify-center items-start" >
                            <div className="sm:text-base text-start text-wrap font-bold">{meal.name}</div>
                            <div className="flex flex-row text-xs space-x-1.5 items-start">
                                <span className="size-5 sm:w-20 sm:mt-0.5">
                                    <img src='/assets/icon/star-6.svg' alt='ratings icon'/>
                                </span>
                                <span>{meal.rating}</span>
                            </div>
                            <span className="w-36 h-fit text-sm font-medium line-clamp-2">{meal.description}</span>
                        </div>
                        <div className="w-fit h-fit ml-16 border-b-2 justify-center flex flex-row space-x-1">
                            <span>
                                <NavLink to={`/mealitem/${meal._id}`} className="font-semibold text-sm sm:text-base active:text-bg_variant1">Explore</NavLink>
                            </span>
                            <span className="size-3.5 sm:size-4 mt-0.5 pt-0.5">
                                <img src='assets/icon/arrow-right.svg' alt='arrow-right image'/>
                            </span>
                        </div>
                    </div>
                )
                })}</div>) : <p>Cooking...</p>
            }
        </>
    );
}

export default MealCard;