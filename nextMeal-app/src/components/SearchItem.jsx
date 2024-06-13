import { React, useState } from 'react';
import { searchForMealOrBeverage, searchRestaurant } from '../utilities/searchUtitlity';

function SearchItem({ item, onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const search = async () => {
            if (item === 'Meals & Beverages') {
                try {
                    const { data, resultCard } = await searchForMealOrBeverage(searchTerm);
                    const result = data.results[0].data;
                    onSearch(result, resultCard);
                  } catch (error) {
                    console.error('Error fetching data:', error);
                  }
            } else {
                try {
                    const data = await searchRestaurant(searchTerm);
                    const result = data.data;
                    onSearch(result);
                } catch (error) {
                    console.log('Error fetching data:', error)
                }
            }
        };
        search();
    }

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
    
        if (typeof inputValue === 'string') {
           setSearchTerm(inputValue);
        } else {
          alert('Invalid search term');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-row -space-x-0.5 md:space-x-0 md:items-center rounded-lg w-80 sm:w-6/12 md:w-fit mx-auto flex-row drop-shadow bg-pure_white backdrop-filter backdrop-blur-lg md:drop-shadow-none md:shadow-sm">
            <input
                required
                value={searchTerm}
                onChange={handleInputChange}
                placeholder={`Search ${item === 'Meals & Beverages' ? 'Meal or Beverage': 'Restaurant'} `}
                className="capitalize w-10/12 md:w-full h-full p-3 px-5 text-base sm:text-sm md:px-2 md:p-2 md:text-ssm font-medium rounded-l-md focus:outline-none caret-default cursor-pointer"
            />
            <button className="rounded-r-md h-full w-2/12 md:w-2/12 md:p-1.5 bg-pure_white caret-transparent cursor-pointer">
              <img src='/assets/icon/search-outline.svg' alt='search-icon' className="size-6 mx-auto mt-1.5 md:size-4 md:-mt-0. flex"/>
           </button>
        </form>
    );
}

export default SearchItem;