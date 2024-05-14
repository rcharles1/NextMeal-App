import { React } from 'react';
import MenuIcon from './MenuIcon.jsx';
import ProfileIcon from './ProfileIcon.jsx';

import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import NavBar from './NavBar.jsx';


function Header() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const location = useLocation();

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
        <div className={`h-20 sm:p-4 md:h-fit md:py-4 px-3 bg-blur sm:px-8 py-5 flex flex-row justify-between ${bgColor} caret-transparent cursor-pointer`}>
            <div className="w-28 md:w-24 sm:mt-1.5">
                <img src={imgSrc} />
            </div>
            <div className="flex flex-row space-x-1 justify-even items-center py-1 w-26 sm:w-fit h-fit sm:w-fit md:w-fit md:flex-row-reverse md:mt-0 md:py-0">
                {isAuthenticated === false ? <Link to='/signin' className= {`w-fit h-fit z-10 outline outline-1 sm:outline-2 text-sm text-${colorTheme} caret-transparent font-medium w-14 h-12 p-2 sm:h-11 sm:py-3 md:h-fit md:mb-2 md:mx-1 md:-mt-96 focus:bg-${secColorTheme} hover:bg-${secColorTheme} rounded-md`}>Sign in</Link> : <ProfileIcon /> }
                {setVisibility === 'visible' && (
                    <div className={`hidden lg:block text-${colorTheme}`}>
                        <NavBar colorTheme={colorTheme} />
                    </div>
                )}
                {setVisibility === 'visible' && (
                    <div className={`inline-block lg:hidden text-${colorTheme}`}>
                        <MenuIcon />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;