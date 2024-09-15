import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function SearchResultCardForRestaurant({ restaurant }) {
    const restaurantName = restaurant.name.replace(/\s+/g, '').toLowerCase();

    return (
        <>
            {restaurant ? (
                <div className="flex items-center mb-2 space-x-4 text-sm md:text-sm lg:text-base font-semibold">
                    <div className="size-16 ssm:size-12 lg:size-14 rounded-lg overflow-hidden items-center">
                        <img src={`/assets/img/gallery/restaurants/${restaurantName}/${restaurant?.gallery?.[0]}.webp`} alt="restaurant-photo" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                        <NavLink to={`/restaurantprofile/${restaurant._id}`} className="font-bold focus:text-bg_variant1">{restaurant.name}</NavLink>
                        <p className="text-xs lg:text-ssm">{restaurant.locationData?.district}, {restaurant.locationData?.region}, {restaurant.locationData?.country}</p>
                    </div>
                </div>
            ) : ''}
        </>
    );
}
SearchResultCardForRestaurant.propTypes = {
    restaurant: PropTypes.object,
};

export default SearchResultCardForRestaurant;