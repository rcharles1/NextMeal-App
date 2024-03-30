import { React } from 'react';
import MenuIcon from './MenuIcon.jsx';

import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';


function Header() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const location = useLocation();

    let bgColor, imgSrc, colorTheme,secColorTheme;
    if (location.pathname === '/') {
        bgColor = 'bg-bg_variant1';
        imgSrc = '/assets/img/next-meal-white.png';
        colorTheme = 'pure_white';
    } else {
        bgColor = 'bg-pure_white';
        imgSrc = '/assets/img/next-meal-red.png';
        colorTheme = 'default/80';
        secColorTheme = 'bg-bg_variant2/80';
    }

    return (
        <div className={`h-20 sm:h-28 w-full px-3 py-5 flex flex-row justify-between ${bgColor} cursor-pointer`}>
            <div className="w-28">
                <img src={imgSrc} />
            </div>
            <div className="flex flex-row space-x-3 items-center py-1 w-fit h-fit">
                {isAuthenticated === false ? <Link to='/signin' className= {`w-fit h-fit outline outline-2 text-sm text-${colorTheme} font-bold w-14 h-12 p-2 focus:bg-${secColorTheme} hover:bg-${secColorTheme} rounded-md`}>Sign in</Link> : <Menu /> }
                <MenuIcon />
            </div>
        </div>
    );
}

export default Header;