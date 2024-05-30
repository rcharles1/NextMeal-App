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
    };

    return (
        <div className="flex flex-col caret-transparent w-100 h-2/3 space-y-8">
            <div className="font-semibold text-3xl sm:text-5xl flex flex-col space-y-3 text-center "> 
                <span className="w-10/12 mx-auto">Quench your thirst with the local's favorites! </span>
                <span className="font-semibold px-3 w-11/12 mx-auto leading-5 block text-base sm:text-xl text-pretty text-default/65">The Street's Choice</span>
            </div>
            <div className="flex flex-col space-y-3 rounded-sm w-full p-2">
                {beverages ? (
                    <div className="bg-bg_variant2 grid grid-cols-2 gap-4 px-4 sm:grid-cols-3 sm:gap-2 sm:px-4 md:px-16 md:grid-cols-4 lg:gap-2 mx-auto overflow-hidden py-2 w-full">
                        {beverages.slice(0, 4).map((beverage, i) => <BeverageCard key={i} beverage={beverage}/>)}
                    </div>
                ) : <Loading/> }
                <div className="flex justify-end mr-5 md:mr-20 md:text-xs text-xs sm:text-sm sm:justify-end font-semibold text-default/80 hover:text-bg_variant1">
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