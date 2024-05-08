import React, { useState } from 'react';
import { filterCuisines, filterOpenHours, filterServices, filterAmenities } from '../utilities/prefences';

function FilterWidget() {
    const [selectedCuisines, setSelectedCuisines] = useState([]);
    const [selectedOpenHours, setSelectedOpenHours] = useState([]);
    const [selectedServices, setSelectedServices] = useState([]);
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const [region, setRegion] = useState([]);

    const handleCuisineClick = (value) => {
        if (selectedCuisines.includes(value)) {
            setSelectedCuisines(selectedCuisines.filter(cuisine => cuisine !== value));
        } else {
            setSelectedCuisines([...selectedCuisines, value]);
        }
    };

    const handleOpenHoursClick = (value) => {
        if (selectedOpenHours.includes(value)) {
            setSelectedOpenHours(selectedOpenHours.filter(hour => hour !== value));
        } else {
            setSelectedOpenHours([...selectedOpenHours, value]);
        }
    };

    const handleServicesClick = (value) => {
        if (selectedServices.includes(value)) {
            setSelectedServices(selectedServices.filter(service => service !== value));
        } else {
            setSelectedServices([...selectedServices, value]);
        }
    };

    const handleAmenitiesClick = (value) => {
        if (selectedAmenities.includes(value)) {
            setSelectedAmenities(selectedAmenities.filter(amenity => amenity !== value));
        } else {
            setSelectedAmenities([...selectedAmenities, value]);
        }
    };

    return (
        <div className="w-full mx-auto p-3 bg-white border-b-2 border-bg_variant1/10 shadow rounded-md caret-transparent">
            <div className="grid grid-cols-1 divide-y-2 gap-1 divide-light_dark/10">
                {/* Filter by Cuisine */}
                <div className="flex flex-row justify-between items-start items-top p-1">
                    <span className="mt-2 font-medium text-start">Cuisine:</span>
                    <div className="flex flex-wrap w-52 h-16 px-0.5 pb-0.5 oveflow-hidden overflow-y-auto ">
                        {filterCuisines.map((cuisine, index) => {
                            const isSelected = selectedCuisines.includes(cuisine.value);
                            return (
                                <div 
                                    key={index} 
                                    onClick={() => handleCuisineClick(cuisine.value)} 
                                    className={`outline outline-1 justify-center mr-2 mt-2 rounded h-fit w-fit p-0.5 px-1 ${isSelected ? 'bg-bg_variant1 text-pure_white/75' : ''}`}
                                >
                                    {cuisine.text}
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* Filter by Hours */}
                <div className="flex flex-row justify-between items-start items-top p-1">
                    <span className="mt-2 font-medium text-start">Open Hours:</span>
                    <div className="flex flex-wrap w-52 h-fit px-0.5 pb-2 oveflow-hidden overflow-y-auto ">
                        {filterOpenHours.map((hour, index) => {
                            const isSelected = selectedOpenHours.includes(hour.value);
                            return (
                                <div 
                                    key={index} 
                                    onClick={() => handleOpenHoursClick(hour.value)} 
                                    className={`outline outline-1 justify-center mr-2 mt-2 rounded h-fit w-fit p-0.5 px-1 ${isSelected ? 'bg-bg_variant1 text-pure_white/75' : ''}`}
                                >
                                    {hour.text}
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* Filter by Services */}
                <div className="flex flex-row justify-between items-start items-top p-1">
                    <span className="mt-2 font-medium text-start">Services:</span>
                    <div className="flex flex-wrap w-52 h-fit px-0.5 pb-2 oveflow-hidden overflow-y-auto ">
                        {filterServices.map((service, index) => {
                            const isSelected = selectedServices.includes(service.value);
                            return (
                                <div 
                                    key={index} 
                                    onClick={() => handleServicesClick(service.value)} 
                                    className={`outline outline-1 justify-center mr-2 mt-2 rounded h-fit w-fit p-0.5 px-1 ${isSelected ? 'bg-bg_variant1 text-pure_white/75' : ''}`}
                                >
                                    {service.text}
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* Filter by Amenities */}
                <div className="flex flex-row justify-between items-start items-top p-1">
                    <span className="mt-2 font-medium text-start">Amenities:</span>
                    <div className="flex flex-wrap w-52 h-fit px-0.5 pb-2 oveflow-hidden overflow-y-auto ">
                        {filterAmenities.map((amenity, index) => {
                            const isSelected = selectedAmenities.includes(amenity.value);
                            return (
                                <div 
                                    key={index} 
                                    onClick={() => handleAmenitiesClick(amenity.value)} 
                                    className={`outline outline-1 justify-center mr-2 mt-2 rounded h-fit w-fit p-0.5 px-1 ${isSelected ? 'bg-bg_variant1 text-pure_white/75' : ''}`}
                                >
                                    {amenity.text}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterWidget;
