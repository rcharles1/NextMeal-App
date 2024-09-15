
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <div className="flex flex-col space-y-6 h-fit p-8 ssm:p-6 justify-center items-center text-slate_white w-full bg-bg_variant1 caret-transparent text-base ssm:text-sm subpixel-antialiased">
            <div className="flex flex-col space-y-12 ssm:flex-row ssm:space-y-0 ssm:space-x-4">
                <div className="h-fit w-80 p-2 sm:h-fit sm:w-64 flex flex-col items-center mx-auto justify-center ssm:items-start">
                    <h1 className="text-2xl ssm:text-xl font-bold mb-1">Get to Know Us</h1>
                    <p className="font-medium ssm:px-1 text-center sm:text-start text-lg"> At NextMeal we are devoted to helping you to discover and connect to restaurants that serve your next meal.</p>
                    <div className="mt-4 p-0.5 w-fit mx-auto ssm:mx-0">
                        <NavLink to={`/about`} className="p-2 px-3.5 rounded-2xl outline outline-slate_white font-semibold text-base text-slate_white">Learn More</NavLink>
                    </div>
                </div>
                <div className="h-fit w-80 sm:h-fit ssm:w-64 flex flex-col items-center justify-center sm:items-start">
                    <h1 className="text-2xl ssm:text-xl sm:w-64 font-bold mb-1">What's there to Explore</h1>
                    <ul className="list-inside md:px-1 underline w-56 text-center sm:text-start text-slate-white text-lg font-medium">
                        <li><NavLink to={'/resturantListings'} >Find the Best Restaurants</NavLink></li>
                        <li><NavLink to={'/meallistings'} >Discover Top Meal Picks</NavLink></li>
                        <li><NavLink  to={'/meallistings'} >Discover the Best Beverages</NavLink></li>
                    </ul>
                </div>
                <div className="h-28 w-80 sm:h-fit sm:w-64 flex flex-col items-center justify-center sm:items-start">
                    <h1 className="text-2xl sm:text-xl font-bold mb-1">Doing Business</h1>
                    <ul className="list-inside px-5 md:px-1 underline text-lg text-slate-white text-center sm:text-start font-medium">
                        <li><NavLink  to={'/stakeholders'} >Become a Partner</NavLink></li>
                        <li><NavLink  to={'/stakeholders#whatyoudo'} >List Your Business</NavLink></li>
                        <li><NavLink  to={'/stakeholders#joinus'} >Support</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="h-32 w-64 p-2 flex flex-col space-y-4 items-center justify-center md:space-y-0">
                <div className="flex-row space-x-2 flex">
                    <div className="size-8 md:size-6"><img src='/assets/icon/facebook-fill.svg' alt='facebook icon' /></div>
                    <div className="size-7 md:size-5 mt-0.5 "><img src='/assets/icon/x.svg' alt='facebook icon' /></div>
                    <div className="size-8 md:size-6 mt-0.1"><img src='/assets/icon/instagram-filled.svg' alt='facebook icon' /></div>
                </div>
                <div className="flex flex-col space-y-1 items-center justify-center">
                    <div className="w-40 ssm:w-48 p-2"><img src='/assets/img/next-meal-white.png' alt="logo" /></div>
                    <div className="flex flex-row text-sm space-x-1 justify items-center">
                        <div>Terms <span className="font-semibold">|</span> Privacy </div>
                        <div className="flex space-x-0.5 items-center">
                            <div className="size-4"><img src='/assets/icon/copyright.svg' /> </div> 
                            <p>2024 NextMeal </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;