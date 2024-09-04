import React, { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { search } from '../../utilities/searchUtitlity';

import { Search, PreviousIcon, DirectionIcon } from '/src/components/svgs/InterfaceSvg';
import SearchResultCardForRestaurant from './RestaurantSearchCard';
import SearchResultCardForMeal from './MealSearchCard';
import SearchResultCardForBeverage from './BeverageSearchCard';

function SearchComponent() {
  const location = useLocation();
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [term, setTerm] = useState('');
  const [validTerm, setValidTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [resultCard, setResultCard] = useState(null);
  const [noRecordMessage, setnoRecordMessage] = useState('');

  const handleSearch = async () => {
    try {
      setnoRecordMessage('')
      if (validTerm.trim()) {
        const { data, resultCategory } = await search(validTerm);
        if (data.success === false ) {
          setnoRecordMessage(data.message)
        } else {
          setSearchResults(data.results[0].data);
          setResultCard(resultCategory);
        }
      }
    } catch (error) {
      if (error === 404) {
        setNoRecord();
        console.error('No matching data:', error);
      } else {
        console.error('Error fetching data:', error);
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    handleSearch();
  }, [validTerm]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setTerm(inputValue);

    // Check if inputValue is a non-empty string (after trimming whitespace)
    if (typeof inputValue === 'string' && inputValue.trim()) {
        setValidTerm(inputValue);
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
      <button onClick={handleOpenDialog} className={`${isDialogOpen ? 'collapse' : 'block'} caret-transparent flex flex-row items-center ssm:w-96 space-x-1 ssm:space-x-1.5 ssm:px-3 px-1 p-1 rounded-2xl outline-bg_variant1 outline`}>
        <Search fill={'red'} />
        <input
          type="text"
          placeholder="Places to dine, meals to taste, drinks to have..."
          className="p-0.5 pr-2 w-32 sm:w-4 md:w-96 ssm:mt-0.5 text-ssm sm:text-sm lg:p-1.5 text-bg_variant1 caret-transparent font-semibold focus:outline-none bg-bg_variant1/0"
        />
      </button>

      {isDialogOpen ? (
        <div className="fixed inset-0 z-30 bg-default opacity-50" style={{ backdropFilter: 'blur(5px)' }}></div>                
      ) : ''}

      {isDialogOpen && (
        <div className="dialog z-30 h-lvh w-full bg-pure_white sm:rounded-lg absolute top-16 sm:max-top-0 left-0 p-3 sm:h-80 mx-auto sm:w-96 sm:my-5 ssm:-ml-80 md:-mt-56 md:fixed md:top-72 md:left-2/3 -mt-16 lg:w-6/12 lg:p-5 lg:rounded-xl lg:-ml-96 lg:h-fit xl:w-8/12 xl:left-2/4 xl:h-2/3">
          {/* Dialog content */}
          <div className="flex w-full space-x-4 border-b border-offset-4 items-center md:pb-1.5 md:space-x-0.5 md:p-0 border-silver/75 p-3 lg:p-1 lg:pb-3 lg:justify-around">
            <button onClick={handleCloseDialog} >
              <PreviousIcon/>
            </button>
            <div className="flex space-x-1 mt-0.5">
              <div className="hidden">
                <Search fill={''} />
              </div>
              {showInputField && (
              <input
                type="text"
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Places to dine, meals to taste, drinks to have..."
                className="capitalize p-1 min-w-72 text-sm md:text-base font-medium caret-bg_variant1 focus:outline-none lg:w-96 "
              />
            )}
            </div>
            <button onClick={handleClickSubmit} className="md:hidden">
              <Search fill={'red'} />
            </button>
            <button onClick={handleClickSubmit} className="hidden md:block bg-bg_variant1/70 text-pure_white font-semibold text-ssm lg:text-sm lg:p-1.5 lg:px-2 xl:text-base xl:px-3 rounded-lg p-1 px-1 ring-1 ring-bg_variant1/70 ring-offset-1 hover:bg-bg_variant1 hover:ring-bg_variant1">
              Search
            </button>
          </div>

          <div className="h-fit p-2 px-6">
            <div>
              <div className={`flex mt-3 md:mt-1 items-center space-x-4 text-sm md:text-ssm font-medium`}>
                <div className="bg-silver/15 size-12 rounded-lg flex items-center justify-center lg:p-0">
                  <div><DirectionIcon stroke={'gray'}/></div>
                </div>
                <p className="lg:text-base">Nearby</p>
              </div>
            </div>
            <div id="searchResultDisplay" className="mt-5 h-fit">
              {noRecordMessage ? <p className="p-2 w-fit mx-auto text-base font-medium">{noRecordMessage}</p> : (
                <div>
                  <h3 className="text-sm font-bold lg:text-lg">What you are looking for</h3>
                  <div className="h-2/4 p-2 ssm:max-h-56 xl:max-h-80 mt-1.5 overflow-hidden overflow-y-auto scroll-smooth">
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
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchComponent;