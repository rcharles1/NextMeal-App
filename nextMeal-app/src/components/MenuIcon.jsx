import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { toggleMenu } from '../features/menu/menuSlice.js';

const MenuIcon = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.menu.isOpen);
    const location = useLocation();

    const handleMenuToggle = () => {
        dispatch(toggleMenu());
    }

    const closeMenu = (event) => {
        event.stopPropagation();
        if(isOpen) {
            dispatch(toggleMenu());
            console.log('Menu closed');
        }
    };

    const imgSrc = location.pathname === '/' ? '/assets/icon/menu-line.svg' : '/assets/icon/menu-line-dark.svg';
    const marginTop = location.pathname === '/' ? 'mt-14' : 'mt-0';

    return (
        <>
            <div className="w-auto" onClick={handleMenuToggle}>
                {!isOpen && 
                    <Link to="#">
                        <img src={imgSrc} className="transition-transform duration-1200 ease-in-out sm:size-10 transform rotate-180"/>
                    </Link>
                }
                {isOpen && 
                    <img src='/assets/icon/close.svg' className={`cursor-pointer sm:size-10 transition-transform duration-500 ease-in-out transform rotate-180`}/>
                }
            </div>
            {isOpen && (
                <div className={`fixed inset-0 backdrop-blur-2xl bg-opacity-100 bg-pure_white ${marginTop} opacity-95 h-screen w-56 flex items-start justify-left py-6 `}  onClick={closeMenu} style={{left: 0, transition: 'width 0.5s'}}>
                    <div className="h-fit w-80 items-center justify-center pt-5 px-4 space-y-2 font-medium text-base">
                        <Link to="/about" className="block border-l-4 border-gray/90  p-2">About</Link>
                        <Link to="/services" className="block  p-2">Services</Link>
                        <Link to="/contact" className="block  p-2">Contact</Link>
                    </div>
                </div>
            )}
        </>
    );
}

export default MenuIcon;
