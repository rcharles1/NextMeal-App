/* eslint-disable no-unused-vars */
import { useState } from "react";
import { NavLink, Link } from 'react-router-dom';
import useNavigationNavBar from "../../hooks/useNavigation";
import classNames from "classnames";
import { CloseIcon, CloseToMenu, LocationIcon } from "../svgs/InterfaceSvg";
import { navItems } from "../../utilities/navItems";

function NavigationHeader() {
    const { currentRoute, setCurrentRoute } = useNavigationNavBar();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-bg_variant1 hover:text-bg_variant1/90 transition-colors">
                        NextMeal
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="relative">
                            <ul className="flex space-x-6">
                                {navItems.map((item) => (
                                    <li
                                        key={item.label}
                                        className="relative group"
                                        onMouseEnter={() => {
                                            setCurrentRoute(item.label);
                                            setShowDropdown(true);
                                        }}
                                        onMouseLeave={() => setShowDropdown(false)}
                                    >
                                        <NavLink
                                            to={`/${item.mainLink}`}
                                            className={({ isActive }) => 
                                                classNames(
                                                    "text-gray-600 hover:text-bg_variant1 transition-colors text-base font-medium",
                                                    { "text-bg_variant1": isActive }
                                                )
                                            }
                                        >
                                            {item.label}
                                        </NavLink>

                                        {item.showDropdown && (
                                            <div className="absolute top-full left-0 w-screen max-w-4xl mt-2 bg-white/95 backdrop-blur-lg rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                                <div className="p-6 space-y-4">
                                                    <div className="grid grid-cols-3 gap-6">
                                                        {item.dropDownContent.map((content, index) => (
                                                            <Link
                                                                key={index}
                                                                to={content.link}
                                                                className="group block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                                            >
                                                                <h4 className="text-base font-medium text-gray-900 group-hover:text-bg_variant1">
                                                                    {content.title}
                                                                </h4>
                                                                <p className="mt-1 text-sm text-gray-500">
                                                                    {content.summary}
                                                                </p>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Location Button */}
                    <button 
                        
                        className="flex items-center gap-2 px-4 py-2 bg-bg_variant1 text-white text-sm font-medium rounded-full hover:bg-bg_variant1/90 transition-colors shadow-sm"
                    >
                        <LocationIcon className="w-5 h-5" />
                        <span className="hidden sm:inline">Set Location</span>
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-gray-600 hover:text-bg_variant1 transition-colors"
                    >
                        {isMenuOpen ? <CloseIcon /> : <CloseToMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-white z-50">
                    <div className="px-4 py-5">
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-2xl font-bold text-bg_variant1">NextMeal</span>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 text-gray-600 hover:text-bg_variant1"
                            >
                                <CloseIcon className="w-6 h-6" />
                            </button>
                        </div>

                        <ul className="space-y-4">
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    <NavLink
                                        to={`/${item.mainLink}`}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={({ isActive }) =>
                                            classNames(
                                                "block px-4 py-3 rounded-lg text-gray-700",
                                                { "bg-bg_variant1/10 text-bg_variant1": isActive }
                                            )
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default NavigationHeader;