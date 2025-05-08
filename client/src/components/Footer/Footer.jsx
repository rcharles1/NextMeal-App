import { NavLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaCopyright } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 caret-transparent">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
                    {/* About Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">About NextMeal</h3>
                        <p className="text-gray-300">
                            We&apos;re devoted to helping you discover and connect with restaurants that serve your perfect next meal.
                        </p>
                        <NavLink 
                            to="/about" 
                            className="inline-block border border-white px-4 py-2 rounded-full hover:bg-white hover:text-gray-900 transition-colors"
                        >
                            Learn More
                        </NavLink>
                    </div>

                    {/* Explore Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Explore</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li>
                                <NavLink 
                                    to="/restaurantListings" 
                                    className="hover:text-white transition-colors"
                                >
                                    Find the Best Restaurants
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/meallistings" 
                                    className="hover:text-white transition-colors"
                                >
                                    Discover Top Meal Picks
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/meallistings" 
                                    className="hover:text-white transition-colors"
                                >
                                    Find the Best Beverages
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Business Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">For Businesses</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li>
                                <NavLink 
                                    to="/stakeholders" 
                                    className="hover:text-white transition-colors"
                                >
                                    Become a Partner
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/stakeholders#whatyoudo" 
                                    className="hover:text-white transition-colors"
                                >
                                    List Your Business
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/stakeholders#joinus" 
                                    className="hover:text-white transition-colors"
                                >
                                    Support Options
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-8"></div>

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Social Links */}
                    <div className="flex space-x-6 mb-6 md:mb-0">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <FaFacebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <FaTwitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <FaInstagram className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Logo */}
                    <div className="mb-6 md:mb-0">
                        <img 
                            src='/assets/img/next-meal-white.png' 
                            alt="NextMeal Logo" 
                            className="h-8 w-auto"
                        />
                    </div>

                    {/* Legal */}
                    <div className="flex items-center text-sm text-gray-400">
                        <div className="flex items-center space-x-4">
                            <NavLink to="/terms" className="hover:text-white transition-colors">
                                Terms
                            </NavLink>
                            <NavLink to="/privacy" className="hover:text-white transition-colors">
                                Privacy
                            </NavLink>
                            <div className="flex items-center">
                                <FaCopyright className="mr-1" />
                                <span>2024 NextMeal</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;