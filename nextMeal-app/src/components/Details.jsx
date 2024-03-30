import { React } from 'react';

function Details() {
    return (
        <>
            <div className="flex justify-between items-center ">
                <span>
                    Address
                </span>
                <span className="font-medium">
                    Mkwakwani, Near Ratco Express
                </span>
            </div>
            <div className="flex justify-between items-center ">
                <span>
                    Hours
                </span>
                <span className="font-medium">
                    8:00 AM - 11:00 PM, 7 Days
                </span>
            </div>
            <div className="flex justify-between items-center ">
                <span>
                    Phone
                </span>
                <span className="font-medium">
                    +255 740 202 200
                </span>
            </div>
            <div className="flex justify-between items-center ">
                <span>
                    Delivery 
                </span>
                <span className="font-medium">
                    Available - Cost Inclusive
                </span>
            </div>
        </>
    );
}

export default Details;