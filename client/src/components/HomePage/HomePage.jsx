import { useState } from 'react';
import Modal from 'react-modal';
import Lottie from 'lottie-react';
import { FiPhone, FiClock, FiHeart } from 'react-icons/fi';
import QuickLinksComponent from '../ComplementaryComponents/QuickLinks';
import Services from '../ServicesComponents/Services';
import Restaurants from '../RestaurantComponents/Restaurants';
import Meals from '../MealComponents/Meals';
import Beverages from '../BeverageComponents/Beverages';
import SearchComponent from '../SearchComponents/Search';
import Stakeholdership from '../StakeholdersComponents/Stakeholdership';
import locationAnimation from '/public/assets/lotties/ping.json';
import foodDeliveryAnimation from '/public/assets/lotties/food-delivery.json';

Modal.setAppElement('#root');

const HomePage = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [locationAddress, setLocationAddress] = useState('');

    const handleChange = (event) => {
        setLocationAddress(event.target.value);
    };

    // const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        closeModal();
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 caret-transparent">
            {/* Navigation Bar */}
            {/* <nav className="sticky top-0 z-50 bg-pure_white/5 backdrop-blur-lg shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <span className="text-2xl font-bold text-bg_variant1">NextMeal</span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#restaurants" className="text-gray-700 hover:text-bg_variant1 transition">Restaurants</a>
                            <a href="#meals" className="text-gray-700 hover:text-bg_variant1 transition">Meals</a>
                            <a href="#beverages" className="text-gray-700 hover:text-bg_variant1 transition">Beverages</a>
                            <a href="#partners" className="text-gray-700 hover:text-bg_variant1 transition">Partners</a>
                        </div>
                        <button 
                            onClick={openModal}
                            className="flex items-center gap-2 px-2.5 py-1 bg-bg_variant1 text-pure_white text-base ring-2 ring-offset-2 ring-bg_variant1 rounded-full hover:bg-bg_variant1/90 transition-colors"
                        >
                            <FiMapPin className="w-5 h-5" />
                            <span className="hidden sm:inline">Set Location</span>
                        </button>
                    </div>
                </div>
            </nav> */}

            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                                <span className="text-bg_variant1">Discover</span> Local Food Gems
                            </h1>
                            <p className="text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 mb-8">
                                Find the best restaurants, meals, and beverages in your area with just a few taps
                            </p>
                            
                            <div className="max-w-xl mx-auto lg:mx-0 mb-8">
                                <SearchComponent onClick={scrollTop} />
                            </div>
                            
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:text-base">
                                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                                    <FiClock className="text-bg_variant1 mr-2" />
                                    <span>Fast Delivery</span>
                                </div>
                                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                                    <FiHeart className="text-bg_variant1 mr-2" />
                                    <span>Curated Selection</span>
                                </div>
                                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                                    <FiPhone className="text-bg_variant1 mr-2" />
                                    <span>Easy Ordering</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-bg_variant1/10 to-transparent rounded-3xl -rotate-6"></div>
                            <Lottie 
                                animationData={foodDeliveryAnimation} 
                                className="w-full h-auto"
                                loop={true}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <QuickLinksComponent />
                </div>
            </section>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
                <Services />
                <div id="restaurants"><Restaurants /></div>
                <div id="meals"><Meals /></div>
                <div id="beverages"><Beverages /></div>
                <div id="partners"><Stakeholdership /></div>
            </main>

            {/* Location Modal */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Location Modal"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-8 w-11/12 max-w-md"
                overlayClassName="fixed inset-0 bg-black/50 backdrop-blur-sm"
            >
                <div className="space-y-6 text-center">
                    <h2 className="text-2xl font-bold text-gray-900">Save Your Location</h2>
                    <div className="mx-auto w-32">
                        <Lottie animationData={locationAnimation} loop speed={1} />
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            value={locationAddress}
                            onChange={handleChange}
                            type="text"
                            required
                            placeholder="Enter your city or region"
                            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-bg_variant1 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="w-full py-3 bg-bg_variant1 text-white rounded-lg hover:bg-bg_variant1/90 transition-colors font-medium"
                        >
                            Save Location
                        </button>
                    </form>
                    <button
                        onClick={closeModal}
                        className="text-bg_variant1 hover:text-bg_variant1/80 transition-colors font-medium"
                    >
                        Cancel
                    </button>
                </div>
            </Modal>
        </div>
    );
}

export default HomePage;