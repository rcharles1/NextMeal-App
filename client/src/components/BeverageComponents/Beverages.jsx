/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import BeverageCard from './BeverageCard';
import Loading from '../ComplementaryComponents/Loading';

import { fetchAllBeverages } from '../../utilities/getData';

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
        navigate('/meallistings',  { state: { entryPoint: 'beverages' } });
    };

    return (
        <div className="flex flex-col caret-transparent w-100 h-2/3 space-y-8">
            <div className="flex flex-col space-y-3 text-center "> 
                <span className="w-10/12 mx-auto font-extrabold text-3xl sm:text-5xl"> Cheers to Great Taste</span>
                <span className="font-semibold px-3 w-11/12 mx-auto text-center leading-relaxed block ssm:w-10/12 ssm:text-basetext-pretty text-default/65">
                    Dive into a world of refreshing beverages that not only quench your thirst but also ignite a passion for exceptional dining experiences
                </span>
            </div>
            <div className="flex flex-col space-y-3 rounded-sm w-full p-2 relative">
                <div className={`absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate_white to-transparent z-10 `}></div>
                {beverages ? (
                    <div className="bg-bg_variant2 grid grid-cols-2 gap-4 px-4 ssm:grid-cols-3 ssm:gap-x-0 ssm:px-14 lg:px-16 lg:grid-cols-4 lg:gap-x-0 mx-auto overflow-hidden py-2 w-full">
                        {beverages.slice(0, 6).map((beverage, i) => <BeverageCard key={i} beverage={beverage}/>)}
                    </div>
                ) : <Loading/> }
                <div className="absolute inset-x-0 bottom-12 left-1/2 transform -translate-x-1/2 w-fit z-10 bg-bg_variant1 px-2.5 rounded-3xl">
                   <button className="text-sm tracking-wide text-slate_white font-bold p-2" onClick={() => {
                       handleClick();
                       setSelected('drink');
                   }} >See All Beverages</button>
                </div>
            </div>
        </div>
    );
}

export default Beverages;