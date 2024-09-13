import React, { useState, useEffect, useCallback } from 'react';
import SearchItem from '../SearchComponents/SearchItem';
import RestaurantCard from './RestaurantCard';
import FilterWidget from '../FiltersComponent/FilterWidget';
import SortWidget from '../SortComponent/SortWidget';
import { Filter, Sort } from '/src/components/svgs/InterfaceSvg';

import { fetchAllRestaurants } from '../../utilities/getData';
import { restaurantFilterOptions } from '../../utilities/preferences';
import Error from '../ErrorComponents/Error';
import Slideshow from '../ComplementaryComponents/Slideshow';

function RestaurantListings() {
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
    const size = 'sm'; // Controls icon size

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
        <div className="flex flex-col h-fit w-100 bg-bg_variant2 text-sm sm:text-base font-normal antialiased"> 
           <div id='container' className={`flex flex-col mt-1 mb-12 space-y-5 px-5 py-1 ssm:px-2 h-fit transition-all duration-500}`}>          
                <div className="w-full p-4 bg-r2 bg-cover bg-right-bottom">
                    <div className="flex flex-col py-1.5 md:flex-row md:space-y-0 md:justify-between md:p-1 md:w-11/12 md:mx-auto items-center md:px-5 space-y-2">
                        <h1 className="w-full md:w-fit text-slate_white text-3xl sm:text-3xl md:text-xl font-semibold">Restaurants</h1>
                        <div>
                            <SearchItem onSearch={(result) => {
                                handleSearch(result);
                            }}/>
                        </div>
                    </div>
                </div>
                <div id="offers & events" className="flex flex-col sm:-mx-4 space-y-2.5 md:px-8">
                    <Slideshow />
                    <div className="flex w-fit mx-auto space-x-3"><span className="outline outline-bg_variant1/75 w-3"></span><span className="outline outline-bg_variant1/75 w-8 "></span><span className="outline outline-bg_variant1/75 w-1"></span></div>
                </div>
                {searchResults && searchResults.length > 0 ? (
                    <div className="flex flex-col space-y-1 py-2 ssm:px-6">
                        <h1 className='text-base sm:text-xl font-bold tracking-tight px-6 '>Featured</h1>
                        <div id='container' className='mx-auto p-.5 w-full grid grid-cols-2 gap-y-2 ssm:w-11/12 ssm:grid-cols-3 ssm:px-4 ssm:gap-x-2 ssm:gap-y-4'>
                            {searchResults.map((item) => <RestaurantCard key={item._id} restaurant={item}/>)}
                        </div>
                    </div>
                ) : ''}
                {restaurants ? (
                   <div className="flex flex-col ssm:flex-row ssm:space-x-6 ssm:px-5 caret-transparent ">
                       <div className="hidden ssm:block h-fit w-2/12 bg-pure_white rounded-lg px-0.5 py-2 sticky top-20 lg:top-24">
                            { <FilterWidget onFiltersChange={handleFiltersChange} 
                                onClose={closeFilterWidget}
                                filters={filters}
                                onReset={resetFilters}
                                filterOptions={restaurantFilterOptions}
                            />} 
                       </div>

                        <div className="flex flex-col w-full space-y-2 md:w-10/12">
                            <h1 className='text-base sm:text-lg md:text-base font-semibold'>Browse all</h1>
                            <div className="flex flex-col p-1 justify-center md:justify-end space-y-1.5">
                                <div className="flex h-fit space-x-1 items-center justify-center md:justify-end rounded-md">
                                    <button 
                                        onClick={() => setIsFilterWidgetVisible(!isFilterWidgetVisible)}
                                        className={`md:hidden flex space-x-1 grow-0 border border-silver/35 rounded p-1 h-8 w-6/12 sm:space-x-0 sm:h-6 sm:text-xs items-center justify-center caret-transparent cursor-pointer ${(isFilterWidgetVisible || areFiltersActive()) ? 'bg-bg_variant1 text-text-slate_white border border-none' : ''} focus:text-text-slate_white focus:bg-none`}
                                    >
                                        <span className="font-medium">Filter by</span>
                                        <Filter fill={(isFilterWidgetVisible || areFiltersActive()) ? 'white' : 'black'}  height={`${size === 'sm' ? '10' : '20'}`} width={`${size === 'sm' ? '10' : '20'}`} />
                                    </button>
                                    <button 
                                        onClick={() => setIsSortWidgetVisible(!isSortWidgetVisible)}
                                        className={`flex space-x-1 grow-0 border-2 border-silver/35 p-2 h-8 w-6/12 sm:space-x-0 md:space-x-1 sm:h-6 sm:text-xs md:w-20 sm:font-bold md:text-sm rounded items-center justify-center caret-transparent cursor-pointer ${(isSortWidgetVisible || isSortOptionActive()) ? 'bg-bg_variant1 text-slate_white border-none' : ''} focus:text-slate_white focus:bg-none relative`}
                                    >
                                        <Sort fill={(isSortWidgetVisible || isSortOptionActive()) ? 'white' : 'black'} />
                                        <span className="font-medium">Sort by</span>
                                    </button>
                                    <div className="absolute inset-y-0 right-7 top-3/4 pt-6 md:pt-0 md:-mt-10 h-fit w-fit z-30">
                                        {(isSortWidgetVisible || isSortActive) && <SortWidget onSortChange={handleSortChange} 
                                            onClose={closeSortWidget}
                                            sort={sort}
                                        />}
                                    </div>
                                </div>
                                {(isFilterWidgetVisible || isFilterActive) && <FilterWidget onFiltersChange={handleFiltersChange} 
                                    onClose={closeFilterWidget}
                                    filters={filters}
                                    onReset={resetFilters}
                                    filterOptions={restaurantFilterOptions}
                                />} 
                            </div>
                            <div id='container' className='mx-auto w-full grid grid-cols-2 gap-y-2 gap-x-2 ssm:grid-cols-3 ssm:gap-6 ssm:gap-x-0 ssm:gap-y-3 lg:px-5 lg:gap-y-5 xl:grid-cols-4 xl:gap-x-2 '>
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
        </div>
    );
}

export default RestaurantListings;