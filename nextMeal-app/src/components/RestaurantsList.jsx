import { React, useState, useEffect, useCallback } from 'react';
import Header from './Header';
import SearchItem from './SearchItem';
import RestaurantCard from './RestaurantCard';
import MenuIcon from './MenuIcon';
import Breadcrumbs from './BreadCrumbs';
import Footer from './Footer';
import FilterWidget from './FilterWidget';
import SortWidget from './SortWidget';
import { Filter, Sort } from '/src/components/svgs/InterfaceSvg';

import { fetchAllRestaurants } from '../utilities/getData';
import { restaurantFilterOptions } from '../utilities/prefences';
import Error from './Error';
import Slideshow from './Slideshow';

function RestaurantsList() {
    const [restaurants, setRestaurants] = useState([]);
    const [page, setPage] = useState(0);
    const [searchResults, setSearchResults] = useState([]);
    const [isFilterActive, setFilterActive] = useState(false);
    const [isFilterWidgetVisible, setIsFilterWidgetVisible] = useState(false);
    const [error, setError] = useState('');
    const [isSortActive, setSortActive] = useState(false);
    const [isSortWidgetVisible, setIsSortWidgetVisible] = useState(false);
    const [filters, setFilters] = useState({
        cuisines: [],
        openHours: [],
        services: [],
        amenities: []
    });
    const [sort, setSort] = useState({text: 'Ascending', value: '1', icon: 'Ascending'});

    const handleFiltersChange = useCallback((newFilters) => {
        setFilters(newFilters);
    }, []);

    const handleSortChange = useCallback((newSort) => {
        setSort(newSort);
    }, []);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const data = await fetchAllRestaurants(page, filters, sort);
                if (!Array.isArray(data)) {
                    throw new Error('Unexpected data format');
                }
                if (data.length === 0) {
                    setError('No restaurants found for the given filters');
                    return;
                }
                setRestaurants(prevRestaurants => {
                    const combinedRestaurants = page > 1 ? [...prevRestaurants, ...data] : [...data];
                    const uniqueRestaurants = Array.from(new Set(combinedRestaurants.map(item => item._id)))
                        .map(id => combinedRestaurants.find(item => item._id === id));
                    return uniqueRestaurants;
                });
            } catch (error) {
                setError('Could not fetch data. Please check your internet connection');
            }
        };
        if (page === 1) {
            setRestaurants([]);
        }
        fetchRestaurants();
    }, [page, sort, filters]);     

    const handleSearch = (result) => {
        setSearchResults(result);
    };

    const handleShowMore = useCallback(() => {
        setPage(prevPage => prevPage + 1);
    }, []);

    const areFiltersActive = () => {
        return filters.cuisines.length > 0 || filters.openHours.length > 0 || filters.services.length > 0 || filters.amenities.length > 0;
    };  
    
    const isSortOptionActive = () => {
        return sort.text !== null || sort.value !== null || sort.icon !== null;
    };

    const resetFilters = () => {
        setFilters({
            cuisines: [],
            openHours: [],
            services: [],
            amenities: []
        });
        closeFilterWidget();
    };    

    const resetError = () => {
        setError('');
    };

    const closeFilterWidget = () => {
        setIsFilterWidgetVisible(false);
        setFilterActive(false);
    };
    
    const closeSortWidget = () => {
        setIsSortWidgetVisible(false);
        setSortActive(false);
    };

    return (
        <div className="flex flex-col h-lvh w-100 bg-bg_variant2 text-sm sm:text-base font-normal antialiased"> 
           <div className="sticky top-0 z-50 w-full">
                <Header/>
           </div>
           <div className='sticky w-full caret-transparent top-20 md:hidden sm:top-28 md:top-16 z-30 px-1 flex flex-row space-x-14 items-center justify-start caret-pure_white overflow-visible py-2 border-b-2 border-bg_variant2 backdrop-blur bg-opacity-70'> 
                <div className="ml-3 sticky"><MenuIcon /></div>
                <div className="capitalize font-base h-6 w-64"><Breadcrumbs/></div>
            </div>
           <div id='container' className={`flex flex-col mt-1 mb-12 space-y-5 px-5 py-1 sm:px-8 h-fit transition-all duration-500}`}>
                <div className="flex flex-col space-y-3 md:p-1 md:text-center">
                    <h1 className="w-fit text-lg sm:text-lg md:w-full font-semibold">Restaurants in Tanga</h1>
                    <SearchItem onSearch={(result) => {
                        handleSearch(result);
                    }}/>
                </div>
                <div id="offers & events" className="flex flex-col sm:-mx-4 space-y-2.5 md:px-8">
                    <Slideshow />
                    <div className="flex w-fit mx-auto space-x-3"><span className="outline outline-bg_variant1/75 w-3"></span><span className="outline outline-bg_variant1/75 w-8 "></span><span className="outline outline-bg_variant1/75 w-1"></span></div>
                </div>
                {searchResults && searchResults.length > 0 ? (
                    <div className="flex flex-col space-y-1 py-2 ">
                        <h1 className='text-base sm:text-xl font-semibold '>Featured</h1>
                        <div id='container' className='mx-auto'>
                            {searchResults.map((item) => <RestaurantCard key={item._id} restaurant={item}/>)}
                        </div>
                    </div>
                ) : ''}
                {restaurants ? (
                   <div className="flex flex-col md:flex-row md:space-x-6 md:px-5 caret-transparent">
                       <div className="hidden md:block h-fit w-2/12 bg-pure_white rounded-lg px-0.5 py-2">
                            { <FilterWidget onFiltersChange={handleFiltersChange} 
                                onClose={closeFilterWidget}
                                filters={filters}
                                onReset={resetFilters}
                                filterOptions={restaurantFilterOptions}
                            />} 
                       </div>

                        <div className="flex flex-col w-full space-y-2 md:w-10/12">
                            <h1 className='text-base sm:text-lg md:text-base font-semibold'>Browse all</h1>
                            <div>

                            </div>
                            <div className="flex flex-col p-1 justify-end space-y-1.5">
                                <div className="flex h-fit space-x-1 items-center justify-end rounded-md">
                                    <button 
                                        onClick={() => setIsFilterWidgetVisible(!isFilterWidgetVisible)}
                                        className={`md:hidden flex space-x-1 grow-0 border border-light_dark/55 rounded p-1 h-8 w-fit sm:space-x-0 sm:h-6 sm:text-xs items-center justify-center caret-transparent cursor-pointer ${(isFilterWidgetVisible || areFiltersActive()) ? 'bg-bg_variant1 text-pure_white/75 border border-bg_variant1' : ''} focus:text-pure_white/75 focus:bg-bg_variant1`}
                                    >
                                        <span className="font-medium">Filter by</span>
                                        <Filter fill={(isFilterWidgetVisible || areFiltersActive()) ? 'white' : 'black'} height="18" width="16" />
                                    </button>
                                    <button 
                                        onClick={() => setIsSortWidgetVisible(!isSortWidgetVisible)}
                                        className={`flex space-x-1 grow-0 border-2 border-light_dark/55 p-2 h-8 w-fit sm:space-x-0 sm:h-6 sm:text-xs md:text-sm rounded items-center justify-center caret-transparent cursor-pointer ${(isSortWidgetVisible || isSortOptionActive()) ? 'bg-bg_variant1 text-pure_white border border-bg_variant1' : ''} focus:text-pure_white/75 focus:bg-bg_variant1 relative`}
                                    >
                                        <span className="font-medium">Sort by</span>
                                        <Sort fill={(isSortWidgetVisible || isSortOptionActive()) ? 'white' : 'black'} height="18" width="16"/>
                                    </button>
                                </div>
                                {(isFilterWidgetVisible || isFilterActive) && <FilterWidget onFiltersChange={handleFiltersChange} 
                                    onClose={closeFilterWidget}
                                    filters={filters}
                                    onReset={resetFilters}
                                    filterOptions={restaurantFilterOptions}
                                />} 
                                <div className="absolute inset-y-0 right-7 top-3/4 pt-6 z-30">
                                    {(isSortWidgetVisible || isSortActive) && <SortWidget onSortChange={handleSortChange} 
                                        onClose={closeSortWidget}
                                        sort={sort}
                                    />}
                                </div>
                            </div>
                            <div id='container' className='mx-auto w-full grid grid-cols-2 gap-y-2 gap-x-2 sm:grid-cols-3 sm:gap-6 md:gap-x-0 md:gap-y-3 lg:grid-cols-4 lg:gap-5'>
                                {restaurants && (error === '') ? (
                                    restaurants.map((restaurant, i) => <RestaurantCard key={i} restaurant={restaurant} />)
                                ) : '' }
                            </div>    
                            <div className="flex justify-end">
                                {(restaurants.length > 0) && (error === '') && 
                                    <button onClick={handleShowMore} className="md:mr-4 font-medium text-xs md:text-ssm underline w-fit hover:text-bg_variant1">
                                        Show More
                                    </button>
                                }
                            </div>
                            {error !== '' ? <Error message={error} onReset={resetError} onClose={closeFilterWidget}/> : ''}
                        </div>
                    </div>
                ) : <p className="mx-auto font-bold text-sm text-default/55">Loading...</p> }
           </div>
                <Footer />
        </div>
    );
}

export default RestaurantsList;