import { useState } from 'react';
import PropTypes from 'prop-types';

function CuisineDropdown({ cuisineOptions, onSelect }) {
  const [selectedCuisineOption, setSelectedCuisineOption] = useState(null);

  const handleClick = (item) => {
    setSelectedCuisineOption(item);
    onSelect(item);
  };

  return (
    <div className="overflow-y-auto caret-transparent grid grid-cols-1 p-2 h-48 cursor-pointer sm:text-sm w-36 bg-pure_white rounded-lg divide-y-2 gap-1 divide-light_dark/5 antialiased">
      {cuisineOptions.map((item, index) => (
        <div key={index} className="flex flex-col space-y-2 items-top p-1">
          <div
            onClick={() => handleClick(item)}
            className={`flex flex-row space-x-2 items-center pointer-cursor font-medium`}
          >
            <input
              type="radio"
              name="cuisine"
              value={item.text}
              checked={selectedCuisineOption === item}
              onChange={() => {}}
            />
            <span className={`w-full ${selectedCuisineOption === item ? 'text-bg_variant1/75' : ''}`}>
              {item.text}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

CuisineDropdown.propTypes = {
  cuisineOptions: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default CuisineDropdown;