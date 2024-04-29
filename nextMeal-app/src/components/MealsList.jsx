import { React } from 'react';
import Header from './Header';
import SearchRestaurant from './SearchRestaurant';
import MealCard from './MealCard';
import MenuIcon from './MenuIcon';
import Breadcrumbs from './BreadCrumbs';
import MealCategory from './Category';
import Footer from './Footer';

const categories = [
    {
        text: 'Drinks'
    },
    {
        text: 'Breakfast'
    },
    {
        text: 'Lunch'
    },
    {
        text: 'Dinner'
    },
    {
        text: 'Quick Eats'
    },

]

function MealsList() {
    return (
        <div className="flex flex-col h-lvh w-100 bg-bg_variant2 text-sm font-normal"> 
           <div className="sticky top-0 z-50 w-full">
                <Header/>
           </div>
           <div className='sticky w-full caret-transparent top-20 sm:top-28 z-50 px-1 flex flex-row space-x-14 items-center justify-start caret-pure_white overflow-visible py-2 border-b-2 border-bg_variant2 backdrop-blur bg-opacity-70'> 
                <div className="ml-3 sticky"><MenuIcon /></div>
                <div className="capitalize font-base h-6 w-fit"><Breadcrumbs/></div>
            </div>
           <div id='container' className="flex flex-col mt mb-12 space-y-5 px-5 py-1 h-fit transition-all duration-500">
                <div className="flex flex-col space-y-2">
                    <h1 className="w-fit text-2xl font-bold">Meals</h1>
                    <SearchRestaurant />
                </div>
                <div className="flex flex-col space-y-2 caret-bg_variant2">
                    <h2 className="text-base font-semibold ">What's your mood?</h2>
                    <div className="flex flex-row  w-full space-x-2  p-3 overflow-hidden">
                       <MealCategory />
                    </div>
                </div>
                <div className="flex flex-col space-y-1">
                    <h1 className='text-base font-semibold'>Featured</h1>
                    <div id='container' className='-mx-2.5'>
                       
                    </div>
                </div>
                <div className="flex flex-col space-y-1">
                    <h1 className='text-base font-semibold '>All Categories</h1>
                    <div id='container' className='-mx-2.5'>
                        <MealCard />
                    </div>
                    <button className="ml-64 px-3 w-fit">Show More</button>
                </div>
           </div>
             <Footer />
        </div>
    );
}

export default MealsList;