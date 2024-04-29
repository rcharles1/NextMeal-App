import { React } from 'react';

function Footer() {
    return (
        <div className="antialiased flex flex-col space-y-6 h-fit p-8 justify-center items-center text-pure_white w-100 bg-bg_variant1 caret-transparent text-base">
            <div className="flex flex-col space-y-12 justify-center px-10 sm:flow-row sm:justify-around w-full text-start">
                <div className="h-36 w-64 flex flex-col items-center justify-center">
                    <h1 className="text-xl sm:text-2xl sm:w-72 font-bold mb-1">What's there to Explore</h1>
                    <ul className="list-inside w-48 text-center sm:text-start text-slate-white font-medium">
                        <li><a href="#" >Top Meals</a></li>
                        <li><a href="#" >Top Drinks & Beverages</a></li>
                        <li><a href="#" >Top Restaurants</a></li>
                        <li><a href="#" >Favorite Cities</a></li>
                        <li><a href="#" >The Local's Choice</a></li>
                    </ul>
                </div>
                <div className="h-28 w-64 flex flex-col items-center justify-center">
                    <h1 className="text-xl sm:text-2xl font-bold mb-1">Get to Know Us</h1>
                    <p className="font-medium text-center sm:text-start">
                        At NextMeal we are devoted to
                        helping you to discover and connect to restaurants that serve your next
                        meal.
                    </p>
                </div>
                <div className="h-28 w-64 flex flex-col items-center justify-center">
                    <h1 className="text-xl sm:text-2xl font-bold mb-1">Doing Business</h1>
                    <ul className="list-inside px-5 text-slate-white text-center sm:text-start font-medium">
                        <li><a href="#" >Become a Partner</a></li>
                        <li><a href="#" >List Your Business</a></li>
                        <li><a href="#" >Help</a></li>
                    </ul>
                </div>
            </div>
            <div className="h-32 w-64 p-2 flex flex-col space-y-4 items-center justify-center ">
                <div className="flex flex-row space-x-2 ">
                    <div className="size-8 "><img src='/assets/icon/facebook-fill.svg' alt='facebook icon' /></div>
                    <div className="size-7 mt-0.5 "><img src='/assets/icon/x.svg' alt='facebook icon' /></div>
                    <div className="size-8 mt-0.1"><img src='/assets/icon/instagram-filled.svg' alt='facebook icon' /></div>
                </div>
                <div className="flex flex-col space-y-1 items-center justify-center">
                    <div className="w-40 sm:w-48 p-2"><img src='/assets/img/next-meal-white.png' /></div>
                    <div className="flex flex-row text-sm space-x-3 justify">
                        <div>Terms <span className="font-semibold">|</span> Privacy </div>
                        <div className="size-4 mt-0.5"><img src='/assets/icon/copyright.svg' /> </div> 
                        2024 NextMeal 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;