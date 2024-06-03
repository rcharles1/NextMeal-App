import { React, useEffect } from 'react';
import MenuIcon from './MenuIcon.jsx';
import ProfileIcon from './ProfileIcon.jsx';

import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import { Search } from '/src/components/svgs/InterfaceSvg';
import { signIn } from '../features/auth/authSlice.js';


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
        <div className={`h-20 sm:p-4 md:h-auto px-3 bg-blur sm:px-4 py-5 md:py-3.5 md:px-9 flex justify-between ${bgColor} caret-transparent cursor-pointer`}>
            <div className="w-28 md:w-20 sm:mt-1.5">
                <img src={imgSrc} alt="NextMealApp-Logo" />
            </div>
            <div className="flex justify-end items-start space-x-1.5 sm:w-fit md:py-0 md:space-x-1">
                <div className={`md:block hidden text-${colorTheme}`}>
                    <NavBar colorTheme={colorTheme} />
                </div>
                <div className={`${setVisibility} md:mt-0.5`}><Search fill={colorTheme === 'pure_white' ? 'white' : 'black'} height="25" width="30" /></div>
                <div>
                    {setVisibility === 'visible' && (
                        <div className={`md:hidden text-${colorTheme}`}>
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