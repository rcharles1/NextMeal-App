import { React, useState } from 'react';
import { searchForMealOrBeverage } from '../utilities/searchUtitlity';

function SearchItem({ item, onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(searchTerm);

        const searchMealsBeverages = async () => {
            try {
              const { data, resultCard } = await searchForMealOrBeverage(searchTerm);
              const result = data.results[0].data;
              onSearch(result, resultCard);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
        };
        searchMealsBeverages();
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
        <form onSubmit={handleSubmit} className="flex flex-row space-x-0 rounded-lg w-11/12 mx-auto flex-row p-1">
            <input
                required
                value={searchTerm}
                onChange={handleInputChange}
                placeholder={`Search a ${item === 'Meals & Beverages' ? 'Meal or Beverage': 'Restaurant'} `}
                className="capitalize w-10/12 h-full p-3 px-5 font-medium rounded-l-md shadow-sm focus:outline-none caret-default cursor-pointer"
            />
            <button className="rounded-r-md h-full w-2/12 bg-pure_white caret-transparent cursor-pointer">
               <div className="size-7 mx-auto flex">
                   <img src='/assets/icon/search-outline.svg' alt='search-icon'/>
               </div>
           </button>
        </form>
    );
}

export default SearchItem;