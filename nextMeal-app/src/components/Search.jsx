import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { search } from '../utilities/searchUtitlity';

import { Search, PreviousIcon, DirectionIcon } from '/src/components/svgs/InterfaceSvg';

function SearchComponent() {
  const location = useLocation();
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [term, setTerm] = useState('');
  const [validTerm, setValidTerm] = useState('')

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const data  = await search(validTerm);
        console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
      }
    };
    handleSearch();
  }, [validTerm])

  const handleClickSubmit = () => {
    setValidTerm(term);
  };

  
  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    if (typeof inputValue === 'string') {
       setTerm(inputValue);
    } else {
      alert('Invalid search term');
    }
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
      <button onClick={handleOpenDialog} className={`${isDialogOpen ? 'collapse' : 'block'} caret-transparent flex flex-row md:w-96 space-x-1 md:space-x-1.5 md:p-1.5 md:px-3 md:pt-1.5 px-3 p-1 rounded-2xl border-4 border-bg_variant1/30`}>
        <Search fill={'silver'} height="25" width="25" />
        <input
          type="text"
          placeholder="Places to dine, meals to taste, drinks to have..."
          className="p-0.5 px-1 w-32 sm:w-4 md:w-96 md:mt-0.5 text-base sm:text-sm text-default/75 rounded-lg caret-transparent font-semibold focus:outline-none"
        />
      </button>
      {isDialogOpen ? (
        <div class="fixed inset-0 z-30 bg-default opacity-50" style={{ backdropFilter: 'blur(5px)' }}></div>                
      ) : ''}
      {isDialogOpen && (
        <div className="dialog fixed z-30 h-screen w-full bg-pure_white sm:rounded-lg sm:max-absolute sm:max-top-0 sm:max-left-0 p-3 sm:h-80 mx-auto sm:w-96 sm:my-5 sm:-ml-96 sm:mx-auto -mt-16 -ml-36">
          {/* Dialog content */}
          <div className="flex space-x-4 border-b md:space-x-2 md:p-1 border-silver/55 p-3">
            <button onClick={handleCloseDialog} className="">
              <div className="block md:hidden">
               <PreviousIcon stroke={'black'} height="25" width="30" />
              </div>
              <div className="hidden md:block">
                <Search fill={'silver'} height="20" width="20"/>
              </div>
            </button>
            {showInputField && (
              <input
                type="text"
                onChange={handleInputChange}
                placeholder="Places to dine, meals to taste, drinks to have..."
                className="capitalize p-0.5 w-72 md:w-96 text-sm md:text-sm caret-bg_variant1 focus:outline-none"
              />
            )}
            <button onClick={handleClickSubmit} className="md:hidden">
              <Search fill={'black'} height="25" width="30" />
            </button>
          </div>

          <div className="h-fit p-2 px-6 mt-3">
              <div className="flex items-center space-x-4 text-sm font-medium">
              <div className="bg-silver/15 size-12 rounded-lg p-1 px-2.5 py-3 items-center">
                <DirectionIcon stroke={'black'} width="25" height="25" />
              </div>
              <p>Nearby</p>
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-semibold">Recently Viewed</h3>
                <div className="bg-silver/25 h-36 rounded mt-3">

                </div>
              </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchComponent;