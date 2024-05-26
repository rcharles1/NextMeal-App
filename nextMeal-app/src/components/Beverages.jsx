import { React, useEffect, useState } from 'react';
import BeverageCard from './BeverageCard';
import Loading from './Loading';

import { fetchAllBeverages } from '../utilities/getData';

import { useNavigate } from 'react-router-dom';

function Beverages() {
    const navigate = useNavigate();
    const [beverages, setBeverages] = useState([]);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        const fetchBeverages = async () => {
            try {
                const data = await fetchAllBeverages();
                setBeverages(data);
            } catch (error) {
                console.error('Error fetching beverage details:', error);
            }
        };
        fetchBeverages();
    },[]);

    const handleClick = event => {
        navigate('/mealslist',  { state: { entryPoint: 'beverages' } });
    }

    return (
        <div className="flex flex-col caret-transparent w-100 h-2/3 space-y-8">
            <div className="font-semibold text-3xl sm:text-5xl flex flex-col space-y-3 text-center "> 
                <span>Top Drinks in the Neighbourhood</span>
                <span className="font-semibold px-3 leading-5 block text-base sm:text-xl text-pretty text-default/65">The Popular Choice of the Streets </span>
            </div>
            <div className="flex flex-col space-y-3 rounded-sm w-full p-2">
                {beverages ? (
                    <div className="bg-bg_variant2 grid grid-cols-2 gap-y-4 gap-x-2 px-2 sm:px-6 md:px-24 mx-2 sm:grid-cols-3 sm:gap-8 md:grid-cols-4 lg:gap-2 overflow-hidden py-2 mx-auto w-full">
                        {beverages.slice(0, 4).map((beverage, i) => <BeverageCard key={i} beverage={beverage}/>)}
                    </div>
                ) : <Loading/> }
                <div className="flex justify-end mr-5 text-xs sm:text-sm sm:justify-end font-semibold text-default/80 hover:text-bg_variant1">
                   <button className="underline underline-offset-2" onClick={() => {
                       handleClick();
                       setSelected('drink');
                   }} >Browse All</button>
                </div>
            </div>
        </div>
    );
}

export default Beverages;