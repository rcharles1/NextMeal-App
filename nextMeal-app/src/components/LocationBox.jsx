import { React } from 'react';

function LocationAddress() {
    return (
        <div className="flex flex-row justify-center items-center space-x-3 md:space-x-2 md:px-4 h-12 w-36 ring ring-pure_white/5 bg-blur sm:h-16 sm:w-48 p-3 bg-default/5 ring-pure_white rounded-md drop-shadow">
            <div className="size-8 sm:size-10 md:size-8 justify-center items center flex">
                <img src='/assets/icon/location-light.svg'  alt='Location Icon'/>
            </div>
            <span className="text-xl font-bold sm:text-2xl md:text-lg">
                Tanga
            </span>
        </div>
    );
}

export default LocationAddress;