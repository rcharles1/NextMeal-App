import React from 'react';
import Lottie from 'lottie-react';
import menuAnimation from '/public/assets/lotties/fast-food.json';

function Services() {
    return (
        <div className="flex flex-col w-full h-2/3 ssm:px-8 space-y-8 justify-center items-center ssm:space-y-6 caret-transparent antialised">
           <div className="flex flex-col w-full ssm:flex-row ssm:justify-between ssm:items-center ssm:space-x-4">
                <div className="h-fit ssm:w-5/12">
                    <Lottie animationData={menuAnimation} loop={true} speed={0.5}/>
                </div>
                <div className="font-semibold flex flex-col text-center ssm:text-start px-4 ssm:p-4 ssm:w-11/12"> 
                    <span className="text-3xl ssm:text-4xl xl:text-7xl font-extrabold">What is NextMeal and what services does it provide?</span>
                    <span className="mt-3 font-semibold px-3 leading-5 block text-base ssm:text-sm text-pretty text-default/60">
                        Away from helping you discover where and what you will get the next food for pleasure, we do the following in addition
                    </span>
                    <p className="mt-3 ssm:mt-4 leading-relaxed text-start ssm:text-base indent-2 p-1">
                        Imagine a world where finding your next meal is as easy as a few taps on your phone. Next Meal is your compassionate companion, guiding you to nearby food and support services with just a touch. Whether you’re in need or looking to lend a helping hand, Next Meal connects you to a network of care and nourishment, ensuring no one goes hungry. Dive into a community where every meal shared is a step towards a brighter, more connected future.
                    </p>
                </div>
           </div>
            <div className="flex flex-col space-y-8 px-5 ssm:grid md:grid-cols-3 gap-6 ssm:p-2 sm:py-1 ssm:space-y-0">
                <div className="flex flex-row md:flex-col space-x-3 h-48 w-80 p-3 sm:p-1 justify-start items-center rounded-lg bg-pure_white drop-shadow-sm sm:w-96 sm:space-x-0 md:space-y-3 md:h-64 md:w-56 hover:bg-gradient-to-b from-pure_white to-bg_variant1/15 transition transform hover:-translate-y-1 ease-in-out delay-100">
                    <div className="flex mx-1 md:w-full rounded-md overflow-hidden">
                        <img src="/assets/vectors/1.webp" alt="reservation vector"  className="object-cover"/>
                    </div>
                    <div className="flex flex-col space-y-1.5 md:space-y-0.5 justify-center items-center">
                        <span className="font-bold text-lg sm:text-xl md:text-base">Restaurant Discovery</span>
                        <span className="font-normal text-start text-sm ssm:text-base md:text-center line-clamp-3 ">Embark on an adventure with our comprehensive guide to discovering the best restaurants around you. </span>
                    </div>
                </div>
                <div className="flex flex-row md:flex-col space-x-3 h-48 w-80 p-3 sm:p-1 justify-start items-center rounded-lg bg-pure_white drop-shadow-sm sm:w-96 sm:space-x-0 md:space-y-3 md:h-64 md:w-56 hover:bg-gradient-to-b from-pure_white to-bg_variant1/15 transition transform hover:-translate-y-1 ease-in-out delay-100">
                    <div className="flex mx-1 md:w-full rounded-md overflow-hidden">
                        <img src="/assets/vectors/table-reservation-vector.webp" alt="reservation vector"  className="object-cover"/>
                    </div>
                    <div className="flex flex-col space-y-1.5 md:space-y-0.5 justify-center items-center">
                        <span className="font-bold text-lg sm:text-xl md:text-base">Table Reservations</span>
                        <span className="font-normal text-start text-sm ssm:text-base md:text-sm md:text-center ">Secure your dining experience by booking a table in advance</span>
                    </div>
                </div>
                <div className="flex flex-row md:flex-col space-x-2 p-3 w-80 justify-start items-center rounded-lg bg-pure_white drop-shadow-sm sm:w-96 sm:h-48 sm:space-x-0 md:space-y-3 sm:p-1 md:h-64 md:w-56 hover:bg-gradient-to-b from-pure_white to-bg_variant1/15 transition transform hover:-translate-y-1 ease-in-out delay-100">
                    <div className="flex mx-1 w-80 md:w-full rounded-lg overflow-hidden">
                        <img src="/assets/vectors/online-ordering.webp" alt="ordering vector" className="object-cover w-full"/>
                    </div>
                    <div className="flex flex-col space-y-1.5 justify-center items-start md:items-center">
                        <span className="font-bold text-lg sm:text-xl md:text-base md:text-center">Online Ordering</span>
                        <span className="font-normal text-left text-sm lg:text-base  md:text-center md:px-2">Order your meal and enjoy service as if you were present at your pristine location</span>
                    </div>
                </div>
                <div className="flex flex-col space-y-3 h-96 py-4 w-80 p-3 sm:w-96 justify-start items-center rounded-lg bg-pure_white hover:bg-gradient-to-b from-pure_white to-bg_variant1/15 drop-shadow-sm sm:h-full md:h-64 md:w-56 sm:p-1 transition transform hover:-translate-y-1 ease-in-out delay-100">
                    <div className="flex w-full mx-1 md:w-full rounded-md overflow-hidden">
                        <img src="/assets/vectors/food-delivery.svg" alt="delivery vector" className="object-cover w-full" />
                    </div>
                    <div className="flex flex-col space-y-1.5 md:space-y-0.5 justify-center items-center">
                        <span className="font-bold text-lg sm:text-xl md:text-base">Door-to-Door Delivery</span>
                        <span className="font-normal text-center md:text-center ssm:text-sm lg:text-base sm:p-2">Take pleasure in the finest dishes from your favorite place, even from afar</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;