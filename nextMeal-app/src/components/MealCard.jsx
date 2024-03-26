import React from 'react';

function MealCard() {
    return (
        <div className="flex flex-col space-y-5 items-start justify-start h-72  max-w-40 rounded-xl sm:rounded-2xl drop-shadow px-2 py-2 text-sm bg-pure_white sm:h-80 sm:w-48">
            <div className="relative h-32  sm:h-36 w-full mx-auto rounded-md sm:rounded-xl overflow-hidden">
                <div className="absolute inset-0 "><img src='/assets/img/data/ugali-nyama-choma2.png' alt='restaurant photo' /></div>
                <div className="absolute top-2 right-0 sm:right-2 size-6 sm:size-7" ><img src='/assets/icon/favorite.svg' /></div>
            </div>
            <div className="flex flex-col space-y-1 h-fit sm:h-18 w-full px-1 sm:px-3 justify-center items-center" >
               <div className="sm:text-base text-center text-wrap font-bold">Ugali Nyama Choma</div>
               <div className="flex flex-row space-x-0.5">
                   <span className="w-14 sm:w-20 sm:mt-0.5"><img src='/assets/icon/ratings.svg' alt='Location icon'/></span>
                </div>
               <span className="truncate w-28 h-fit text-xs ">Food Description in few words </span>
            </div>
            <div className="w-fit h-fit mx-3 border-b-2 justify-center flex flex-row space-x-1">
                <span><a className="font-semibold text-xs truncate">Available Places</a></span>
                <span className="size-3.5 sm:size-4 mt-0.5 pt-0.5"><img src='assets/icon/arrow-right.svg' alt='arrow-right image'/></span>
            </div>
        </div>
    );
}

export default MealCard;