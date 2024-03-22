import { React } from 'react';
import Search from '../components/Search';
import Location from '../components/LocationBox';

function HomePage() {
    return (
        <div className="flex flex-col space-y-6 justify-center items-center rounded-md w-100 text-slate_white h-4/6 p-4">
           <div className="w-100 mt-1 p-1">
               <div className="">
                    <h1 className="text-5xl mt-48 font-bold text-center">Discover Restaurants & Delicious Food</h1>
               </div>
            </div>
           <div><Search/></div>
           <div className="cursor-pointer shadow-xl"><Location /></div>
        </div>
    );
}

export default HomePage;