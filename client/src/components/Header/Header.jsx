import { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { signIn } from '../../features/auth/authSlice.js';
import SearchComponent from '../SearchComponents/Search.jsx';
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

   let colorTheme;
   if (location.pathname === '/') {
         colorTheme = 'pure_white';
   } else {
         colorTheme = 'default/75';
   }

   return (
    <div className="bg-pure_white w-full flex items-center justify-between p-3 h-14 px-2 xl:h-12 lg:py-5 xl:p-4  caret-transparent subpixel-antialiased">
      <div>
         <img src={`/assets/img/next-meal-red.png`} alt="Logo" className="w-20"/>
      </div>
      <div className="flex space-x-1.5 lg:space-x-7 p-1 items-center w-fit">
         <div className={`ssm:hidden md:mt-0.5 `}>
            <SearchComponent colorTheme={colorTheme} />
         </div>
         <div>
            <NavigationBar />
         </div>
         <div className="ssm:mt-0.5">{isAuthenticated ? <ProfileIcon colorTheme={colorTheme} /> : (
            <button onClick={handleSignInSignOut} className="w-fit px-1.5 p-1 text-sm ssm:text-base text-slate_white font-bold bg-bg_variant1 mx-auto rounded xl:text-sm xl:p-2">Sign In </button>
         ) }</div>
      </div>
    </div>  
   );
}

export default Header;