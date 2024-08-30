import React from 'react';
import { CheckIcon, UnCheckIcon } from './svgs/InterfaceSvg';

const servicesList = [
  { key: 'comfortableSeats', label: 'Comfortable Seats' },
  { key: 'cleanRestroom', label: 'Wash Room' },
  { key: 'wifi', label: 'Wi-Fi Access' },
  { key: 'parking', label: 'Vehicle Parking' },
  { key: 'childrenGrounds', label: 'Kids Playground' },
];

function RestaurantAmenities({ restaurantDoc }) {
  if (!restaurantDoc) {
    return <p>...</p>;
  }

  return (
    <div className="transition-all duration-500 ease-in-out text-base md:text-ssm">
        <ul className="flex flex-col justify-between w-full px-3 md:px-1">
          {servicesList.map(({ key, label }) => (
            <li key={key} className="flex space-x-2 py-0.5 items-center">
              {restaurantDoc.amenities[key] ? <CheckIcon fill={'green'} height={14} width={14} /> : <UnCheckIcon fill={'red'} height={14} width={14} />}
              <p className="font-medium w-full">{label}</p>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default RestaurantAmenities;