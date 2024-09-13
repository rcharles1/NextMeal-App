import React, { useEffect, useState} from 'react';
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
        navigate('/meallistings', { state: { entryPoint: 'meals' } });
    };

    return (
        <div className="flex flex-col w-100 h-2/3 space-y-6 caret-transparent">
            <div className="sm:px-3.5 px-5 flex flex-col space-y-3 text-center "> 
                <span className="font-extrabold text-3xl sm:text-5xl ssm:w-11/12 mx-auto">Discover the Local’s Favorite Meals</span>
                <span className="font-semibold block text-center leading-relaxed ssm:text-base lg:text-lg w-11/12 mx-auto text-pretty text-default/65">
                    From traditional recipes to modern twists, explore the flavors that define the region’s cuisine. Whether you’re a fan of hearty meals or light bites, there’s something delicious waiting for you.
                </span>
            </div>
            <div className="flex flex-col space-y-3 rounded-sm w-full p-2 relative">
                <div className={`absolute inset-0 bg-gradient-to-t from-slate_white to-transparent z-10 `}></div>
                {meals ? (
                    <div className="bg-bg_variant2 grid grid-cols-2 gap-4 px-4 ssm:grid-cols-3 ssm:gap-x-0 ssm:px-14 lg:grid-cols-4 lg:px-14 lg:gap-x-0 mx-auto overflow-hidden py-2 w-full">
                        {meals.slice(0, 6).map((meal, i) => <MealCard key={i} meal={meal} />)}
                    </div>
                ) : <Loading/>}
                <div className="absolute inset-x-0 bottom-12 left-1/2 transform -translate-x-1/2 w-fit z-10 bg-bg_variant1 px-2.5 rounded-3xl">
                   <button onClick={handleClick} className="text-sm tracking-wide text-slate_white font-bold p-2">See All Meals </button>
                </div>
            </div>
        </div>
    );
}

export default Meal;