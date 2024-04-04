import { React } from 'react';
import Header from './Header';
import SearchRestaurant from './SearchRestaurant';
import MealCard from './MealCard';
import MenuIcon from './MenuIcon';
import Breadcrumbs from './BreadCrumbs';

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
        <div className="flex flex-col space-y-0 h-lvh w-100 bg-bg_variant2 text-sm font-normal"> 
           <div className="sticky top-0 z-10 w-full">
                <Header/>
           </div>
           <div id='container' className="flex flex-col space-y-5 px-5 py-1 h-fit">
                <div className='sticky top-20 sm:top-28 z-10 flex flex-row space-x-3 items-center justify-start caret-bg_variant2 overflow-hidden py-2 border-b-2 border-gray backdrop-blur bg-opacity-70'> 
                    <MenuIcon />
                    <div className="px-2 capitalize h-6 w-72"><Breadcrumbs/></div>
                </div>
                <div className="flex flex-col space-y-2">
                    <h1 className="w-fit text-2xl font-bold">Meals</h1>
                    <SearchRestaurant />
                </div>
                <div className="flex flex-col space-y-2 caret-bg_variant2">
                    <div className="flex flex-row space-x-4 mx-auto p-3 overflow-hidden">
                        {categories.map((category, index) => (
                            <div key={index} className=" ">
                                <button className="mt-1 font-semibold text-faint_default/60 cursor-pointer text-center">{category.text}</button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col space-y-1">
                    <h1 className='text-base font-semibold'>Featured</h1>
                    <div id='container' className='p-3 grid grid-cols-2 gap-4'>
                        <MealCard />
                    </div>
                </div>
                <div className="flex flex-col space-y-1">
                    <h1 className='text-base font-semibold '>All Categories</h1>
                    <div id='container' className='p-3 grid grid-cols-2 gap-4'>
                        <MealCard />
                        <MealCard />
                        <MealCard />
                        <MealCard />
                    </div>
                    <button className="ml-64 px-3 w-fit">Show More</button>
                </div>

           </div>

        </div>
    );
}

export default MealsList;