import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';

import { fetchSampleRestaurants } from '../../utilities/getData';

import { useNavigate } from 'react-router-dom';
import Loading from '../ComplementaryComponents/Loading';

function Restaurants() {
    const navigate = useNavigate();
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const data = await fetchSampleRestaurants();
                setRestaurants(data);
            } catch (error) {
                console.error('Error fetching restaurants:', error);
            }
        };
        fetchRestaurants();
    }, [])

    const handleClick = () => {
        navigate('/restaurantlistings');
    }
    
    return (
        <div className="flex flex-col space-y-8 md:space-y-6 justify-center antialiased items-center h-1/2 w-100 caret-transparent">
            <div className="flex flex-col space-y-3 text-center px-3.5">
                <span className="text-3xl sm:text-5xl font-extrabold text-heading ">
                    Uncover Dining Delights! 
                </span>
                <span className="font-semibold text-center leading-relaxed block ssm:text-base lg:text-lg text-pretty ssm:w-11/12 mx-auto text-default/65">
                    Explore the best restaurants around and uncover delightful dining experiences that will tantalize your taste buds.
                </span>
            </div>
            <div className="flex flex-col space-y-2 rounded-sm w-full p-2 md:px-1 lg:px-16 relative">
                <div className={`absolute inset-0 bg-gradient-to-t from-slate_white to-transparent z-10 `}></div>
                {restaurants ? (
                    <div className="bg-bg_variant2 grid grid-cols-2 gap-4 px-4 ssm:grid-cols-3 ssm:gap-x-0 ssm:px-14 ssm:gap-y-4 lg:grid-cols-4 lg:gap-x-0 mx-auto overflow-hidden py-2 w-full">
                        {restaurants.slice(0, 6).map((restaurant, i) => <RestaurantCard key={i} restaurant={restaurant} />)}
                    </div>
                ) : <Loading />}
                <div className="absolute inset-x-0 bottom-12 left-1/2 transform -translate-x-1/2 w-fit z-10 bg-bg_variant1 px-2.5 rounded-3xl">
                    <button onClick={handleClick} className="text-sm tracking-wide text-slate_white font-bold p-2">See All Restaurants</button>
                </div>
            </div>

        </div>
    );
}

export default Restaurants;