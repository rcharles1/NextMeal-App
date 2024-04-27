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
            { meals ? (<div className="grid grid-cols-2 gap-2 flex flex-row space-x-0 sm:grid-cols-3 sm:gap-8 lg:gap-5">{meals.map(meal => {
                return (
                    <div className="flex flex-col space-y-4 h-64 w-48 rounded-xl sm:rounded-2xl px-2.5 py-2.5 text-sm bg-pure_white drop-shadow text-center sm:h-72 sm:w-56">
                        <div className="relative h-32 outline sm:h-36 w-full mx-auto rounded-md sm:rounded-xl overflow-hidden">
                            <div className="absolute inset-0 ">
                                <img src='/assets/img/data/ugali-nyama-choma2.png' alt='restaurant photo' />
                            </div>
                            <div className="absolute top-2 right-1 sm:right-2 size-6 sm:size-7">
                                <img src='/assets/icon/favorite.svg'/>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1 h-fit sm:h-18 w-full px-1 sm:px-3 justify-center items-center" >
                            <div className="sm:text-base text-center text-wrap font-bold">{meal.name}</div>
                            <div className="flex flex-row text-xs space-x-1.5 items-center">
                                <span className="size-5 sm:w-20 sm:mt-0.5">
                                    <img src='/assets/icon/star-6.svg' alt='ratings icon'/>
                                </span>
                                <span>{meal.rating}</span>
                            </div>
                            <span className="w-36 h-fit text-xs font-medium line-clamp-2">{meal.description}</span>
                        </div>
                        <div className="w-fit h-fit ml-16 border-b-2 justify-center flex flex-row space-x-1">
                            <span>
                                <button  className="font-semibold text-xs">Available In</button>
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