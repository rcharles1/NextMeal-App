import React from 'react';
import Lottie from 'lottie-react';
import errorAnimation from '/public/assets/lotties/restaurant-cat.json';
import { useNavigate } from 'react-router-dom';

function PageError() {
    const navigate = useNavigate();
  
    const goBack = () => {
      navigate(-1);
    };

    return (
        <div className="h-screen bg-bg_variant1/15 p-10 w-full caret-transparent text-lg font-medium text-default/75 antialised text-center">
            <div className="size-56 justify-center mx-auto">
                <Lottie animationData={errorAnimation} loop={true} speed={0.5}/>
            </div>
            <h1 className="text-bg_variant1 font-bold text-2xl mt-6 caret-transparent md:mt-4">ERROR 404: Not Found</h1>
                <p>Page Not Found</p>
            <div className="flex space-x-1.5 mt-2 mx-auto w-fit items-center ssm:mt-4">
                <button onClick={goBack} className="text-bg_variant1 font-semibold rounded p-1 cursor-pointer ring ring-pure_white/25 md:h-fit hover:bg-bg_variant1/85 hover:text-pure_white hover:ring-bg_variant1">Go back</button>
            </div>
            <div className="w-28 sm:w-48 md:w-20 p-2 mt-96 md:mt-4 mx-auto"><img src='/assets/img/next-meal-red.png' alt="logo"/></div>
        </div>
    )
}

export default PageError;