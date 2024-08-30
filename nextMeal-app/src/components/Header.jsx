import { React, useEffect } from 'react';
import MenuIcon from './MenuIcon.jsx';
import ProfileIcon from './ProfileIcon.jsx';

import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from './NavBar.jsx';
import { signIn } from '../features/auth/authSlice.js';
import SearchComponent from './Search.jsx';


function Header() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate =useNavigate();

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            dispatch(signIn(userData));
        }
    }, [dispatch]);

    const handleSignInSignOut = () => {
        navigate('/signin')
    }

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
        <div className={`h-20 sm:p-4 md:h-auto px-3 sm:px-4 py-5 md:py-3.5 md:px-14 flex justify-between bg-pure_white caret-transparent cursor-pointer`}>
            <div className="w-24 md:w-20 sm:mt-1.5">
                <img src={`/assets/img/next-meal-red.png`} alt="NextMealApp-Logo" />
            </div>
            <div className="flex justify-end items-center space-x-1.5 sm:w-fit md:py-0 md:space-x-1">
                <div className={`md:block hidden text-${colorTheme}`}>
                    <NavBar colorTheme={colorTheme} />
                </div>
                <div className={`${setVisibility} md:hidden md:mt-0.5 `}>
                    <SearchComponent colorTheme={colorTheme} />
                </div>
                <div>
                    {setVisibility === 'visible' && (
                        <div className={`md:hidden w-6 text-${colorTheme}`}>
                            <MenuIcon />
                        </div>
                    )}
                </div>
                <div className="md:mt-0.5">{isAuthenticated ? <ProfileIcon colorTheme={colorTheme} /> : (
                        <button onClick={handleSignInSignOut} className="w-fit p-2 mt-0 text-sm text-slate_white font-medium bg-bg_variant1 mx-auto rounded">Sign In </button>
                ) }</div>
            </div>
        </div>
    );
}

export default Header;