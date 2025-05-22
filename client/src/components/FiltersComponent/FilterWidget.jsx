/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { FiX, FiCheck, FiSliders, FiSearch } from 'react-icons/fi';

function FilterWidget({ onFiltersChange, filters, onReset, onClose, filterOptions }) {
    const [selectedFilters, setSelectedFilters] = useState(filters);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        onFiltersChange(selectedFilters);
    }, [selectedFilters, onFiltersChange]);

    const handleFilterClick = (filterType, value) => {
        setSelectedFilters(prevFilters => {
            const currentFilters = prevFilters[filterType] || [];
            return {
                ...prevFilters,
                [filterType]: currentFilters.includes(value) 
                    ? currentFilters.filter(f => f !== value)
                    : [...currentFilters, value]
            };
        });
    };

    const filteredOptions = filterOptions.map(option => ({
        ...option,
        values: option.values.filter(value => 
            value.text.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(option => option.values.length > 0);

    const hasChanges = JSON.stringify(selectedFilters) !== JSON.stringify(filters);
    const totalSelected = Object.values(selectedFilters).flat().length;

    return (
        <div className="flex h-screen flex-col bg-white shadow-xl w-72 lg:w-">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                    <FiSliders className="w-5 h-5 text-gray-600" />
                    <h2 className="text-lg font-semibold text-gray-900">
                        Filters {totalSelected > 0 && `(${totalSelected})`}
                    </h2>
                </div>
                <button 
                    onClick={onClose}
                    className="p-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                    <FiX className="w-5 h-5 text-gray-500" />
                </button>
            </div>

            {/* Search */}
            <div className="p-4 border-b border-gray-100">
                <div className="relative">
                    <FiSearch className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search filters..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
            </div>

            {/* Filter Categories */}
            <div className="flex-1 overflow-y-auto">
                {filteredOptions.map((filterOption, index) => (
                    <div 
                        key={index}
                        className="border-b border-gray-100 last:border-0"
                    >
                        <button
                            onClick={() => setActiveCategory(activeCategory === index ? null : index)}
                            className="flex items-center justify-between w-full p-4 hover:bg-gray-50 transition-colors"
                        >
                            <h3 className="text-sm font-medium text-gray-900">
                                {filterOption.title}
                            </h3>
                            <span className="text-sm text-gray-500">
                                {selectedFilters[filterOption.type]?.length || 0}
                            </span>
                        </button>
                        
                        {activeCategory === index && (
                            <div className="pb-4 px-4 grid grid-cols-2 gap-3">
                                {filterOption.values.map((value, valueIndex) => {
                                    const isSelected = selectedFilters[filterOption.type]?.includes(value.value);
                                    return (
                                        <button
                                            key={`${index}-${valueIndex}`}
                                            onClick={() => handleFilterClick(filterOption.type, value.value)}
                                            className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                                                isSelected 
                                                    ? 'border-blue-500 bg-blue-50'
                                                    : 'border-gray-200 hover:border-blue-300'
                                            }`}
                                        >
                                            <span className="text-sm text-gray-700">{value.text}</span>
                                            {isSelected && (
                                                <FiCheck className="w-4 h-4 text-blue-600" />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white border-t border-gray-100 p-4">
                <div className="flex gap-3">
                    <button
                        onClick={onReset}
                        className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg border border-gray-200 transition-colors"
                    >
                        Reset All
                    </button>
                    <button
                        onClick={onClose}
                        disabled={!hasChanges}
                        className={`flex-1 px-4 py-2.5 text-sm font-medium text-white rounded-lg transition-colors ${
                            hasChanges 
                                ? 'bg-blue-600 hover:bg-blue-700'
                                : 'bg-gray-300 cursor-not-allowed'
                        }`}
                    >
                        Apply Filters
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FilterWidget;