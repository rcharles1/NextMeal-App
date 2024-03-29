import {React, useState} from 'react';
import Search from './Search';
import Location from './LocationBox';
import Slideshow from './Slideshow';

function HomePage() {

    return (
        <div className="flex bg-graphicDots h-full bg-no-repeat bg-right-top">
            <div className="flex flex-col space-y-6 justify-center items-center rounded-md w-100 text-slate_white h-full px-4 ">
                <div className="w-100 h-fit -mt-20 p-1">
                   <h1 className="text-5xl mt-48 font-bold text-center">Discover Restaurants & Delicious Food</h1>
                </div>
                <div><Search/></div>
                <div className="cursor-pointer"><Location /></div>
                <div className="rounded w-full h-fit">
                    
                </div>
            </div>
        </div>
    );
}

export default HomePage;