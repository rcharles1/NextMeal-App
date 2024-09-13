import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toggleMenu } from '../../features/menu/menuSlice.js';

import { navLinks } from '../../utilities/links.js';

const MenuIcon = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.menu.isOpen);
    const location = useLocation();
    const navigate = useNavigate(); 

    const handleMenuToggle = () => {
        dispatch(toggleMenu());
    }

    const closeMenu = (event) => {
        event.stopPropagation();
        if(isOpen) {
            dispatch(toggleMenu());
        }
    };

    const handleSignInSignOut = () => {
        navigate('/signin')
    }

    const imgSrc1 = location.pathname === '/' ? '/assets/icon/menu-to-close-light.svg' : '/assets/icon/menu-to-close.svg';
    const imgSrc2 = location.pathname === '/' ? '/assets/icon/close-to-menu-light.svg' : '/assets/icon/close-to-menu.svg';
    const bg = location.pathname === '/' ? 'bg-pure_white/80' : 'bg-pure_white';
    const marginLeft = location.pathname === '/' ? 'right-56': '';
    const marginTop = location.pathname === '/' ? '-mt-4': '-mt-7';

    return (
        <>
           <div className="w-fit flex flex-col space-y-0 h-fit" onClick={handleMenuToggle}>
                {isOpen ? (
                    <div className={`fixed ${marginTop} top-9 w-8 h-8 space-y-6`}>
                        <div><img src={`/assets/icon/menu-to-close.svg`} className="size-6 sm:size-10"/></div>
                        <div className={`${bg} ${marginLeft} relative divide divide-y divide-light_dark/65 space-y-2 w-64 h-fit rounded-md`} style={{ backdropFilter: 'blur(10px)' }}>
                            <div className="h-72 w-64 items-center justify-center pt-3 px-4 space-y-2 font-medium text-default text-base">
                                {navLinks.map((link, index) => (
                                    <Link key={index} to={link.to} className={`block ${index === 0 ? 'border-l-4 border-gray/90' : ''} p-2 hover:text-bg_variant1 hover:border-l-2 hover:border-bg_variant1 `}>{link.text}</Link>
                                ))}
                            </div>
                            <div className="h-16 items-center justify-center py-2 px-3 text-pure_white text-lg font-semibold">
                                <button onClick={handleSignInSignOut} className="w-full h-12 bg-bg_variant1 mx-auto rounded">Sign In </button>
                            </div>
                        </div>
                    </div>
                ) :  <img src={`/assets/icon/close-to-menu.svg`} className="size-7 sm:size-10"/>}
            </div>
        </>
    );
}

export default MenuIcon;