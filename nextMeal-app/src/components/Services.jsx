import React from 'react';
import Lottie from 'lottie-react';
import orderAnimation from '/public/assets/lotties/food-order.json';
import tableAnimation from '/public/assets/lotties/table-reservation.json';
import deliveryAnimation from '/public/assets/lotties/food-delivery.json';

function Services() {
    return (
        <div className="flex flex-col w-100 h-2/3 space-y-8 justify-center items-center">
            <div className="font-semibold text-3xl flex flex-col space-y-3 text-center "> 
                <span>We are more than you think </span>
                <span className="font-semibold px-3 leading-5 block text-base text-pretty text-default/60">
                    Away from helping you discover where and what you will get the next food for pleasure, we do the following in addition
                </span>
            </div>
            <div className="flex flex-col space-y-8  px-5">
                <div className="flex flex-col h-fit w-56 p-3 justify-start items-center rounded-md shadow">
                    <div className="flex out justify-center items-start"><Lottie animationData={orderAnimation} loop={true}/></div>
                    <div className="flex flex-col justify-center items-center">
                        <span className="font-semibold text-base">Online Odering</span>
                        <span className="font-normal text-center text-sm">Place an order and get served as if you where there at your prestined spot. </span>
                    </div>
                </div>
                <div className="flex flex-col h-fit w-56 p-3 justify-start items-center rounded-md shadow">
                    <div className="w-full"><Lottie animationData={tableAnimation} loop={true}/></div>
                    <div className="flex flex-col justify-center items-center">
                        <span className="font-semibold text-base">Table Reservations</span>
                        <span className="font-normal text-center text-sm">Place an order and get served as if you where there at your prestined spot. </span>
                    </div>
                </div>
                <div className="flex flex-col h-fit w-56 p-3 justify-start items-center rounded-md shadow">
                    <div className="w-full"><Lottie animationData={deliveryAnimation} loop={true}/></div>
                    <div className="flex flex-col justify-center items-center">
                        <span className="font-semibold text-base">Door-to-Door Delivery</span>
                        <span className="font-normal text-center text-sm">Place an order and get served as if you where there at your prestined spot. </span>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Services;