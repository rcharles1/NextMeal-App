import React from 'react';

import { NavLink } from 'react-router-dom';

function SimilarBeverage({ similarBeverage }) {
    return (
        <>
            {similarBeverage ? 
                <div className="bg-pure_white flex flex-col ssm:flex-row p-3 ssm:space-x-0 h-fit ssm:h-fit ssm:pb-0 ssm:w-full rounded-lg overflow-hidden">
                    <div className="relative h-56 sm:w-5/12 ssm:h-32 w-full mx-auto sm:rounded-lg md:rounded-xl overflow-hidden">
                        <div className="absolute inset-"><img src={`/assets/img/gallery/meals/beverages/${similarBeverage.gallery?.[0]}.webp`} alt="beverage-photo" className="w-full " /></div>
                    </div>
                    <div className="sm:w-6/12 bg-gradient-to-t">
                        <div className="flex justify-between w-full p-3 sm:p-1 h-fit items-center">
                            <div className="text-lg ssm:text-base text-wrap font-bold w-fit">
                                <NavLink to={`/beveragelistings/${similarBeverage._id}`} className="hover:text-bg_variant1/55" >{similarBeverage.name}</NavLink>
                            </div>
                        </div>
                        <div className="flex flex-col -mt-2 sm:mt-0 w-fit space-x-0.5 mx-3 sm:mx-1 py-1 ssm:text-sm ">
                            <p>{similarBeverage.volume}</p>
                            <p>TZS {similarBeverage.price}</p>
                        </div>
                    </div>
                </div> 
            : '...'}
        </>
    );
}


export default SimilarBeverage;