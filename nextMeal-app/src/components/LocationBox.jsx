import { React } from 'react';

function LocationAddress() {
    return (
        <div className="flex flex-row justify-center mt-16 items-center space-x-3 h-12 w-fit p-3 ring ring-pure_white rounded-md">
            <div className="size-8 ">
                <img src='/assets/icon/location-light.svg'  alt='Location Icon'/>
            </div>
            <div className="">
                <h2 className="text-xl font-bold">Tanga</h2>
            </div>

        </div>
    );
}

export default LocationAddress;