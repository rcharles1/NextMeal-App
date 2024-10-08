import { useState } from 'react';
import PropTypes from 'prop-types';
import { Search } from '/src/components/svgs/InterfaceSvg';
import { searchForMealOrBeverage, searchRestaurant } from '../../utilities/searchUtitlity';

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
        <form onSubmit={handleSubmit} className="flex flex-row space-x-0.5 md:px-2 items-center px-3 md:items-center rounded-xl ssm:rounded-full w-80 ssm:w-64 lg:w-48 md:p-1 mx-auto bg-pure_white outline outline-none /25 cursor-none caret-transparent">
            <Search fill={'silver'} height="25" width="25" />
            <input
                required
                value={searchTerm}
                onChange={handleInputChange}
                placeholder={`Search ${item === 'Meals & Beverages' ? 'Meal or Beverage': 'Restaurant'} `}
                className="capitalize p-3 caret-bg_variant1 md:px-1 ssm:p-0 w-full text-base sm:text-sm ssm:text-sm lg:p-1 lg:w-9/12 font-medium focus:outline-none cursor-pointer"
            />
        </form>
    );
}

SearchItem.propTypes = {
    item: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
};

export default SearchItem;