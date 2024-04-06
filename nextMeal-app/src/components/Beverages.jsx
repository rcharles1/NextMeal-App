import React from 'react';
import BeverageCard from './BeverageCard';

import { useNavigate } from 'react-router-dom';

function Beverages() {
    const navigate = useNavigate();

    const handleClick = event => {
        navigate('/mealslist');
    }

    return (
        <div className="flex flex-col caret-transparent w-100 h-2/3 space-y-8">
            <div className="font-semibold text-3xl sm:text-5xl  flex flex-col space-y-3 text-center "> 
                <span>Top Drinks in the Neighbourhood</span>
                <span className="font-semibold px-3 leading-5 block text-base sm:text-xl text-pretty text-default/65">The Popular Choice of the Streets </span>
            </div>
            <div className="flex flex-col space-y-3 rounded-sm w-full p-2">
                <div>
                    <div className="flex flex-row space-x-28 ml-7 sm:w-11/12 sm:justify-between font-semibold text-default/80 text-base ">
                        <span className="text-sm sm:text-base">
                            Recommended Drinks
                        </span>
                        <span className="text-xs sm:text-sm mt-0.5">
                           <button onClick={handleClick} className="underline underline-offset-2">Show All</button>
                        </span>
                    </div>
                </div>
                <div className="flex flex-row space-x-5 justify-center pb-2 w-full">
                    <BeverageCard />
                    <BeverageCard/>
                </div>
            </div>
        </div>
        
    );
}

export default Beverages;