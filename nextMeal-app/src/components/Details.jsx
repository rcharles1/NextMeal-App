import { React } from 'react';

function Details({ restaurantDoc }) {

    return (
        <>
            {restaurantDoc ? (
                <div className="grid grid-cols-1 divide-y-2 gap-2 divide-light_dark/5 antialiased md:text-sm">
                    <div className="flex flex-row justify-between items-top p-1">
                        <span>
                            Address
                        </span>
                        <span className="font-semibold text-ssm w-58 text-wrap">
                            {restaurantDoc.details.address}
                        </span>
                    </div>
                    <div className="flex flex-row justify-between items-top p-1">
                        <span>
                            Hours
                        </span>
                        <span className="font-semibold text-ssm">
                            <p>{restaurantDoc.details.hours.openhours}</p>
                            <p>{restaurantDoc.details.hours.opendays}</p>
                        </span>
                    </div>
                    <div className="flex flex-row justify-between items-top p-1">
                        <span>
                            Phone
                        </span>
                        <span className="font-semibold text-ssm space-x-1"> 
                            {restaurantDoc.details.phone[0]}
                        </span>
                    </div>
                    <div className="flex flex-row justify-between items-top p-1">
                        <span>
                            Platforms 
                        </span>
                        <span className="font-semibold text-ssm w-max-48 md:w-32 text-right">
                            <a href={`${restaurantDoc.details.platforms.website}`} target="_blank" rel="noopener noreferrer" className="flex w-full text-wrap text-blue/90">
                                {`${restaurantDoc.name}'s Website`}
                                <span className="size-3">
                                    <img src='/assets/icon/link-out.svg'/>
                                </span>
                            </a>
                        </span>
                    </div>
                </div>
            ) : <p>Fetching data. Please wait...</p>}
        </>
    );
}

export default Details;