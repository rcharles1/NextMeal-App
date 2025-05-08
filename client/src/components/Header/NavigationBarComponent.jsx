/* eslint-disable no-unused-vars */
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import useNavigationNavBar from "../../hooks/useNavigation";
import classNames from "classnames";
import { CloseIcon, CloseToMenu, MenuToClose } from "../svgs/InterfaceSvg";

import { navItems} from "../../utilities/navItems";

function NavigationBar() {
    const { currentRoute, setCurrentRoute } = useNavigationNavBar();
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const [showDropdown, setShowDropdown] = useState(true);
      
    return (
        <nav className="justify-center">
            <div id="nav-link" className="flex">
                {/* Show the navigation links from medium screens to beyond */}
                <div className="hidden ssm:block sm:hidden md:block">
                    <ul className="flex space-x-2.5 xl:space-x-6">
                        {navItems.map((item) => (
                            <li
                                key={item.label}
                                className={`cursor-pointer text-base lg:text-base font-semibold subpixel-antialiased p-1 lg:mt-0.5 lg:p-0 ${currentRoute === item.label ? 'border-b-2 text-bg_variant1' : 'text-default/65 ' } `}
                                onMouseEnter={() => {
                                    setCurrentRoute(item.label);
                                    setShowDropdown(true)
                                }}
                            >
                                <NavLink smooth="true" to={`/${item.mainLink}`}>{item.label}</NavLink>
                                {currentRoute === item.label && (item.showDropdown === showDropdown) && (
                                    <div 
                                        onMouseEnter={() => setShowDropdown(true)}
                                        onMouseLeave={() => setShowDropdown(false)}
                                        className="absolute top-16 left-12 w-11/12 z-10 bg-slate_white/80 backdrop-blur-xl rounded p-4 ssm:px-6 lg:py-8 lg:px-12 xl:top-20 xl:mt-1.5 xl:py-10 xl:px-28"
                                    >
                                        {/* Add your categorized content here */}
                                        <div className="flex flex-col space-y-1">
                                            <NavLink to={`/${item.mainLink}`} className="text-default/90 text-lg font-extrabold p-1 border-b-2 border-secondary/80 lg:text-3xl lg:p-2">{item.label}</NavLink>
                                            <div className="p-4 grid grid-cols-4 gap-x-8 gap-y-6 ssm:overflow-y-auto lg:grid-cols-3 xl:px-12">
                                                {item.dropDownContent.map((content, index) => {
                                                    return (
                                                        <div key={index} className="flex flex-col max-w-80 lg:w-full">
                                                            <NavLink to={`${content.link}`} className="text-base w-full p-1 font-semibold text-default/90 hover:underline hover:underline-offset-2 lg:text-lg">{content.title }</NavLink>
                                                            <p className="text-sm text-default/65 mt-1 lg:text-sm">{content.summary}</p>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Show the close menu icon on small screens */}
                {isMenuOpen ? (
                    <div className="h-lvh w-full absolute top-0 left-0 bg-bg_variant1 z-50 px-4">
                        <div className="w-full p-1 flex justify-end mt-5 ">
                            <a onClick={() => setIsMenuOpen(false)} className="outline outline-pure_white/50 rounded p-1"><CloseIcon fill='white' /></a>
                        </div>
                            <div className="container mx-auto px-1 py-2 overflow-hidden mt-1 ">
                            <ul className="flex flex-col space-y-2 text-center">
                                {navItems.map((item) => (
                                    <li
                                        key={item.label}
                                        className={classNames(
                                            "cursor-pointer p-1 text-5xl font-black subpixel-antialiased text-slate_white/55",
                                            {
                                                "text-pure_white ":
                                                currentRoute === item.label,
                                            }
                                        )}
                                        onClick={() => {
                                            setCurrentRoute(item.label);
                                            setIsMenuOpen(false);
                                        }}
                                    >
                                        <NavLink to={`/${item.mainLink}`}>{item.label}</NavLink>
                                        {currentRoute === item.label && item.showDropdown && (
                                            <div className="px-2 py-1 w-full mt-2 mx-auto border-t-2 hidden">
                                                {/* Add your categorized content here */}
                                                <div className="flex flex-col space-y-1">
                                                    <div className="flex flex-col gap-">
                                                        {item.dropDownContent.map((content, index) => {
                                                            return (
                                                            <div key={index} className="flex flex-col max-w-80 p-1 subpixel-antialiased">
                                                                <h4 className="text-lg w-fit font-medium text-winterWhite/90 active:underline">{content.title }</h4>
                                                                <p className="text-winterWhite/65 text-sm hidden">{content.summary}</p>
                                                            </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ) : (
                    // Show the hamburger icon
                    <div className="block ssm:hidden sm:block md:hidden relative" onClick={() => setIsMenuOpen(true)}>
                        <CloseToMenu />
                    </div>
                )}
            </div>
        </nav>
    );
}

export default NavigationBar;