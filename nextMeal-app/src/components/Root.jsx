import { React } from 'react';
import Search from './Search';
import Location from './LocationBox';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Root() {
    return (
        <div className="h-fit w-100 bg-bg_variant1 ">
            <Header />
            <main className="h-lvh w-100 p-1">
                <div className="bg-graphicDots h-full bg-no-repeat bg-right-top">
                    <div className="flex flex-col space-y-6 justify-center items-center rounded-md w-100 text-slate_white h-4/6 p-4 ">
                        <div className="w-100 mt-1 p-1">
                            <div>
                                <h1 className="text-5xl mt-48 font-bold text-center">Discover Restaurants & Delicious Food</h1>
                            </div>
                            </div>
                        <div><Search/></div>
                        <div className="cursor-pointer shadow-xl"><Location /></div>
                    </div>
                </div>
                <div className="bg-slate_white h-lvh">
                    
                </div>
                <div className="">
                    <Footer />
                </div>
            </main>
            
        </div>
    );
}

export default Root;