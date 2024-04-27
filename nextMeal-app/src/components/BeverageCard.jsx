import {React, useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

function BeverageCard() {
    const [beverages, setBeverages] = useState(null);

    useEffect(() => {
        const fetchBeverageDetails = async () => {
            try {
                const response = await fetch('http://localhost:3000/beverages/');
                const data = await response.json();
                setBeverages(data);
            } catch (error) {
                console.error('Error fetching beverage details:', error);
            }
        };

        fetchBeverageDetails();
    })

    return (
        <>
            { beverages ? (<div className="grid grid-cols-2 gap-2 flex flex-row space-x-0 sm:grid-cols-3 sm:gap-8 lg:gap-5">{beverages.map(beverage => {
                return (
                    <div className="flex flex-col space-y-2 h-72 w-48 rounded-xl sm:rounded-2xl px-2.5 py-2.5 text-sm outline bg-pure_white drop-shadow text-default/75 text-center sm:h-72 sm:w-56">
                        <div className="relative h-32 outline sm:h-36 w-full mx-auto rounded-md sm:rounded-xl overflow-hidden">
                            <div className="absolute inset-0 ">
                                <img src='/assets/img/data/ugali-nyama-choma2.png' alt='restaurant photo' />
                            </div>
                            <div className="absolute top-2 right-1 sm:right-2 size-6 sm:size-7">
                                <img src='/assets/icon/favorite.svg'/>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1 sm:h-18 w-full px-1 py-1 outline rounded-md sm:px-3 justify-center items-start font-medium" >
                            <div className="text-base text-start w-full font-bold">{beverage.name}</div>
                            <div className="flex flex-col space-y-0.5  w-full px-2 h-fit text-start">
                                <span>{beverage.type}</span>
                                <span>{beverage.volume}</span>
                                <div className="flex flex-row justify-between">
                                    <span>{beverage.size}</span>
                                    <span className="font-semibold">TZS {beverage.price}</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-fit h-fit ml-20 border-b-2 flex flex-row space-x-1">
                            <span>
                                <button  className="font-semibold">Explore</button>
                            </span>
                            <span className="size-5 sm:size-6 ">
                                <img src='assets/icon/arrow-right.svg' alt='arrow-right image'/>
                            </span>
                        </div>
                    </div>
                )
                })}</div>) : <p>Cooking...</p>
            }
        </>
    );
}

export default BeverageCard;