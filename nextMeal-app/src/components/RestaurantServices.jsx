import { React } from 'react';

function RestaurantServices({ restaurantDoc }) {
    return (
        <>
            { restaurantDoc ? (
                <div className="transition-all duration-500 ease-in-out">
                    {restaurantDoc ? (
                        <div className="gap-3 divide-faint_default/10">
                            <ul className="flex flex-row space-x-2 justify-between w-100  py-2 px-3">
                                <span className="space-y-2.5">
                                    <li className="flex space-x-2">
                                        <img src={`/assets/icon/${restaurantDoc.services.foodandBeverages ? 'check': 'close' }.svg`} alt="check-close icon" className="size-5"/>
                                        <p className="font-medium">Food & Beverages</p>
                                    </li>
                                    <li className="flex space-x-2">
                                        <img src={`/assets/icon/${restaurantDoc.services.takeaway ? 'check': 'close' }.svg`} alt="check-close icon" className="size-5"/>
                                        <p className="font-medium">Takeway</p>
                                    </li>
                                    <li className="flex space-x-2">
                                        <img src={`/assets/icon/${restaurantDoc.services.delivery ? 'check': 'close' }.svg`} alt="check-close icon" className="size-5"/>
                                        <p className="font-medium">Delivery</p>
                                    </li>
                                </span>
                                <span className="space-y-2.5">
                                    <li className="flex space-x-2">
                                        <img src={`/assets/icon/${restaurantDoc.services.reservation ? 'check': 'close' }.svg`} alt="check-close icon" className="size-5"/>
                                        <p className="font-medium">Table Reservations</p>
                                    </li>
                                    <li className="flex space-x-2">
                                        <img src={`/assets/icon/${restaurantDoc.services.onlineOrders ? 'check': 'close' }.svg`} alt="check-close icon" className="size-5"/>
                                        <p className="font-medium">Online Orders</p>
                                    </li>
                                    <li className="flex space-x-2">
                                        <img src={`/assets/icon/${restaurantDoc.services.catering ? 'check': 'close' }.svg`} alt="check-close icon" className="size-5"/>
                                        <p className="font-medium">Catering</p>
                                    </li>
                                </span>
                            </ul>
                        </div>
                    ) : <p>Loading...</p>}
                </div>
            ): <p>... </p>}
        </>
    );
}

export default RestaurantServices;