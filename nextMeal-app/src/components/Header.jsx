import { React, useEffect } from 'react';
import MenuIcon from './MenuIcon.jsx';
import ProfileIcon from './ProfileIcon.jsx';

import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import { signIn } from '../features/auth/authSlice.js';
import SearchComponent from './Search.jsx';


function Header() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            dispatch(signIn(userData));
        }
    }, [dispatch])

    let bgColor, imgSrc, colorTheme,secColorTheme, setVisibility;
    if (location.pathname === '/') {
        bgColor = 'bg-bg_variant1';
        imgSrc = '/assets/img/next-meal-white.png';
        colorTheme = 'pure_white';
        setVisibility = 'visible';
    } else {
        bgColor = 'bg-pure_white';
        imgSrc = '/assets/img/next-meal-red.png';
        colorTheme = 'default/75';
        secColorTheme = 'bg-bg_variant2/80';
        setVisibility = 'invisible';
    }

    return (
        <div className={`h-20 sm:p-4 md:h-auto px-3 bg-blur border-b-2 border-bg_variant1/10 sm:px-4 py-5 md:py-3.5 md:px-14 flex justify-between ${bgColor} caret-transparent cursor-pointer`}>
            <div className="w-28 md:w-14 sm:mt-1.5">
                <img src={imgSrc} alt="NextMealApp-Logo" />
            </div>
            <div className="flex justify-end items-center space-x-1.5 sm:w-fit md:py-0 md:space-x-1">
                <div className={`md:block hidden text-${colorTheme}`}>
                    <NavBar colorTheme={colorTheme} />
                </div>
                <div className={`${setVisibility} md:mt-0.5 size-6`}>
                    <SearchComponent colorTheme={colorTheme} />
                </div>
                <div>
                    {setVisibility === 'visible' && (
                        <div className={`md:hidden w-6 text-${colorTheme}`}>
                            <MenuIcon />
                        </div>
                    )}
                </div>
                <div className="md:mt-0.5">{isAuthenticated && <ProfileIcon colorTheme={colorTheme} />}</div>
            </div>
        </div>
    );
}

export default Header;