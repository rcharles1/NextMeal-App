import {React } from 'react';
import Search from './Search';
import Location from './LocationBox';

import Lottie from 'lottie-react';
import menuAnimation from '/public/assets/lotties/fast-food.json';

function HomePage() {

    return (
        <div className="flex bg-graphicDots caret-transparent h-full bg-no-repeat bg-right-top">
            <div className="flex flex-col justify-center items-center rounded-md md:mt-0 w-100 text-slate_white h-full px-4 ">
                <div className="w-100 h-fit -mt-20 md:mt-10 md:justify-center p-1">
                   <h1 className="text-5xl sm:text-7xl md:text-6xl md:px-6 mt-36 md:mt-0  font-bold text-center">Discover Restaurants & Delicious Food</h1>
                </div>
                <div className="w-full mt-8 px-3 py-2"><Search/></div>
                <div className="cursor-pointer mt-8"><Location /></div>
                <div className="rounded w-full -mt-8 p-1 h-fit sm:w-fit sm:mt-2">
                 <Lottie animationData={menuAnimation} loop={true} speed={0.5}/>
                </div>
            </div>
        </div>
    );
}

export default HomePage;