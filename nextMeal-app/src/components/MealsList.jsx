import { React, useState, useEffect, useCallback } from 'react';
import Header from './Header';
import SearchItem from './SearchItem';
import MealCard from './MealCard';
import BeverageCard from './BeverageCard';
import MenuIcon from './MenuIcon';
import Breadcrumbs from './BreadCrumbs';
import MealCategory from './Category';
import FilterWidget from './FilterWidget';
import SortWidget from './SortWidget';
import { Filter, Sort } from '/src/components/svgs/InterfaceSvg';
import Footer from './Footer';

import { fetchMealsOrBeverages } from '../utilities/getData';
import { beverageFilterOptions, mealFilterOptions } from '../utilities/prefences';
import { moods } from '../utilities/moods';
import { useLocation } from 'react-router-dom';


function MealsList() {
  const [mealitem, setMealItem] = useState([]);
  const [page, setPage] = useState(0); 
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [card, setCard] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultCard, setSearchResultCard] = useState(null);
  const [isFilterActive, setFilterActive] = useState(false);
  const [isFilterWidgetVisible, setIsFilterWidgetVisible] = useState(false);
  const [error, setError] = useState('');
  const [isSortActive, setSortActive] = useState(false);
  const [isSortWidgetVisible, setIsSortWidgetVisible] = useState(false);
  const [sort, setSort] = useState({text: 'Ascending', value: '1', icon: 'Ascending'});
  const [filters, setFilters] = useState({
    cuisine: [],
    mealType: [],
    course: [],
    beverageType: [],
    category: []
  });

  const location = useLocation();
  const entryPoint = location.state?.entryPoint || 'meals';
  const filterOption = entryPoint === 'meals' ? mealFilterOptions :  beverageFilterOptions;

  const handleFiltersChange = useCallback((newFilters) => {
    setFilters(newFilters);
  }, []);

  const handleSortChange = useCallback((newSort) => {
    setSort(newSort);
  }, []);

  useEffect(() => {
    const fetchMealsBeverages = async () => {
      try {
        const category = selectedCategory !== null ? moods[selectedCategory].text : null;
        const { openCard, data} = await fetchMealsOrBeverages(page, entryPoint, category, filters, sort);
        setCard(openCard);
        // Updates Mealitem state, it also prevents duplication of data items by creating a new array
        setMealItem(prevMealItems => {
          const newMealItems = selectedCategory !== null || page === 0
            ? [...data]
            : [...prevMealItems, ...data];
          
          const uniqueMealItems = Array.from(new Set(newMealItems.map(item => item._id)))
            .map(id => newMealItems.find(item => item._id === id));
          
          return uniqueMealItems;
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchMealsBeverages();
  }, [page, entryPoint, selectedCategory, filters, sort ]);

  const handleSearch = (result) => {
    setSearchResults(result);
  };

  const handleResultCard = (resultCard) => {
    setSearchResultCard(resultCard);
  }; 
   
  const handleShowMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const areFiltersActive = () => {
    return filters.cuisine.length > 0 || filters.mealType.length > 0 || filters.course.length > 0 || filters.beverageType.length > 0 || filters.category.length > 0;
  }; 

  const isSortOptionActive = () => {
    return sort.text !== null || sort.value !== null || sort.icon !== null;
  };

  const resetFilters = () => {
    setFilters({
      cuisine: [],
      mealType: [],
      course: [],
      beverageType: [],
      category: []
    });
    closeFilterWidget();
  };    

  const restError = () => {
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
    <div className="flex flex-col h-lvh sm:w-full w-100 bg-bg_variant2 text-sm sm:text-base font-normal"> 
      <div className="sticky top-0 z-50 w-full">
        <Header/>
      </div>
      <div className='sticky w-full caret-transparent top-20 md:hidden sm:top-28 md:top-20 z-50 px-1 md:px-3 flex flex-row space-x-14 items-center justify-start caret-pure_white overflow-visible py-2 border-b-2 border-bg_variant2 backdrop-blur bg-opacity-70'> 
        <div className="ml-3 sticky"><MenuIcon /></div>
        <div className="capitalize font-base h-6 w-fit"><Breadcrumbs/></div>
      </div>
      <div id='container' className="flex flex-col w-full mb-12 space-y-5 py-1 sm:py-2 md:py-4 md:px-2 h-fit transition-all duration-500">
        <div className="flex flex-col px-5 space-y-2">
          <h1 className="w-fit text-2xl sm:text-3xl md:text-xl font-bold">Meals & Beverages</h1>
          <SearchItem item={'Meals & Beverages'} onSearch={(result, resultCard) => {
            handleSearch(result);
            handleResultCard(resultCard);
          }}/>
        </div>

        <div className="flex flex-col space-y-2 px-5 caret-transparent">
          <h2 className="text-base sm:text-2xl md:text-base font-bold ">What's your mood?</h2>
          <div className="flex flex-row w-full space-x-2 p-3 overflow-hidden">
              <MealCategory onCategorySelect={setSelectedCategory} resetPage={() => setPage(0)}/>
          </div>
        </div>

        {searchResults && searchResults.length > 0 ? (
          <div className="flex flex-col space-y-1 px-5 py-2">
            <h1 className='text-base sm:text-2xl md:text-base font-semibold'>Featured</h1>
            <div id='container' className='mx-auto w-full grid grid-cols-2 gap-y-2 gap-x-2 sm:grid-cols-3 sm:gap-8 lg:gap-5'>
              {(searchResultCard === 'beverages') ? searchResults.map((item) => <BeverageCard key={item._id} beverage={item}/> ) :  searchResults.map((item) => <MealCard key={item._id} meal={item} />)}
            </div>
          </div>
        ) : ''}

      {mealitem ? (
        <div className="flex flex-col space-y-1 w-full">
          <h1 className='text-base sm:text-lg md:text-sm font-semibold px-5'>Browse all</h1>
          <div className="flex flex-col p-1 justify-end space-y-1.5">
            <div className="flex h-fit space-x-1 items-center justify-end mr-4 rounded-md">
              <button 
                onClick={() => setIsFilterWidgetVisible(!isFilterWidgetVisible)}
                className={`flex space-x-1 sm:space-x-2 grow-0 border rounded p-1 h-8 w-fit sm:h-12 md:h-fit md:p-2 items-center justify-center caret-transparent cursor-pointer ${(isFilterWidgetVisible || areFiltersActive()) ? 'bg-bg_variant1 text-pure_white/75' : ''} focus:text-pure_white/75 focus:bg-bg_variant1`}
              >
                <span className="font-medium">Filter by</span>
                <Filter fill={(isFilterWidgetVisible || areFiltersActive()) ? 'white' : 'black'} height="18" width="16" />
              </button>
              <button 
                onClick={() => setIsSortWidgetVisible(!isSortWidgetVisible)}
                className={`flex space-x-1 sm:space-x-2 grow-0 border p-2 h-8 sm:h-12 w-fit md:h-fit md:p-2 rounded items-center justify-center caret-transparent cursor-pointer ${(isSortWidgetVisible || isSortOptionActive()) ? 'bg-bg_variant1 text-pure_white/75' : ''} focus:text-pure_white/75 focus:bg-bg_variant1`}
              >
                <span className="font-medium">Sort by</span>
                <Sort fill={(isSortWidgetVisible || isSortOptionActive()) ? 'white' : 'black'} height="18" width="16"/>
              </button>
            </div>
            {(isFilterWidgetVisible || isFilterActive) && <FilterWidget onFiltersChange={handleFiltersChange} 
              onClose={closeFilterWidget}
              filters={filters}
              onReset={resetFilters}
              filterOptions={filterOption}
            />} 
            {(isSortWidgetVisible || isSortActive) && <SortWidget onSortChange={handleSortChange} 
              onClose={closeSortWidget}
              sort={sort}
            />}
          </div>
          <div id='container' className='mx-auto px-2.5 w-96 grid grid-cols-2 gap-y-2 gap-x-2 sm:grid-cols-3 sm:gap-8 lg:gap-5'>
              {(entryPoint === 'beverages' || entryPoint === 'meals') && (card === 'beverages') ? mealitem.map((item) => <BeverageCard key={item._id} beverage={item}/> ) :  mealitem.map((item) => <MealCard key={item._id} meal={item} />)}
          </div>
          {mealitem.length > 0 && <button onClick={handleShowMore} className="ml-72 font-medium text-xs underline px-3 w-fit hover:text-bg_variant1">Show More</button>}
      </div>
      ) : <p className="mx-auto font-bold text-sm text-default/55"> Fetching data. Please wait...</p>}
    </div>
      <Footer />
    </div>
  );
}

export default MealsList;