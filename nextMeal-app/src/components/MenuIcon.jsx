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
        }
    };

    const imgSrc1 = location.pathname === '/' ? '/assets/icon/menu-to-close-light.svg' : '/assets/icon/menu-to-close.svg';
    const imgSrc2 = location.pathname === '/' ? '/assets/icon/close-to-menu-light.svg' : '/assets/icon/close-to-menu.svg';
    const bg = location.pathname === '/' ? 'bg-pure_white/80' : 'bg-pure_white';
    const marginLeft = location.pathname === '/' ? 'right-56': '';

    const links = [
        { to: "/", text: "Home" },
        { to: "/pageNotFound", text: "About" },
        { to: "/restaurantslist", text: "Restaurants" },
        { to: "/mealslist", text: "Meals"},
        { to: "/mealslist", text: "Beverages" },
        { to: "/services", text: "Services" },
        { to: "/pageNotFound", text: "Contacts" },
    ];

    return (
        <>
           <div className="w-fit flex flex-col space-y-0 h-fit " onClick={handleMenuToggle}>
                {isOpen ? (
                    <div className="fixed -mt-4 w-8 h-8 space-y-5">
                        <div><img src={imgSrc1} className="size-8 sm:size-10"/></div>
                        <div className={`${bg} ${marginLeft} relative w-64 h-96 rounded-md`} style={{ backdropFilter: 'blur(5px)' }}>
                            <div className="h-lvh w-80 items-center justify-center pt-3 px-4 space-y-2 font-semibold text-default/70 text-lg">
                                {links.map((link, index) => (
                                    <Link key={index} to={link.to} className={`block ${index === 0 ? 'border-l-4 border-gray/90' : ''} p-2`}>{link.text}</Link>
                                ))}
                            </div>
                        </div>
                    </div>

                ) :  <img src={imgSrc2} className="size-8 sm:size-10"/>}
            </div>

            
        </>
    );
}

export default MenuIcon;