import {React } from 'react';
import Search from './Search';
import Location from './LocationBox';

import Lottie from 'lottie-react';
import menuAnimation from '/public/assets/lotties/menu-slideshow.json';

function HomePage() {

    return (
        <div className="flex bg-graphicDots caret-transparent h-full bg-no-repeat bg-right-top">
            <div className="flex flex-col space-y-6 justify-center items-center rounded-md w-100 text-slate_white h-full px-4 ">
                <div className="w-100 h-fit -mt-20 p-1">
                   <h1 className="text-5xl sm:text-8xl mt-48 font-bold text-center">Discover Restaurants & Delicious Food</h1>
                </div>
                <div><Search/></div>
                <div className="cursor-pointer"><Location /></div>
                <div className="rounded w-full p-1 h-fit sm:size-96">
                 <Lottie animationData={menuAnimation} loop={false}/>
                </div>
            </div>
        </div>
    );
}

export default HomePage;