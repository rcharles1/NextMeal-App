import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import NavBar from '../Header/NavBar.jsx';
import { signIn } from '../../features/auth/authSlice.js';
import SearchComponent from '../SearchComponents/Search.jsx';
import MenuIcon from '../Header/MenuIcon.jsx';
import ProfileIcon from '../Header/ProfileIcon.jsx';
import NavigationBar from "../Header/NavigationBarComponent.jsx";

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

   let bgColor, colorTheme, setVisibility;
   if (location.pathname === '/') {
         bgColor = 'bg-bg_variant1';
         colorTheme = 'pure_white';
         setVisibility = 'visible';
   } else {
         bgColor = 'bg-pure_white';
         colorTheme = 'default/75';
         setVisibility = 'invisible';
   }

   return (
    <div className="bg-pure_white flex items-center justify-between p-3 h-14 px-4 xl:h-12 lg:px-9 lg:py-4 xl:p-4 caret-transparent subpixel-antialiased">
      <div>
         <img src={`/assets/img/next-meal-red.png`} alt="Logo" className="w-20"/>
      </div>
      <div className="flex space-x-3 items-center w-fit">
         <div className={`ssm:hidden md:mt-0.5 `}>
            <SearchComponent colorTheme={colorTheme} />
         </div>
         <div>
            <NavigationBar />
         </div>
         <div className="md:mt-0.5">{isAuthenticated ? <ProfileIcon colorTheme={colorTheme} /> : (
            <button onClick={handleSignInSignOut} className="w-fit px-1.5 p-1 mt-0 text-base text-slate_white font-bold bg-bg_variant1 mx-auto rounded">Sign In </button>
         ) }</div>
      </div>
    </div>  
   );
}

export default Header;