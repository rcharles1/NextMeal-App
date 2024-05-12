import {React, useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';

function BeverageCard({ beverage }) {
    return (
        <>
            { beverage ? (<div className="grid grid-cols-2 gap-x-0 gap-y-2.5 mx-1.5 sm:grid-cols-3 sm:gap-8 lg:gap-5">
                <div className="flex flex-col space-y-4 h-64 w-[11rem] rounded-xl sm:rounded-2xl px-2.5 pb-3.5 pt-3 text-base sm:text-sm bg-pure_white drop-shadow-sm text-default/75 caret-transparent text-center sm:h-72 sm:w-56 md:w-48 md:h-64">
                    <div className="relative h-2/3 sm:h-36 w-full mx-auto rounded-md sm:rounded-xl overflow-hidden">
                        <div className="absolute p-1 inset-0">
                            <img src={`/assets/img/gallery/meals/beverages/${beverage.img}.webp`} alt='beverage-image' className="w-44 h-full object-scale-down" />
                        </div>
                        <div className="absolute top-2 right-1 sm:right-2 size-6 sm:size-7 md:size-6 md:right-0">
                            <img src='/assets/icon/favorite.svg'/>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1 sm:h-18 w-full px-1 py-1 rounded-md sm:px-3 justify-center items-start font-medium" >
                        <div className="text-start w-full font-bold">{beverage.name}</div>
                        <div className="flex flex-col space-y-0.5 w-full px-2 h-fit text-start">
                            <div className="flex flex-row justify-between text-sm">
                                <span className="font-semibold">TZS {beverage.price}</span>
                                <span className="md:text-xs md:mt-0.5">{beverage.size}</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-fit h-fit ml-16 md:ml-24 border-b-2 flex flex-row space-x-1">
                        <span><NavLink to={`/beverageitem/${beverage._id}`} className="font-semibold text-sm sm:text-base md:text-sm active:text-bg_variant1">Details</NavLink></span>
                        <span className="size-5 sm:size-6 md:size-4 md:mt-0.5">
                            <img src='assets/icon/arrow-right.svg' alt='arrow-right image'/>
                        </span>
                    </div>
                </div>
            </div>) : <p>Fetching data. Please wait..</p>
            }
        </>
    );
}

export default BeverageCard;