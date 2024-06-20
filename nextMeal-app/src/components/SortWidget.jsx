import  React,{ useState } from 'react';
import { sortOptions } from '../utilities/preferences'

import { Ascending, Descending, Rise, Fall } from './svgs/InterfaceSvg';

function SortWidget({ onSortChange, sort, onClose}) {
    const [selectedSort, setSelectedSort] = useState(sort);

    const iconComponents = {
        'Ascending': Ascending,
        'Descending': Descending,
        'Rise': Rise,
        'Fall': Fall
    };

    const handleClick = (sort) => {
        setSelectedSort(sort);
        onSortChange(sort);
        onClose();
    };
    
    return (
        <div className="flex justify-end mr-4 sm:ml-2 md:w-36 md:p-2">
            <div className="w-48 p-1 pb-1 text-sm md:text-ssm bg-pure_white rounded-md drop-shadow-sm caret-transparent">
                <div className="grid grid-cols-1 divide-y-2 gap-1 divide-light_dark/5 antialiased">
                    {sortOptions.map((option, index) => {
                        const IconComponent = iconComponents[option.icon];
                        return (
                            <div 
                                key={index}
                                className={`flex flex-col space-y-2 items-top p-1`}
                                >
                                <div onClick={() => handleClick(option)} className={`flex flex-row space-x-2 items-center pointer-cursor font-medium`}>
                                    <IconComponent fill={selectedSort === option ? 'red' : 'gray'} height="18" width="18"/>
                                    <span className={`w-full ${selectedSort === option ? 'text-bg_variant1/75' : ''}`}>{option.text}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default SortWidget;