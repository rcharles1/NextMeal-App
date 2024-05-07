import { React, useState, useEffect } from 'react';
import Header from './Header';
import SearchItem from './SearchItem';
import RestaurantCard from './RestaurantCard';
import MenuIcon from './MenuIcon';
import Breadcrumbs from './BreadCrumbs';
import Footer from './Footer';

import { fetchAllRestaurants } from '../utilities/getData';
import RestaurantCarousel from './Carousel';

function RestaurantsList() {
    const [restaurants, setRestaurants] = useState([]);
    const [page, setPage] = useState(0);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const data = await fetchAllRestaurants(page);
                setRestaurants(prevRestaurants => {
                    const newRestaurants = [...prevRestaurants, ...data];
                    const uniqueRestaurants = Array.from(new Set(newRestaurants.map(item => item._id)))
                      .map(id => newRestaurants.find(item => item._id === id));
                  
                    return uniqueRestaurants;
                  });
                  
            } catch (error) {
                console.error('Error fetching restaurants:', error);
            }
        };
        fetchRestaurants();
    }, [page]);

    const handleSearch = (result) => {
        setSearchResults(result);
    }
    const handleShowMore = () => {
        setPage(prevPage => prevPage + 1);
    }

    return (
        <div className="flex flex-col h-lvh w-100 bg-bg_variant2 text-sm font-normal"> 
           <div className="sticky top-0 z-50 w-full">
                <Header/>
           </div>
           <div className='sticky w-full caret-transparent top-20 sm:top-28 z-30 px-1 flex flex-row space-x-14 items-center justify-start caret-pure_white overflow-visible py-2 border-b-2 border-bg_variant2 backdrop-blur bg-opacity-70'> 
                <div className="ml-3 sticky"><MenuIcon /></div>
                <div className="capitalize font-base h-6 w-fit"><Breadcrumbs/></div>
            </div>
           <div id='container' className={`flex flex-col mt-1 mb-12 space-y-5 px-5 py-1 h-fit transition-all duration-500}`}>
                <div className="flex flex-col space-y-3">
                    <h1 className="w-fit text-2xl font-bold">Restaurants</h1>
                    <SearchItem onSearch={(result) => {
                        handleSearch(result);
                    }}/>
                </div>
                <div id="offers & events" className="flex flex-col space-y-2">
                    <RestaurantCarousel />
                </div>
                {searchResults && searchResults.length > 0 ? (
                    <div className="flex flex-col space-y-1 py-2 ">
                        <h1 className='text-base font-semibold '>Featured</h1>
                        <div id='container' className='mx-auto'>
                            {searchResults.map((item) => <RestaurantCard key={item._id} restaurant={item}/>)}
                        </div>
                    </div>
                ) : ''}
                {restaurants ? (
                    <div className="flex flex-col w-full space-y-1">
                        <h1 className='text-base font-semibold '>Browse all</h1>
                        <div id='container' className='mx-auto w-full grid grid-cols-2 gap-y-2 gap-x-2 sm:grid-cols-3 sm:gap-8 lg:gap-5'>
                            {restaurants.map((restaurant, i) => <RestaurantCard key={i} restaurant={restaurant} />)}
                        </div>
                        {restaurants.length > 0 && <button onClick={handleShowMore} className="ml-72 font-medium text-xs underline w-fit hover:text-bg_variant1">Show More</button>}
                    </div>
                ) : <p className="mx-auto font-bold text-sm text-default/55">Loading...</p> }
           </div>
                <Footer />
        </div>
    );
}

export default RestaurantsList;