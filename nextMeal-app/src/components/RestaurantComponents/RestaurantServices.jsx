import React from 'react';
import { CheckIcon, UnCheckIcon } from '../svgs/InterfaceSvg';

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
  <UnCheckIcon fill={'gray'} height={25} width={25} />

  return (
    <div className="transition-all duration-500 ease-in-out text-base md:text-ssm">
      <ul className="flex flex-col justify-between w-full px-3">
        {servicesList.map(({ key, label }) => (
          <li key={key} className="flex space-x-2 py-1.5  items-center">
            {restaurantDoc.services[key] ? <CheckIcon fill={'green'} height={15} width={15} /> : <UnCheckIcon fill={'red'} height={15} width={16} />}
            <p className="font-medium">{label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantServices;