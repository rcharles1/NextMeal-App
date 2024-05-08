import { React, useState } from 'react';

function SortWidget() {
    const [selectedSort, setSelectedSort] = useState(null);

    const handleClick = (sort) => {
        setSelectedSort(selectedSort === sort ? null : sort);
    };

    const sortOptions = ['Ascending', 'Descending', 'Price: Low to High', 'Price: High to Low'];

    return (
        <div className=" w-full mx-auto p-3 bg-pure_white rounded-md drop-shadow-sm caret-transparent">
           <div className="grid grid-cols-1 divide-y-2 gap-1 divide-light_dark/5 antialiased">
                {sortOptions.map((sortOption, index) => (
                    <div 
                    key={index}
                    onClick={() => handleClick(sortOption)}
                    className={`flex flex-row justify-between items-top p-1 ${selectedSort === sortOption ? 'bg-bg_variant1 text-pure_white/75' : ''}`}
                    >
                        <span>{sortOption}</span>
                        <span className="font-medium">
                        <p>{selectedSort === sortOption ? 'Selected' : ''}</p>
                    </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SortWidget;