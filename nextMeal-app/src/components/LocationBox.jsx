import { React } from 'react';

function LocationAddress() {
    return (
        <div className="flex flex-row justify-center mt-16 items-center space-x-3 h-12 w-36 sm:h-16 sm:w-48 p-3 bg-default/5 ring-pure_white rounded-md drop-shadow">
            <div className="size-8 sm:size-10 justify-center items center flex">
                <img src='/assets/icon/location-light.svg'  alt='Location Icon'/>
            </div>
            <span className="text-xl font-bold sm:text-2xl">
                Tanga
            </span>
        </div>
    );
}

export default LocationAddress;