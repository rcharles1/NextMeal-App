import React from 'react';

function MealCard() {
    return (
        <div className="flex flex-col space-y-3.5 items-center justify-center h-80 w-48 rounded-2xl px-2 py-1.5 text-sm bg-pure_white">
            <div className="relative h-36 w-full mx-auto rounded-xl overflow-hidden">
                <div className="absolute inset-0"><img src='/assets/img/data/ugali-nyama-choma2.png' alt='restaurant photo' /></div>
                <div className="absolute top-2 right-2 size-6" ><img src='/assets/icon/favorite.svg' /></div>
            </div>
            <div className="flex flex-col space-y-1  h-18 w-full px-3 justify-center items-center" >
               <div className="text-lg text-center font-semibold">Ugali Nyama Choma</div>

               <div className="flex flex-row space-x-0.5">
                   <span className="w-20 mt-0.5"><img src='/assets/icon/ratings.svg' alt='Location icon'/></span>
                </div>
               <span className="truncate w-44">Food Description in few words </span>
            </div>
            <div className="w-fit mx-3 border-b-2 justify-center flex flex-row space-x-1">
                <span><a className="font-semibold">Available Places</a></span>
                <span className="size-4 mt-0.5 pt-0.5"><img src='assets/icon/arrow-right.svg' alt='arrow-right image'/></span>
            </div>
        </div>
    );
}

export default MealCard;