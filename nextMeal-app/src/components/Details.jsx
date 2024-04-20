import { React } from 'react';

function Details({ restaurantDoc }) {

    return (
        <>
            {restaurantDoc ? (
                <div className="grid grid-cols-1 divide-y-2 gap-3 divide-faint_default/10">
                    <div className="flex flex-row justify-between items-top p-1">
                        <span className="">
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
                        <span className="font-medium">
                            <a href={`${restaurantDoc.details.platforms.website}`} target="_blank" rel="noopener noreferrer" className="flex text-blue">
                                {`${restaurantDoc.name}'s Website`}
                                <span className="size-4">
                                    <img src='/assets/icon/link-out.svg'/>
                                </span>
                            </a>
                        </span>
                    </div>
                </div>
            ) : <p>Loading...</p>}
        </>
    );
}

export default Details;