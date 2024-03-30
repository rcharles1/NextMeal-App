import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { toggleMenu } from '../features/menu/menuSlice.js';

function MenuIcon() {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.menu.isOpen);
    const location = useLocation();

    const handleOnClick = () => {
        dispatch(toggleMenu());
    }

    const closeMenu = () => {
        if(isOpen) {
            dispatch(toggleMenu());
        }
    };

    let imgSrc;
    if (location.pathname === '/') {
        imgSrc = '/assets/icon/menu-line.svg';
    } else {
        imgSrc = '/assets/icon/menu-line-dark.svg';
    }

    return (
        <>
            <div className="w-auto" onClick={handleOnClick}>
                {!isOpen && 
                    <Link to="#">
                        <img src={imgSrc} className="transition-transform duration-1200 ease-in-out transform rotate-180"/>
                    </Link>
                }
                {isOpen && 
                    <img src='/assets/icon/close.svg' onClick={closeMenu} className="cursor-pointer fill-pure_White transition-transform duration-500 ease-in-out transform rotate-180"/>
                }
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-light_dark opacity-75 w-100 flex items-center justify-center" onClick={closeMenu}>
                    <div className="h-96 w-80 items-center justify-center p-8 rounded shadow-lg" onClick={e => e.stopPropagation()}>
                        <Link to="/about" className="block py-2">About</Link>
                        <Link to="/services" className="block py-2">Services</Link>
                        <Link to="/contact" className="block py-2">Contact</Link>
                    </div>
                </div>
            )}
        </>
    );
}

export default MenuIcon;