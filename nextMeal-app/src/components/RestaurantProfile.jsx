import { React } from 'react';

function RestaurantProfile() {
    return (
        <div className="mx-auto text-sm font-normal h-screen w-100 p-5 space-y-5"> 
            <div className="rounded-t-lg overflow-hidden">
                <img src='/assets/img/data/spicy-biryani.jpg'/>
            </div>
            <div className="flex flex-col space-y-2 ">
                <h2 className="mx-auto text-lg font-bold">Kitisa Fast Food Restaurant</h2>
            </div>
        </div>
    );
}

export default RestaurantProfile;