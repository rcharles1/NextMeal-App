import { React, useState } from 'react';
import { sortOptions } from '../utilities/prefences'

import { Ascending, Descending, Rise, Fall } from './svgs/UiSvg';

function SortWidget( ) {
    const [selectedSort, setSelectedSort] = useState(null);

    const handleClick = (sort) => {
        setSelectedSort(selectedSort === sort ? null : sort);
    };

    return (
        <div className="w-fit ml-48 p-1 text-sm bg-pure_white rounded-md drop-shadow-sm caret-transparent">
           <div className="grid grid-cols-1 divide-y-2 gap-1 divide-light_dark/5 antialiased">
                {sortOptions.map((sortOption, index) => (
                    <div 
                    key={index}
                    onClick={() => handleClick(sortOption)}
                    className={`flex flex-row justify-between items-top p-1 ${selectedSort === sortOption ? 'text-bg_variant1/75' : ''}`}
                    >
                        <div className="flex space-x-2 items-center font-medium">
                            <Ascending fill={'red'} height="18" width="18"/>
                            <span>{sortOption}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SortWidget;