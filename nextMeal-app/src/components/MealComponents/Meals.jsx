import {React, useEffect, useState} from 'react';
import MealCard from './MealCard';

import { fetchAllMeals } from '../../utilities/getData';

import { useNavigate } from 'react-router-dom';
import Loading from '../ComplementaryComponents/Loading';

function Meal() {
    const navigate = useNavigate();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const data = await fetchAllMeals();
                setMeals(data);
            } catch (error) {
                console.error('Error fetching meals:', error);
            }
        };
        fetchMeals();
    }, []);

    const handleClick = event => {
        navigate('/mealslist', { state: { entryPoint: 'meals' } });
    };

    return (
        <div className="flex flex-col w-100 h-2/3 space-y-6 caret-transparent">
            <div className="sm:px-3.5 px-8 flex flex-col space-y-3 text-center "> 
                <span className="font-extrabold text-3xl sm:text-5xl ">Discover the Local’s Favorite Meals</span>
                <span className="font-semibold block text-center leading-relaxed ssm:text-base text-pretty text-default/65">
                    From traditional recipes to modern twists, explore the flavors that define the region’s cuisine. Whether you’re a fan of hearty meals or light bites, there’s something delicious waiting for you.
                </span>
            </div>
            <div className="flex flex-col space-y-3 rounded-sm w-full p-2">
            {meals ? (
                <div className="bg-bg_variant2 grid grid-cols-2 gap-4 px-4 sm:grid-cols-3 sm:gap-4 sm:px-6 md:grid-cols-4 md:px-16 lg:gap-2 mx-auto overflow-hidden py-2 w-full">
                    {meals.slice(0, 4).map((meal, i) => <MealCard key={i} meal={meal} />)}
                </div>
                ) : <Loading/>}
                <div className="flex justify-end mr-5 md:mr-20 text-xs sm:text-sm mt-0.5 sm:justify-end font-semibold text-default/80">
                   <button onClick={handleClick} className="underline underline-offset-2 hover:text-bg_variant1">Browse All</button>
                </div>
            </div>
        </div>
    );
}

export default Meal;