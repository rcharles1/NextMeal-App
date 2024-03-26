import React from 'react';
import Lottie from 'lottie-react';
import orderAnimation from '/public/assets/lotties/food-order.json';
import tableAnimation from '/public/assets/lotties/table-reservation.json';
import deliveryAnimation from '/public/assets/lotties/food-delivery.json';

function Services() {
    return (
        <div className="flex flex-col w-100 h-2/3 space-y-8 justify-center items-center sm:space-y-1">
            <div className="font-semibold text-3xl flex flex-col space-y-3 text-center "> 
                <span>We are more than you think </span>
                <span className="font-semibold px-3 leading-5 block text-base text-pretty text-default/60">
                    Away from helping you discover where and what you will get the next food for pleasure, we do the following in addition
                </span>
            </div>
            <div className="flex flex-col space-y-8 px-5 sm:flex-row sm:space-x-6 sm:py-1">
                <div className="space-y-8 sm:space-y-6 mt-2 sm:mt-8">
                    <div className="flex flex-row space-x-2 h-56 w-80 px-8 justify-start items-center rounded-lg bg-pure_white drop-shadow-sm sm:w-96 sm:h-48 sm:space-x-4">
                        <div className="flex flex-col space-y-1.5 justify-center items-start">
                            <span className="font-bold text-lg ">Online Ordering</span>
                            <span className="font-normal text-left text-sm">Order your meal and enjoy service as if you were present at your pristine location</span>
                        </div>
                        <div className="flex mx-1">
                            <Lottie animationData={orderAnimation} loop={true}/>
                        </div>
                    </div>
                    <div className="flex flex-row space-x-3 h-48 w-80 p-3 justify-start items-center rounded-lg bg-pure_white drop-shadow-sm sm:w-96 sm:h-48 sm:space-x-4">
                        <div className="w-full"><Lottie animationData={tableAnimation} loop={true}/></div>
                        <div className="flex flex-col space-y-1.5 justify-center items-center">
                            <span className="font-bold text-lg">Table Reservations</span>
                            <span className="font-normal text-left text-sm">Secure your dining experience by booking a table in advance.</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-3 h-96 py-4 w-80 p-3 justify-start items-center rounded-lg bg-pure_white drop-shadow-sm sm:h-full">
                    <div className="size-64 sm:size-72"><Lottie animationData={deliveryAnimation} loop={true}/></div>
                    <div className="flex flex-col space-y-1.5 justify-center items-center">
                        <span className="font-bold text-lg">Door-to-Door Delivery</span>
                        <span className="font-normal text-center text-sm">Take pleasure in the finest dishes from your favorite place, even from afar </span>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Services;