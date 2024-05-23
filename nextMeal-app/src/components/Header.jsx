import { React, useEffect } from 'react';
import MenuIcon from './MenuIcon.jsx';
import ProfileIcon from './ProfileIcon.jsx';

import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
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
        colorTheme = 'default/80';
        secColorTheme = 'bg-bg_variant2/80';
        setVisibility = 'invisible';
    }

    return (
        <div className={`h-20 sm:p-4 md:h-auto md:py-4 px-3 bg-blur sm:px-8 py-5 flex justify-between ${bgColor} caret-transparent cursor-pointer`}>
            <div className="w-28 md:w-24 sm:mt-1.5">
                <img src={imgSrc} alt="Description" />
            </div>
            <div className="flex justify-end items-center space-x-1 sm:w-auto md:mt-0 md:py-0">
                <div className={`${setVisibility}`}><Search fill={colorTheme === 'pure_white' ? 'white' : 'black'} height="25" width="30" /></div>
                <div className="w-8 mt-1">
                    {setVisibility === 'visible' && (
                        <div className={`lg:block : hidden text-${colorTheme}`}>
                            <NavBar colorTheme={colorTheme} />
                        </div>
                    )}
                    {setVisibility === 'visible' && (
                        <div className={`lg:hidden text-${colorTheme}`}>
                            <MenuIcon />
                        </div>
                    )}
                </div>
                {isAuthenticated && <ProfileIcon colorTheme={colorTheme} />}
            </div>
        </div>

    );
}

export default Header;