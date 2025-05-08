import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BeverageCard from './BeverageCard';
import { fetchAllBeverages } from '../../utilities/getData';
import Loading from '../ComplementaryComponents/Loading';

function Beverages() {
    const navigate = useNavigate();
    const [beverages, setBeverages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBeverages = async () => {
            setIsLoading(true);
            try {
                const data = await fetchAllBeverages();
                setBeverages(data);
            } catch (error) {
                console.error('Error fetching beverage details:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchBeverages();
    }, []);

    const handleViewAll = () => {
        navigate('/meallistings', { state: { entryPoint: 'beverages' } });
    };

    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Cheers to Great Taste
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Dive into a world of refreshing beverages that not only quench your thirst but also ignite a passion for exceptional dining experiences
                </p>
            </div>

            {/* Beverages Grid */}
            <div className="relative">
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                            {beverages.slice(0, 8).map((beverage) => (
                                <BeverageCard key={beverage._id} beverage={beverage} />
                            ))}
                        </div>
                        <div className="flex justify-center mt-10">
                            <button
                                onClick={handleViewAll}
                                className="bg-bg_variant1 hover:bg-bg_variant1/90 text-pure_white text-base font-semibold py-3 px-6 rounded-full transition-colors duration-300 shadow-md"
                            >
                                View All Beverages
                            </button>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default Beverages;