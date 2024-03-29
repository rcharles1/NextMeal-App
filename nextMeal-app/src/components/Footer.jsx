import { React } from 'react';

function Footer() {
    return (
        <div className="flex flex-col space-y-3 h-fit p-8 justify-center items-center text-pure_white w-100 bg-bg_variant1 text-sm">
            <div className="h-36 w-64 flex flex-col items-center justify-center">
                <h1 className="text-base font-bold mb-2">What's there to Explore?</h1>
                <ul className="list-inside px-5 text-slate-white font-medium text-sm">
                    <li><a href="#" >Top Meals</a></li>
                    <li><a href="#" >Top Drinks & Beverages</a></li>
                    <li><a href="#" >Top Restaurants</a></li>
                    <li><a href="#" >Favorite Cities</a></li>
                    <li><a href="#" >The Local's Choice</a></li>
                </ul>
            </div>
            <div className="h-28 w-64 flex flex-col items-center justify-center">
                <h1 className="text-base font-bold mb-2">Get to Know Us</h1>
                <p className="font-medium text-center">At NextMeal we are devoted to helping you to discover and connect to restaurants that serve your next meal.</p>
            </div>
            <div className="h-28 w-64 flex flex-col items-center justify-center">
                <h1 className="text-base font-bold mb-2">Doing Business</h1>
                <ul className="list-inside px-5 text-slate-white font-medium text-sm">
                    <li><a href="#" >Become a Partner</a></li>
                    <li><a href="#" >List Your Business</a></li>
                    <li><a href="#" >Help</a></li>
                </ul>
            </div>
            <div className="h-32 w-64  p-2 flex flex-col space-y-4 items-center justify-center ">
                <div className="flex flex-row space-x-2 ">
                    <div className="size-8 "><img src='/assets/icon/facebook-fill.svg' alt='facebook icon' /></div>
                    <div className="size-7 mt-0.5 "><img src='/assets/icon/x.svg' alt='facebook icon' /></div>
                    <div className="size-8 mt-0.1"><img src='/assets/icon/instagram-filled.svg' alt='facebook icon' /></div>
                </div>
                <div className="flex flex-col space-y-1 items-center justify-center">
                    <div className="w-40 p-2"><img src='/assets/img/next-meal-white.png' /></div>
                    <div className="flex flex-row space-x-3 justify">
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