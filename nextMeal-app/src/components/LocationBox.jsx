import { React } from 'react';

function LocationAddress() {
    return (
        <div className="flex flex-row justify-center mt-16 items-center space-x-3 h-12 w-36 p-3 bg-default/5 ring-pure_white rounded-md drop-shadow">
            <div className="size-8 ">
                <img src='/assets/icon/location-light.svg'  alt='Location Icon'/>
            </div>
            <span className="text-xl font-bold">
                Tanga
            </span>
        </div>
    );
}

export default LocationAddress;