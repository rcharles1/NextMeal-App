import React, { useState, useEffect } from 'react';
import Header from './Header';
import MenuIcon from './MenuIcon';
import Breadcrumbs from './BreadCrumbs';
import { getMyFavorites } from '../utilities/getData';

function MyFavorites() {
    const [active, setActive] = useState('Restaurants');
    const [error, setError] = useState(null);
    const [googleId, setGoogleId] = useState(null);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        setGoogleId(userData?.googleId);
    }, []);

    useEffect(() => {
        setError(null);
        const favoriteItems = async () => {
            try {
                const response = await getMyFavorites(googleId, active );
                console.log(response);
                
            } catch(error) {
                setError(error);
            }
        };
        favoriteItems();
    },[googleId, active])

    const data = {
        'Restaurants': ['Restaurant 1', 'Restaurant 2', 'Restaurant 3'], 
        'Meals': ['Meal 1', 'Meal 2', 'Meal 3'], 
        'Beverages': ['Beverage 1', 'Beverage 2', 'Beverage 3'] 
    };

    return (
        <div className="antialiased flex flex-col h-fit sm:p-6 justify-center items-center text-default/75 w-100  caret-transparent text-base sm:text-xs">
            <div className="sticky top-0 z-50 w-full">
                <Header/>
            </div>
            <div className='sticky w-full caret-transparent top-20 md:hidden sm:top-28 md:top-20 z-50 px-1 md:px-3 flex flex-row space-x-14 items-center justify-start caret-pure_white overflow-visible py-2 border-b-2 border-bg_variant2 backdrop-blur bg-opacity-70'> 
                <div className="ml-3 sticky"><MenuIcon /></div>
                <div className="capitalize font-base h-6 w-fit"><Breadcrumbs/></div>
            </div>
            <div id="container" className="flex flex-col sm:flex-row sm:items-top sm:space-y-0 space-y-6 justify-center px-10 sm:px-0 sm:flow-row sm:space-x-4 sm:items-top w-full text-start">
                <h1 className="text-xl font-bold">My Favorites</h1>
                <div className="rounded-xl w-full h-fit bg-bg_variant1/5 p-1 flex justify-center items-center space-x-5 font-semibold caret-transparent cursor-pointer">
                    <a href='#' onClick={() => setActive('restaurant')} className={`h-8 px-2 rounded-lg items-center pt-1 ${active === 'restaurant' ? 'bg-bg_variant1 text-pure_white/75 ': ''}:bg-gray/5`}>Restaurants</a>
                    <a href='#' onClick={() => setActive('meal')} className={`h-8 p-2 rounded-md items-center pt-1  ${active === 'meal' ? 'bg-bg_variant1/95 text-pure_white/75 ': ''}:bg-gray/5`}>Meals</a>
                    <a href='#' onClick={() => setActive('beverage')} className={`h-8 px-2 rounded-lg items-center pt-1  ${active === 'beverage' ? 'bg-bg_variant1/85 text-pure_white/75': ''}:bg-gray/5`}>Beverages</a>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
}

export default MyFavorites;