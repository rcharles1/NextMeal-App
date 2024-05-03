import { React, useState, useEffect } from 'react';
import Header from './Header';
import SearchRestaurant from './SearchRestaurant';
import MealCard from './MealCard';
import BeverageCard from './BeverageCard';
import MenuIcon from './MenuIcon';
import Breadcrumbs from './BreadCrumbs';
import MealCategory from './Category';
import Footer from './Footer';

import { fetchMealsOrBeverages } from '../utilities/getData';
import { useLocation } from 'react-router-dom';

function MealsList() {
    const [mealitem, setMealItem] = useState([]);
    const [page, setPage] = useState(0); 
    const [selectedCategory, setSelectedCategory] = useState(null);

    const location = useLocation();
    const entryPoint = location.state.entryPoint;

    useEffect(() => {
        const fetchMealsBeverages = async () => {
            try {
                const data = await fetchMealsOrBeverages(page, entryPoint);
                setMealItem(prevMealItems => {
                    let newMealItems = [...prevMealItems];
                    let ids = new Set(newMealItems.map(item => item._id));
                    for (let item of data) {
                        if (!ids.has(item._id)) {
                            newMealItems.push(item);
                            ids.add(item._id);
                        }
                    }
                    return newMealItems;
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchMealsBeverages();
    }, [page, entryPoint]);    
    
    const handleShowMore = () => {
        setPage(prevPage => prevPage + 1);
    }

    return (
        <div className="flex flex-col h-lvh w-100 bg-bg_variant2 text-sm font-normal"> 
           <div className="sticky top-0 z-50 w-full">
                <Header/>
           </div>
           <div className='sticky w-full caret-transparent top-20 sm:top-28 z-50 px-1 flex flex-row space-x-14 items-center justify-start caret-pure_white overflow-visible py-2 border-b-2 border-bg_variant2 backdrop-blur bg-opacity-70'> 
                <div className="ml-3 sticky"><MenuIcon /></div>
                <div className="capitalize font-base h-6 w-fit"><Breadcrumbs/></div>
            </div>
           <div id='container' className="flex flex-col w-full mb-12 space-y-5  py-1 h-fit transition-all duration-500">
                <div className="flex flex-col px-5 space-y-2">
                    <h1 className="w-fit text-2xl font-bold">Meals & Beverages</h1>
                    <SearchRestaurant />
                </div>
                <div className="flex flex-col space-y-2 px-5 caret-transparent">
                    <h2 className="text-base font-semibold ">What's your mood?</h2>
                    <div className="flex flex-row w-full space-x-2 p-3 overflow-hidden">
                       <MealCategory />
                    </div>
                </div>
                <div className="flex flex-col space-y-1 px-5">
                    <h1 className='text-base font-semibold'>Featured</h1>
                    <div id='container' className='-mx-2.5'>
                       
                    </div>
                </div>
                {mealitem ? (
                    <div className="flex flex-col space-y-1 w-full">
                        <h1 className='text-base font-semibold px-5'>All To Explore</h1>
                        <div id='container' className='mx-auto w-96 grid grid-cols-2 gap-y-4 gap-x-2 sm:grid-cols-3 sm:gap-8 lg:gap-5'>
                           {entryPoint === 'meals' ? mealitem.map((item) => <MealCard key={item._id} meal={item} />) :  mealitem.map((item) => <BeverageCard key={item._id} beverage={item}/>)}
                        </div>
                        {mealitem.length > 0 && <button onClick={handleShowMore} className="ml-72 font-medium text-sm underline px-3 w-fit">Show More</button>}
                    </div>
                ) : <p className="mx-auto font-bold text-sm text-default/55"> Fetching data. Please wait...</p>}
           </div>
             <Footer />
        </div>
    );
}

export default MealsList;