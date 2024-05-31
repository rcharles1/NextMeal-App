import React from 'react';

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

  return (
    <div className="transition-all duration-500 ease-in-out text-sm ">
        <ul className="flex flex-col justify-between w-full px-3">
          {servicesList.map(({ key, label }) => (
            <li key={key} className="flex space-x-2 py-0.5  items-center">
              <img
                src={`/assets/icon/${restaurantDoc.services[key] ? 'check' : 'close'}.svg`}
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

export default RestaurantServices;