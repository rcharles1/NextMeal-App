import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MealCard from './MealCard';
import { fetchAllMeals } from '../../utilities/getData';
import Loading from '../ComplementaryComponents/Loading';

function Meals() {
    const navigate = useNavigate();
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMeals = async () => {
            setIsLoading(true);
            try {
                const data = await fetchAllMeals();
                setMeals(data);
            } catch (error) {
                console.error('Error fetching meals:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchMeals();
    }, []);

    const handleViewAll = () => {
        navigate('/meallistings', { state: { entryPoint: 'meals' } });
    };

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Discover the Local&apos;s Favorite Meals
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    From traditional recipes to modern twists, explore the flavors that define the region&apos;s cuisine
                </p>
            </div>

            {/* Meals Grid */}
            <div className="relative">
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                            {meals.slice(0, 4).map((meal) => (
                                <MealCard key={meal._id} meal={meal} />
                            ))}
                        </div>
                        <div className="flex justify-center mt-10">
                            <button
                                onClick={handleViewAll}
                                className="bg-bg_variant1 hover:bg-bg_variant1/90 text-pure_white text-base font-semibold py-3 px-6 rounded-full transition-colors duration-300 shadow-md"
                            >
                                View All Meals
                            </button>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default Meals;