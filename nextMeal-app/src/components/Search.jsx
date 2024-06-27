import React, { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { search } from '../utilities/searchUtitlity';

import { Search, PreviousIcon, DirectionIcon } from '/src/components/svgs/InterfaceSvg';
import SearchResultCardForRestaurant from './SearchComponents/RestaurantSearchCard';
import SearchResultCardForMeal from './SearchComponents/MealSearchCard';
import SearchResultCardForBeverage from './SearchComponents/BeverageSearchCard';

function SearchComponent() {
  const location = useLocation();
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [term, setTerm] = useState('');
  const [validTerm, setValidTerm] = useState('');
  const [recentSearch, setRecentSearch] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [resultCard, setResultCard] = useState(null);
  const [searchHistory, setSearchHistory] = useState(null);

  const handleSearch = async () => {
    try {
        if (validTerm.trim()) {
            const { data, resultCategory } = await search(validTerm);
            setSearchResults(data.results[0].data);
            setResultCard(resultCategory);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log('Enter key pressed ✅');
      handleSearch();
    }
  };

  useEffect(() => {
    try {
      const history = JSON.parse(localStorage.getItem('Recent Search'));
      const uniqueHistory = [...new Set(history)];
      setSearchHistory(uniqueHistory);
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }

    handleSearch();
  }, [validTerm]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setTerm(inputValue);

    // Check if inputValue is a non-empty string (after trimming whitespace)
    if (typeof inputValue === 'string' && inputValue.trim()) {
        setValidTerm(inputValue);
    } else {
        alert('Invalid input');
    }
};

  const handleClickSubmit = () => {
    setValidTerm(term);
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const showInputField = location.pathname === '/'; 

  return (
    <div>
      <button onClick={handleOpenDialog} className={`${isDialogOpen ? 'collapse' : 'block'} caret-transparent flex flex-row md:w-96 space-x-1 md:space-x-1.5 md:p-1.5 md:px-3 md:pt-1.5 px-3 p-1 rounded-2xl outline outline-silver/30`}>
        <Search fill={'silver'} height="25" width="25" />
        <input
          type="text"
          placeholder="Places to dine, meals to taste, drinks to have..."
          className="p-0.5 px-1 w-32 sm:w-4 md:w-96 md:mt-0.5 text-base sm:text-sm text-default/75 rounded-lg caret-transparent font-semibold focus:outline-none"
        />
      </button>

      {isDialogOpen ? (
        <div className="fixed inset-0 z-30 bg-default opacity-50" style={{ backdropFilter: 'blur(5px)' }}></div>                
      ) : ''}

      {isDialogOpen && (
        <div className="dialog fixed z-30 h-screen w-full bg-pure_white sm:rounded-lg absolute sm:max-top-0 left-0 p-3 sm:h-96 mx-auto sm:w-96 sm:my-5 sm:-ml-96 md:-mt-56 md:fixed md:top-72 md:left-2/3 sm:mx-auto -mt-16">
          {/* Dialog content */}
          <div className="flex w-fit space-x-4 border-b border-offset-4 items-center md:pb-1.5 md:space-x-0.5 md:p-0 border-silver/75 p-3">
            <button onClick={handleCloseDialog} className="">
              <PreviousIcon fill={'silver'} height="25" width="20" />
            </button>
            <div className="flex space-x-1 mt-0.5">
              <div className="hidden">
                <Search fill={'silver'} height="20" width="20" />
              </div>
              {showInputField && (
              <input
                type="text"
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Places to dine, meals to taste, drinks to have..."
                className="capitalize p-0.5 w-72 text-sm md:text-ssm font-medium caret-bg_variant1 focus:outline-none"
              />
            )}
            </div>
            <button onClick={handleClickSubmit} className="md:hidden">
              <Search fill={'silver'} height="20" width="20" />
            </button>
            <button onClick={handleClickSubmit} className="hidden md:block bg-bg_variant1/70 text-pure_white font-semibold text-ssm rounded-lg p-1 px-1 ring-1 ring-bg_variant1/70 ring-offset-1  hover:bg-bg_variant1 hover:ring-bg_variant1">
              Search
            </button>
          </div>

          <div className="h-fit p-2 px-6">
            <div>
              <div className={`flex mt-3 md:mt-1 items-center space-x-4 text-sm md:text-ssm font-medium`}>
                <div className="bg-silver/15 size-12 rounded-lg p-1 px-2.5 py-3 items-center">
                  <DirectionIcon stroke={'black'} width="25" height="25" />
                </div>
                <p>Nearby</p>
              </div>
            </div>
            <div id="searchResultDisplay" className="mt-5 h-fit">
              <h3 className="text-sm font-semibold">What you are looking for</h3>
              <div className="h-2/4 p-2 md:max-h-56 mt-1.5 overflow-hidden overflow-y-auto scroll-smooth">
                {searchResults ? ( 
                  searchResults.map((result, index) => {
                    return (
                      <div key={index}>
                        {resultCard === 'restaurants' ?  <SearchResultCardForRestaurant restaurant={result} /> : resultCard === 'meals' ? <SearchResultCardForMeal meal={result} /> : <SearchResultCardForBeverage  beverage={result} /> }
                      </div>
                    );
                  })
                ) : '' }
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchComponent;