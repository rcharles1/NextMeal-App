import { useState, useEffect, useCallback } from 'react';
import SearchItem from '../SearchComponents/SearchItem';
import MealCard from './MealCard';
import BeverageCard from '../BeverageComponents/BeverageCard';
import MealCategory from '../ComplementaryComponents/Category';
import FilterWidget from '../FiltersComponent/FilterWidget';
import SortWidget from '../SortComponent/SortWidget';
import { Filter, Sort } from '/src/components/svgs/InterfaceSvg';
import Error from '../ErrorComponents/Error';

import { fetchMealsOrBeverages } from '../../utilities/getData';
import { beverageFilterOptions, mealFilterOptions } from '../../utilities/preferences';
import { mealMoods, beverageMoods } from '../../utilities/moods';
import { useLocation } from 'react-router-dom';
import PosterCarousel from '../ComplementaryComponents/PostersSlideShow';

function MealListings() {
  const [mealitem, setMealItem] = useState([]);
  const [page, setPage] = useState(0); 
  const [selectedMood, setSelectedMood] = useState(null);
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
    drinkCategory: [],
    mood: []
  });  
  const size = 'sm';

  const location = useLocation();
  const entryPoint = location.state?.entryPoint || 'meals';
  const filterOption = entryPoint === 'meals' ? mealFilterOptions :  beverageFilterOptions;
  const moodOption = entryPoint === 'meals' ? mealMoods : beverageMoods;

  const handleFiltersChange = useCallback((newFilters) => {
    setFilters(newFilters);
  }, []);

  const handleSortChange = useCallback((newSort) => {
    setSort(newSort);
  }, []);

  useEffect(() => {
    const fetchMealsBeverages = async () => {
      // Reset error state
      try {
        const mood = selectedMood !== null ? moodOption[selectedMood].text : null;
        const response = await fetchMealsOrBeverages(page, entryPoint, mood, filters, sort);
  
        const { openCard, data } = response;
  
        // Check for data existence
        if (!data || data.length === 0) {
          setError('No items found for the given filters');
          return;
        }
  
        setCard(openCard);
        // Updates Mealitem state, it also prevents duplication of data items by creating a new array
        setMealItem(prevMealItems => {
          const newMealItems = selectedMood !== null || page === 0
            ? [...data]
            : [...prevMealItems, ...data];
  
          const uniqueMealItems = Array.from(new Set(newMealItems.map(item => item._id)))
            .map(id => newMealItems.find(item => item._id === id));
  
          return uniqueMealItems;
        });
      } catch (error) {
        setError('Something went wrong. Check you network connection and try again');
      }
    };
    fetchMealsBeverages();
  }, [page, entryPoint, selectedMood, filters, sort, moodOption]);  

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
    return filters && (filters.cuisine.length > 0 || filters.mealType.length > 0 || filters.course.length > 0 || filters.beverageType.length > 0 || filters.mood.length > 0);
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
      mood: []
    });
    closeFilterWidget();
  };    

  const resetError = () => {
    setError('');
  }

  const closeFilterWidget = () => {
    setIsFilterWidgetVisible(false);
    setFilterActive(false);
  };

  const closeSortWidget = () => {
    setIsSortWidgetVisible(false);
    setSortActive(false);
  };

  return (
    <div className="flex flex-col h-fit sm:w-full w-100 bg-bg_variant2 text-sm sm:text-base font-normal max-w-[80rem] mx-auto"> 
      <div id='container' className="flex flex-col w-full mb-12 space-y-5 py-1 sm:py-2 md:py-4 md:px-2  transition-all duration-500">
        <div className="w-full p-4 bg-m3 bg-cover caret-transparent ">
          <div className="flex flex-col md:flex-row md:space-y-0 md:justify-between md:p-1 md:w-11/12 md:mx-auto items-center px-5 space-y-2">
            <h1 className="text-3xl w-full lg:text-5xl text-pure_white font-extrabold">Meals & Beverages</h1>
            <div>
              <SearchItem item={'Meals & Beverages'} onSearch={(result, resultCard) => {
                handleSearch(result);
                handleResultCard(resultCard);
              }}/>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col space-y-2 px-5 md:flex-row md:space-y-0 md:space-x-12 caret-transparent">
          <div className="hidden ssm:block h-40 w-2/12">
            <PosterCarousel size="small"/>
          </div>
         <div>
          <h2 className="text-xl ssm:text-2xl md:w-fit font-bold">What&apos;s your mood?</h2>
          <div className="flex flex-row w-full container-snap overflow-x-auto space-x-2 ssm:mt-2 p-3 overflow-hidden">
            <MealCategory onCategorySelect={setSelectedMood} moodOption={moodOption} resetPage={() => setPage(0)}/>
          </div>
         </div>
        </div>

        {searchResults && searchResults.length > 0 ? (
          <div className="flex flex-col space-y-1 px-5 py-2">
            <h1 className='text-xl md:text-base font-bold'>Featured</h1>
            <div id='container' className='mx-auto w-full grid grid-cols-2 gap-y-2 gap-x-2 sm:grid-cols-3 sm:gap-8 lg:gap-5'>
              {(searchResultCard === 'beverages') ? searchResults.map((item) => <BeverageCard key={item._id} beverage={item}/> ) :  searchResults.map((item) => <MealCard key={item._id} meal={item} />)}
            </div>
          </div>
        ) : ''}

      {mealitem ? (
        <div className="flex flex-col md:flex-row md:space-x-6 md:px-5 caret-transparent space-y-1 w-full">
          <div className="hidden md:block h-fit w-2/12 bg-pure_white rounded-lg px-0.5 py-2 sticky top-20 lg:top-28 lg:mt-12">
            { <FilterWidget onFiltersChange={handleFiltersChange} 
              onClose={closeFilterWidget}
              filters={filters}
              onReset={resetFilters}
              filterOptions={filterOption}
            />} 
          </div>

          <div className="flex flex-col w-full space-y-2 h-fit md:w-10/12">
            <h1 className='text-lg font-bold px-5'>Browse all</h1>
            <div className="flex flex-col md:p-0 justify-center md:justify-end space-y-1.5 relative">
              <div className="flex h-fit space-x-2 items-center px-5 md:justify-end ">
                <button 
                  onClick={() => setIsFilterWidgetVisible(!isFilterWidgetVisible)}
                  className={`md:hidden text-base flex space-x-1 sm:space-x-0 grow-0 border border-silver/35 rounded p-1 h-8 w-full sm:h-6  items-center justify-center caret-transparent cursor-pointer ${(isFilterWidgetVisible || areFiltersActive()) ? 'bg-bg_variant1 text-slate_white' : ''} focus:text-slate_white focus:bg-bg_variant1`}
                >
                  <Filter fill={(isFilterWidgetVisible || areFiltersActive()) ? 'white' : 'black'}  height={`${size === 'sm' ? '10' : '20'}`} width={`${size === 'sm' ? '10' : '20'}`}/>
                  <span className="font-medium">Filter by</span>
                </button>
                <button 
                  onClick={() => setIsSortWidgetVisible(!isSortWidgetVisible)}
                  className={`flex text-base space-x-1 grow-0 border-2 border-silver/35 p-2 h-8 w-full sm:space-x-0 md:space-x-1 sm:h-6 md:w-20 sm:font-bold  rounded items-center justify-center caret-transparent cursor-pointer ${(isSortWidgetVisible || isSortOptionActive()) ? 'bg-bg_variant1 text-slate_white border-none' : ''} focus:text-slate_white focus:bg-none relative`}
                >
                  <Sort fill={(isSortWidgetVisible || isSortOptionActive()) ? 'white' : 'black'}  height={`${size === 'sm' ? '10' : '20'}`} width={`${size === 'sm' ? '10' : '20'}`}/>
                  <span className="font-medium ssm:text-sm">Sort by</span>
                </button>
              </div>
              {(isFilterWidgetVisible || isFilterActive) && <FilterWidget onFiltersChange={handleFiltersChange} 
                onClose={closeFilterWidget}
                filters={filters}
                onReset={resetFilters}
                filterOptions={filterOption}
              />} 
              <div className="absolute top-10 right-2 ssm:inset-y-0 ssm:right-20 ssm:top-3/4 z-30">
                {(isSortWidgetVisible || isSortActive) && <SortWidget onSortChange={handleSortChange} 
                  onClose={closeSortWidget}
                  sort={sort}
                />}
              </div>
            </div>
            <div id='container' className='mx-auto px-5 w-full grid grid-cols-2 gap-y-3 gap-x-2 ssm:px-0 ssm:grid-cols-3 ssm:gap-x-4 ssm:gap-y-4 lg:grid-cols-4 lg:gap-x-0 lg:px-4'>
              {error === '' && (
                (entryPoint === 'beverages' && card === 'beverages') 
                  ? mealitem.map((item) => <BeverageCard key={item._id} beverage={item}/> )
                  : (entryPoint === 'meals') && mealitem.map((item) => <MealCard key={item._id} meal={item} />)
              )}
            </div>
            <div className="flex justify-end">
              {(mealitem.length > 0) && (error === '') && 
                <button onClick={handleShowMore} className="mr-6 md:mr-20 font-medium md:text-sm hover:underline w-fit ">
                  Show More
                </button>
              }
            </div>
            {error !== '' ? <Error message={error} onReset={resetError} onClose={closeFilterWidget}/> : ''}
          </div>
        </div>
      ) : <p className="mx-auto font-bold text-sm text-default/55"> Fetching data. Please wait...</p>}
    </div>
  </div>
  );
}

export default MealListings;