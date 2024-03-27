import React from 'react';
import BeverageCard from './BeverageCard';

function Beverages() {
    return (
        <div className="flex flex-col w-100 h-2/3 space-y-8">
            <div className="font-semibold text-3xl  flex flex-col space-y-3 text-center "> 
                <span>Top Drinks in the Neighbourhood</span>
                <span className="font-semibold px-3 leading-5 block text-base text-pretty text-default/65">The Popular Choice of the Streets </span>
            </div>
            <div className="flex flex-col space-y-3 rounded-sm w-full p-2">
                <div>
                    <div className="flex flex-row space-x-20 ml-7 font-semibold text-default/80 text-base ">
                        <span>
                            Recommended Drinks
                        </span>
                        <span className="text-xs mt-1">
                           <a href='#' className="underline underline-offset-2">Show All</a>
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