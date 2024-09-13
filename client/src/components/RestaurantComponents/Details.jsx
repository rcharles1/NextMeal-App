import React from 'react';
import { OpenIcon } from '../svgs/InterfaceSvg';

function Details({ restaurantDoc }) {

    return (
        <>
            {restaurantDoc ? (
                <div className="grid grid-cols-1 divide-y-2 gap-2 divide-light_dark/5 antialiased md:text-sm">
                    <div className="flex flex-row justify-between items-top p-1">
                        <span>
                            Address
                        </span>
                        <span className="font-medium w-58 text-wrap">
                            {restaurantDoc.details.address}
                        </span>
                    </div>
                    <div className="flex flex-row justify-between items-top p-1">
                        <span>
                            Hours
                        </span>
                        <span className="font-medium">
                            <p>{restaurantDoc.details.hours.openhours}</p>
                            <p>{restaurantDoc.details.hours.opendays}</p>
                        </span>
                    </div>
                    <div className="flex flex-row justify-between items-top p-1">
                        <span>
                            Phone
                        </span>
                        <span className="font-medium space-x-1"> 
                            {restaurantDoc.details.phone[0]}
                        </span>
                    </div>
                    <div className="flex flex-row justify-between items-top p-1">
                        <span>
                            Platforms 
                        </span>
                        <span className="font-medium w-max-48 md:w-32 text-right">
                            <a href={`${restaurantDoc.details.platforms.website}`} target="_blank" rel="noopener noreferrer" className="flex w-full text-wrap truncate underline">
                                {`${restaurantDoc.name}`}
                                <OpenIcon fill='' />
                            </a>
                        </span>
                    </div>
                </div>
            ) : <p>Fetching data. Please wait...</p>}
        </>
    );
}

export default Details;