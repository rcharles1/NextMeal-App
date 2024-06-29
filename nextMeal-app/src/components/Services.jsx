import React from 'react';

function Services() {
    return (
        <div className="flex flex-col w-100 h-2/3 md:px-20 space-y-8 justify-center items-center sm:space-y-1 caret-transparent antialised">
            <div className="font-semibold text-3xl sm:text-5xl flex flex-col space-y-3 text-center"> 
                <span>We are more than you think </span>
                <span className="font-semibold px-3 leading-5 block text-base sm:text-lg sm:px-10 text-pretty text-default/60">
                    Away from helping you discover where and what you will get the next food for pleasure, we do the following in addition
                </span>
            </div>
            <div className="flex flex-col space-y-8 px-5 md:grid md:grid-cols-3 gap-6 md:px-10 md:p-6 sm:py-1 sm:space-y-0">
                <div className="flex flex-row md:flex-col space-x-3 h-48 sm:h-56 w-80 p-3 sm:p-1 justify-start items-center rounded-lg bg-pure_white drop-shadow-sm sm:w-96 sm:h-48 sm:space-x-0 md:space-y-3 md:h-64 md:w-56 hover:bg-gradient-to-b from-pure_white to-bg_variant1/15 transition transform hover:-translate-y-1 ease-in-out delay-100">
                    <div className="flex mx-1 md:w-full rounded-md overflow-hidden">
                        <img src="/assets/vectors/table-reservation-vector.webp" alt="reservation vector"  className="object-cover"/>
                    </div>
                    <div className="flex flex-col space-y-1.5 md:space-y-0.5 justify-center items-center">
                        <span className="font-bold text-lg sm:text-xl md:text-base">Table Reservations</span>
                        <span className="font-normal text-start text-sm md:text-sm md:text-center md:text-md">Secure your dining experience by booking a table in advance</span>
                    </div>
                </div>
                <div className="flex flex-row md:flex-col space-x-2 h-56 w-80 px-8 justify-start items-center rounded-lg bg-pure_white drop-shadow-sm sm:w-96 sm:h-48 sm:space-x-0 md:space-y-3 sm:p-1 md:h-64 md:w-56 hover:bg-gradient-to-b from-pure_white to-bg_variant1/15 transition transform hover:-translate-y-1 ease-in-out delay-100">
                    <div className="flex mx-1 md:w-full rounded-lg overflow-hidden">
                        <img src="/assets/vectors/online-ordering.webp" alt="ordering vector" className="object-cover w-full"/>
                    </div>
                    <div className="flex flex-col space-y-1.5 justify-center items-start md:items-center">
                        <span className="font-bold text-lg sm:text-xl md:text-base md:text-center">Online Ordering</span>
                        <span className="font-normal text-left text-sm md:text-sm md:text-md md:text-center md:px-2">Order your meal and enjoy service as if you were present at your pristine location</span>
                    </div>
                </div>
                <div class="flex flex-col space-y-3 h-96 py-4 w-80 p-3 sm:w-96 justify-start items-center rounded-lg bg-pure_white hover:bg-gradient-to-b from-pure_white to-bg_variant1/15 drop-shadow-sm sm:h-full md:h-64 md:w-56 sm:p-1 transition transform hover:-translate-y-1 ease-in-out delay-100">
                    <div class="flex w-full mx-1 md:w-full rounded-md overflow-hidden">
                        <img src="/assets/vectors/food-delivery.svg" alt="delivery vector" class="object-cover w-full" />
                    </div>
                    <div class="flex flex-col space-y-1.5 md:space-y-0.5 justify-center items-center">
                        <span class="font-bold text-lg sm:text-xl md:text-base">Door-to-Door Delivery</span>
                        <span class="font-normal text-center md:text-center text-sm md:text-md sm:p-2">Take pleasure in the finest dishes from your favorite place, even from afar</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;