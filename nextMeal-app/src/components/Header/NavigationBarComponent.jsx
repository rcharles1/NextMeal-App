import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import useNavigationNavBar from "/src/hooks/useNavigation";
import classNames from "classnames";
import { CloseToMenu, MenuToClose } from "../Interface Icons/InterfaceIconsComponent";

import { navItems} from "../../utilities/navItems";

function NavigationBar() {
    const { currentRoute, setCurrentRoute } = useNavigationNavBar();
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const [showDropdown, setShowDropdown] = useState(false);
      
    return (
        <div className="bg-cyan600 h-12 p-2 px-4 xl:h-14 xl:p-4 caret-transparent subpixel-antialiased">
            <nav className="rounded-full w-full mx-auto px-2 ssm:px-0 caret-transparent z-10">
                <div className="flex flex-row justify-between items-center ssm:overflow-hidden ssm:space-x-16 ssm:px-4 lg:px-10 xl:px-16 2xl:px-32">
                    <div className="flex space-x-4 ssm:space-x-2 items-center ssm:items-none lg:space-x-4">
                        <img src="/portfolio-logo.png" alt="logo" className="size-4 ssm:size-5 lg:size-6" />
                        <h1 className="font-bold text-xl ssm:text-lg text-winterWhite lg:mt-0.5 xl:mt-1.5 xl:text-2xl">ROBIN CHARLES</h1>
                    </div>
                    <div id="nav-link" className="flex space-x-20 md:space-x-8">
                        {/* Show the navigation links from medium screens to beyond */}
                        <div className="hidden md:block">
                            <ul className="flex space-x-4 xl:space-x-6">
                                {navItems.map((item) => (
                                    <li
                                        key={item.label}
                                        className={`cursor-pointer text-winterWhite/80 text-sm lg:text-base xl:text-xl font-semibold subpixel-antialiased p-1 lg:mt-0.5 lg:p-0 ${currentRoute === item.label ? 'border-b-2' : '' } `}
                                        onMouseEnter={() => {
                                            setCurrentRoute(item.label);
                                            setShowDropdown(true)
                                        }}
                                    >
                                        <NavLink smooth="true" to={`/${item.mainLink}`}>{item.label}</NavLink>
                                        {currentRoute === item.label && showDropdown && (
                                            <div 
                                                onMouseEnter={() => setShowDropdown(true)}
                                                onMouseLeave={() => setShowDropdown(false)}
                                                className="absolute top-16 left-12 w-11/12 z-10 bg-quaternary/85 backdrop-blur-xl rounded p-4 ssm:px-6 lg:py-8 lg:px-12 xl:top-20 xl:mt-1.5 xl:py-10 xl:px-28"
                                            >
                                                {/* Add your categorized content here */}
                                                <div className="flex flex-col space-y-1">
                                                    <NavLink to={`/${item.mainLink}`} className="text-winterWhite/90 text-lg font-extrabold p-1 border-b-2 border-secondary/80 lg:text-3xl lg:p-2">{item.label}</NavLink>
                                                    <div className="p-4 grid grid-cols-4 gap-x-8 gap-y-6 ssm:overflow-y-auto lg:grid-cols-3 xl:px-12">
                                                        {item.dropDownContent.map((content, index) => {
                                                            return (
                                                                <div key={index} className="flex flex-col max-w-80 lg:w-full">
                                                                    <NavLink to={`${content.link}`} className="text-sm w-full p-1 font-semibold text-winterWhite/90 hover:underline hover:underline-offset-2 lg:text-lg">{content.title }</NavLink>
                                                                    <p className="text-xs text-winterWhite/65 mt-1 lg:text-sm">{content.summary}</p>
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
                            <div className="h-lvh w-full absolute top-0 -left-20 backdrop-blur-xl bg-quaternary/85 z-50 p-6">
                                <div className="w-full p-1 flex justify-end mt-5 ">
                                  <a onClick={() => setIsMenuOpen(false)} className="border rounded p-1"><MenuToClose /></a>
                                </div>
                                 <div className="container mx-auto px-1 py-2 overflow-hidden mt-20 ">
                                    <ul className="flex flex-col space-y-4 text-center">
                                        {navItems.map((item) => (
                                            <li
                                                key={item.label}
                                                className={classNames(
                                                    "cursor-pointer p-2 text-6xl font-black subpixel-antialiased text-winterWhite/45",
                                                    {
                                                        "text-cyan600 ":
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
                                                    <div className="px-2 py-1 w-full mt-2 mx-auto border-t-2 border-cyan600 hidden">
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
                            <div className="block md:hidden relative" onClick={() => setIsMenuOpen(true)}>
                                <CloseToMenu />
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavigationBar;