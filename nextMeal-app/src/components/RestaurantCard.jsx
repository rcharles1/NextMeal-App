import React from 'react';

function RestaurantCard() {
    return (
        <div className="flex flex-col space-y-3.5 h-72 w-56 rounded-2xl px-2 py-1.5 text-sm bg-pure_white">
            <div className="relative h-36 w-full mx-auto rounded-xl overflow-hidden">
                <div className="absolute inset-0"><img src='/assets/img/data/biryani2.png' alt='restaurant photo' /></div>
                <div className="absolute top-2 right-5 size-6" ><img src='/assets/icon/favorite.svg' /></div>
            </div>
            <div className="flex flex-col space-y-1  h-18 w-full px-3 " >
               <div className="text-lg font-semibold">Kitisa Fast-Food</div>

               <div className="flex flex-row space-x-0.5">
                   <span className="size-3.5 mt-0.5"><img src='/assets/icon/location-fill.svg' alt='Location icon'/></span>
                   <span className="text-xs font-light">Mkwakwani</span>
                </div>
               <span className="truncate">Enjoy the best Biryani, Iftar Open 8Am-pm</span>
            </div>
            <div className="w-fit mx-3 border-b-2 justify-center flex flex-row space-x-1">
                <span><a className="font-semibold">Read More</a></span>
                <span className="size-4 mt-0.5 pt-0.5"><img src='assets/icon/arrow-right.svg' alt='arrow-right image'/></span>
            </div>
        </div>
    );
}

export default RestaurantCard;