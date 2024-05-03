import {React, useEffect, useState} from 'react';
import MealCard from './MealCard';

import { fetchAllMeals } from '../utilities/getData';

import { useNavigate } from 'react-router-dom';

function Meal() {
    const navigate = useNavigate();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const data = await fetchAllMeals();
                setMeals(data);
            } catch (error) {
                console.error('Error fetching meal details:', error);
            }
        };
        fetchMeals();
    }, [])

    const handleClick = event => {
        navigate('/mealslist', { state: { entryPoint: 'meals' } });
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
            {meals ? (
                <div className="bg-bg_variant2 grid grid-cols-2 gap-y-4 gap-x-2 px-3 sm:grid-cols-3 sm:gap-8 lg:gap-5 mx-1 overflow-hidden py-2 w-full">
                    {meals.slice(0, 4).map((meal, i) => <MealCard key={i} meal={meal} />)}
                </div>
                ) : <p className="mx-auto font-bold text-sm text-default/55">Fetching data. Please wait...</p>}

                <div className="flex ml-72 text-xs sm:text-sm mt-0.5 sm:w-11/12 sm:justify-end font-semibold text-default/80 hover:text-bg_variant1">
                   <button onClick={handleClick} className="underline underline-offset-2">View More</button>
                </div>
            </div>
        </div>
    );
}

export default Meal;