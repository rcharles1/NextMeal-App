import { React } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '../features/menu/menuSlice.js'

function NavBar() {
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
        <div>
            <div className="h-20 w-full p-3 rounded-md flex flex-row justify-between caret-transparent cursor-none">
                <div className="w-40 ">
                    <img src='/assets/img/next-meal-white.png' />
                </div>
                <div className="w-10">
                    <div className="w-auto mt-5" onClick={handleOnClick}>
                        {!isOpen && 
                            <Link to="#">
                                <img src='/assets/icon/menu-line.svg' className="transition-transform duration-1200 ease-in-out transform rotate-180"/>
                            </Link>
                        }
                        {isOpen && 
                            <img src='/assets/icon/close.svg' onClick={closeMenu} className="cursor-pointer transition-transform duration-500 ease-in-out transform rotate-180"/>
                        }
                    </div>
                    {isOpen && (
                        <div className="fixed inset-0 bg-light_dark opacity-75 flex items-center justify-center" onClick={closeMenu}>
                            <div className="h-96 w-80 items-center justify-center p-8 rounded shadow-lg" onClick={e => e.stopPropagation()}>
                                <Link to="/about" className="block py-2">About</Link>
                                <Link to="/services" className="block py-2">Services</Link>
                                <Link to="/contact" className="block py-2">Contact</Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NavBar;