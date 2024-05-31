import React from 'react';

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
              <img
                src={`/assets/icon/${restaurantDoc.amenities[key] ? 'check' : 'close'}.svg`}
                alt={`${label} icon`}
                className="size-5"
              />
              <p className="font-medium">{label}</p>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default RestaurantAmenities;