import React, { useState } from 'react'
import { search } from '../utilities/searchUtitlity';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const searchAll = async () => {
            try {
                const data = await search(searchTerm);
                const result = data.data;
                setSearchResults(result);
            } catch (error) {
                console.log('Error fetching data:', error)
            }
        };
        searchAll();
    };

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
    
        if (typeof inputValue === 'string') {
           setSearchTerm(inputValue);
        } else {
          alert('Invalid search term');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-row -space-x-0.5 w-full sm:w-8/12 md:w-96 mx-auto drop-shadow backdrop-filter backdrop-blur-lg">
            <input
                required
                value={searchTerm}
                onChange={handleInputChange}
                placeholder={`Search Meal, beverage, restaurant`}
                className="capitalize w-full h-10 sm:w-10/12 sm:h-14  md:h-12 md:px-4 md:p-2 p-3 px-3 sm:px-5 text-sm sm:text-base md:text-sm text-default/80 font-medium rounded-l-md focus:outline-none caret-default cursor-pointer"
            />
            <button className="rounded-r-md h-10 sm:h-14  md:h-12 md:px-4 md:p-2 md:w-2/12 w-3/12 bg-pure_white caret-transparent cursor-pointer">
               <div className="size-7 sm:size-9 md:size-8 mx-auto flex">
                   <img src='/assets/icon/search-outline.svg' alt='search-icon'/>
               </div>
           </button>
        </form>
    );
}

export default Search;