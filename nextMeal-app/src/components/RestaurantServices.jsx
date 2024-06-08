import React from 'react';
import { CheckIcon, CloseIconRectangle } from './svgs/InterfaceSvg';

const servicesList = [
  { key: 'foodandBeverages', label: 'Food & Beverages' },
  { key: 'takeaway', label: 'Takeaway' },
  { key: 'delivery', label: 'Delivery' },
  { key: 'reservation', label: 'Table Reservations' },
  { key: 'onlineOrders', label: 'Online Orders' },
  { key: 'catering', label: 'Catering' },
];

function RestaurantServices({ restaurantDoc }) {
  if (!restaurantDoc) {
    return <p>...</p>;
  }
  <CloseIconRectangle fill={'gray'} height={25} width={25} />

  return (
    <div className="transition-all duration-500 ease-in-out text-sm ">
        <ul className="flex flex-col justify-between w-full px-3">
          {servicesList.map(({ key, label }) => (
            <li key={key} className="flex space-x-2 py-0.5  items-center">
              {restaurantDoc.services[key] ? <CheckIcon fill={'red'} height={18} width={18} /> : <CloseIconRectangle fill={'silver'} height={18} width={18} />}
              <p className="font-medium">{label}</p>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default RestaurantServices;