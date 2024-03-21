import { React } from 'react';
import Search from '../components/Search';

function HomePage() {
    return (
        <div className=" flex flex-col space-y-6 justify-center items-center rounded-lg w-100 text-slate_white h-96 p-4">
           <div className="w-80 p-1">
                <h1 className="text-5xl mt-48 font-bold text-center ">Discover Restaurants & Delicious Food</h1>
           </div>
           <div><Search/></div>
        </div>
    );
}

export default HomePage;