import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleMenu } from '../features/menu/menuSlice.js';

function Menu() {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.menu.isOpen);

    const handleOnClick = () => {
        dispatch(toggleMenu());
     }

     const closeMenu = () => {
         if(isOpen) {
             dispatch(toggleMenu());
         }
     };

    return (
        <>
            <div className="w-auto mt-5" onClick={handleOnClick}>
                        {!isOpen && 
                            <Link to="#">
                                <img src='/assets/icon/menu-line.svg' className="transition-transform duration-1200 ease-in-out transform rotate-180"/>
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

export default Menu;