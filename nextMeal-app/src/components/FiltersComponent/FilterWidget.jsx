import React, { useState, useEffect } from 'react';

function FilterWidget({ onFiltersChange, filters, onReset, onClose, filterOptions }) {
    const [selectedFilters, setSelectedFilters] = useState(filters);

    useEffect(() => {
        onFiltersChange(selectedFilters);
    }, [selectedFilters]);

    const handleFilterClick = (filterType, value) => {
        setSelectedFilters(prevFilters => {
            const selectedFilter = prevFilters[filterType];
            if (selectedFilter && selectedFilter.includes(value)) {
                return { ...prevFilters, [filterType]: selectedFilter.filter(filter => filter !== value) };
            } else {
                return { ...prevFilters, [filterType]: [...(selectedFilter || []), value] };
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
        <div className="w-full sm:w-11/12 mx-auto p-8 ssm:p-0 pb-6 ssm:pb-4 bg-pure_white outline-pure_white/20 shadow-sm md:shadow-none rounded-md caret-transparent">
            <div className="flex justify-end h-fit mr-4 md:mt-4 md:hidden pb-2">
                <button onClick={handleCancelClick} className="rounded border border-light_dark/10 cursor-pointer ">
                    <img src="/assets/icon/close.svg" alt="close-icon" className="size-6 sm:size-10 md:size-8"/>
                </button>
            </div>
            <div className="grid grid-cols-1 divide-y-2 gap-1 p-3 md:p-1 divide-light_dark/10 h-96 lg:h-lvh overflow-hidden overflow-y-auto border-t-2 border-bg_variant1/10 ssm:border-none">
                {filterOptions && filterOptions.map((filterOption, index) => (
                    <div key={index} className="flex h-fit flex-row justify-between sm:px-5 items-start items-top p-1 md:px-0 md:flex-col">
                        <span className="mt-2 font-semibold md:mt-0 md:font-bold text-base text-start">{filterOption.title}:</span>
                        <div className="flex flex-wrap w-52 sm:w-10/12 h-fit px-0.5 pb-0.5 md:px-1 overflow-hidden ">
                            {filterOption.values.map((value, valueIndex) => {
                                const isSelected = selectedFilters[filterOption.type] && selectedFilters[filterOption.type].includes(value.value);
                                return (
                                <React.Fragment key={`${index}-${valueIndex}`}>
                                    <div
                                    onClick={() => handleFilterClick(filterOption.type, value.value)}
                                    className={`md:hidden outline outline-1 outline-light_dark/35 md:outline-2 justify-center mr-2 mt-2 cursor-pointer rounded sm:h-8 sm:p-1 sm:px-1.5 md:p-2 h-fit w-fit p-0.5 px-1 ${
                                        isSelected ? 'bg-bg_variant1 text-pure_white' : 'bg-none text-default/75'
                                    }`}
                                    >
                                    {value.text}
                                    </div>
                                    <label className="hidden md:block flex-row mb-0.5 space-x-5 mt-1 justify-center items-center font-normal w-full text-ssm">
                                    <div className="flex w-fit">
                                        <input
                                        type="checkbox"
                                        checked={isSelected}
                                        onChange={() => handleFilterClick(filterOption.type, value.value)}
                                        className="form-checkbox accent-bg_variant1"
                                        />
                                    </div>
                                    <div className="ml-1 pb- w-fit h-fit -mt-3.5">{value.text}</div>
                                    </label>
                                </React.Fragment>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-row space-x-2 w-fit mt-2.5 mx-auto items-center justify-center p-1 sm:w-full sm:justify-even">
                <button onClick={onReset} className="rounded-md w-40 h-8 sm:h-12 md:h-6 sm:w-64 drop-shadow-xl md:p-1 cursor-pointer text-base ssm:text-sm outline outline-light_dark/15 text-default/75 font-semibold active:bg-gray/35">Clear all filters</button>
                <button onClick={handleApplyClick} disabled={!hasChanges} className="rounded-md md:hidden cursor-pointer text-base w-40 p-1 h-8 sm:h-12 sm:w-64 md:h-fit md:w- md:p-3 bg-bg_variant1 text-pure_white/75 font-bold">Apply filters</button>
            </div>
        </div>
    );
}

export default FilterWidget;