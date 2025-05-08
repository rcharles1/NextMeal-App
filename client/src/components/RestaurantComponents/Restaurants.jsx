import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import { fetchSampleRestaurants } from '../../utilities/getData';
import Loading from '../ComplementaryComponents/Loading';

function Restaurants() {
    const navigate = useNavigate();
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchRestaurants = async () => {
            setIsLoading(true);
            try {
                const data = await fetchSampleRestaurants(0);
                setRestaurants(data);
            } catch (error) {
                console.error('Error fetching restaurants:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchRestaurants();
    }, []);

    const handleClick = () => {
        navigate('/restaurantlistings');
    };

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Uncover Dining Delights!
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Explore the best restaurants around and uncover delightful dining experiences
                </p>
            </div>

            {/* Restaurant Grid */}
            <div className="relative">
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                            {restaurants.slice(0, 4).map((restaurant) => (
                                <RestaurantCard 
                                    key={restaurant._id} 
                                    restaurant={restaurant} 
                                />
                            ))}
                        </div>
                        <div className="flex justify-center mt-8">
                            <button
                                onClick={handleClick}
                                className="bg-bg_variant1 hover:bg-bg_variant1/90 text-pure_white text-base font-semibold py-3 px-6 rounded-full transition-colors duration-300 shadow-md"
                            >
                                View All Restaurants
                            </button>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default Restaurants;