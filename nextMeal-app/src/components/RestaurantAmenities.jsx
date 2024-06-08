import React from 'react';
import { CheckIcon, CloseIconRectangle } from './svgs/InterfaceSvg';

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
    <div className="transition-all duration-500 ease-in-out text-sm ">
        <ul className="flex flex-col justify-between w-full px-3">
          {servicesList.map(({ key, label }) => (
            <li key={key} className="flex space-x-2 py-0.5  items-center">
              {restaurantDoc.amenities[key] ? <CheckIcon fill={'red'} height={18} width={18} /> : <CloseIconRectangle fill={'silver'} height={18} width={18} />}
              <p className="font-medium">{label}</p>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default RestaurantAmenities;