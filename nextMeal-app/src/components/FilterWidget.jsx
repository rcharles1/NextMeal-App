import React, { useState } from 'react';

function FilterWidget({ onFiltersChange, filters, onReset, onClose, filterOptions }) {
    const [selectedFilters, setSelectedFilters] = useState(filters);

    const handleFilterClick = (filterType, value) => {
        setSelectedFilters(prevFilters => {
            const selectedFilter = prevFilters[filterType];
            if (selectedFilter.includes(value)) {
                return { ...prevFilters, [filterType]: selectedFilter.filter(filter => filter !== value) };
            } else {
                return { ...prevFilters, [filterType]: [...selectedFilter, value] };
            }
        });
    };
    
    const handleApplyClick = () => {
        onFiltersChange(selectedFilters);
        onClose();
    };
    
    const handleCancelClick = () => {
        setSelectedFilters(filters);
        onClose();
    };

    const hasChanges = JSON.stringify(selectedFilters) !== JSON.stringify(filters);

    return (
        <div className="w-full mx-auto p-1 pb-2 bg-pure_white border-b-2 border-bg_variant1/10 shadow-sm rounded-md caret-transparent">
            <button onClick={handleCancelClick} className="rounded ml-80 mb-2.5 border border-light_dark/10 cursor-pointer ">
                <img src="/assets/icon/close.svg" alt="close-icon" className="size-6"/>
            </button>
            <div className="grid grid-cols-1 divide-y-2 gap-1 divide-light_dark/10">
                {filterOptions && filterOptions.map((filterOption, index) => (
                    <div key={index} className="flex flex-row justify-between items-start items-top p-1">
                        <span className="mt-2 font-medium text-start">{filterOption.title}:</span>
                        <div className="flex flex-wrap w-52 h-20 px-0.5 pb-0.5 oveflow-hidden overflow-y-auto ">
                            {filterOption.values.map((value, index) => {
                                const isSelected = selectedFilters[filterOption.type].includes(value.value);
                                return (
                                    <div 
                                        key={index} 
                                        onClick={() => handleFilterClick(filterOption.type, value.value)} 
                                        className={`outline outline-1 justify-center mr-2 mt-2 cursor-pointer rounded h-fit w-fit p-0.5 px-1 ${isSelected ? 'bg-bg_variant1 text-pure_white/75' : ''}`}
                                    >
                                        {value.text}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-row space-x-2 w-fit mt-2.5 mx-auto items-center justify-center p-1">
                <button onClick={onReset} className="rounded-md w-40 h-8 drop-shadow-xl cursor-pointer border text-default/70 font-bold">RESET</button>
                <button onClick={handleApplyClick} disabled={!hasChanges} className="rounded-md cursor-pointer w-40 p-1 h-8 bg-bg_variant1 text-pure_white/75 font-bold">APPLY</button>
            </div>
        </div>
    );
}

export default FilterWidget;