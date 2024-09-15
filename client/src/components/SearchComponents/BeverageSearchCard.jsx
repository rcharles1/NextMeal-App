import { NavLink } from 'react-router-dom';

function SearchResultCardForBeverage({ beverage }) {
    return (
        <>
            {beverage ? (
                <div className="flex items-center mb-2 space-x-4 text-sm md:text-ssm font-semibold">
                    <div className="size-16 md:size-12 rounded-lg overflow-hidden items-center">
                        <img src={`/assets/img/gallery/meals/beverages/${beverage?.img}.webp`} alt="beverage-photo" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col">
                        <NavLink to={`/restaurantprofile/${beverage._id}`} className="font-bold focus:text-bg_variant1">{beverage.name}</NavLink>
                        <p className="text-xs">{beverage.category?.[0]}</p>
                    </div>
                </div>
            ) : ''}
        </>
    );
}

export default SearchResultCardForBeverage;