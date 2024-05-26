import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import Slideshow from './Slideshow'
import { Carousel } from 'react-responsive-carousel';
import RestaurantCarousel from './Carousel';

function SignIn() {
   const navigate = useNavigate();

   const handleSubmit = async event => {
    navigate('/');
   };

   const handleGoogleSignIn = async () => {
    window.location.href = 'http://localhost:3000/auth/google';
   };
    
    return (
        <div className="h-screen w-full bg-bg_variant1/5 md:flex md:flex-row-reverse antialised caret-transparent text-default/75">
            <div className="block md:hidden h-1/2 z-50 bg-graphicRectangles bg-cover sm:h-56 md:w-5/12 md:h-screen md:bg-cover bg-center caret-transparent w-100 relative">
               <div className="w-56 absolute mt-1 top-36 left-28 sm:left-48 md:left-64 md:top-40"><img src='/assets/img/next-meal-white.png' /></div>
            </div>
            <div className="hidden md:block bg-pure_white/85 pl-12 pr-3 py-3 bg-cover md:w-6/12 md:h-screen bg-center caret-transparent">
               <div className="h-full bg-light_dark/30 rounded-md overflow-hidden">
               </div>
            </div>
            <div className="w-full sm:w-2/3 mx-auto sm:p-6 sm:mt-4 md:mt-0 md:h-screen md:justify-center md:w-6/12 rounded-md md:rounded-none bg-pure_white/85 h-1/2 px-7 flex flex-col space-y-2">
               <div className="mx-auto h-fit text-center space-y-2">
                    <h2 className="hidden md:block font-bold text-xl">Welcome Back</h2>
                    <h3 className="hidden md:block font-semibold text-xs text-default/35 mb-1 caret-transparent">Please enter your details</h3>
                    <form  onSubmit={handleSubmit}>
                        <label className="flex flex-col space-y-2 md:space-y-1 mx-auto md:w-10/12">
                            <input type="email" name="email" placeholder='Enter Email Address' required className="outline outline-light_dark/15 md:outline-2 md:text-xs rounded-md h-12 md:h-7 md:px-2 focus:outline-3 focus:outline-bg_variant1 focus:caret-bg_variant1 px-4"/>
                        </label>
                        <button className="h-12 rounded-md w-full sm:w-64 md:w-64 md:mx-6 md:h-8 mt-4 text-lg md:text-xs text-slate_white font-semibold bg-bg_variant1 caret-transparent">
                            Sign In
                        </button>
                    </form>
                    <div className="mx-auto p-2">
                       <div className="flex items-center w-56 mx-auto space-x-2"> 
                            <p className="mx-auto border-b-2 w-28 border-light_dark/30 "> </p>
                            <p className="text-xs font-medium text-default/70">OR</p>
                            <p className="mx-auto border-b-2 w-28 border-light_dark/30 "> </p>
                        </div>
                        <button onClick={handleGoogleSignIn} className="flex flex-row space-x-6 justify-start items-center h-12 rounded-md w-80 md:w-64 md:mx-6 md:h-9 mt-4 p-5 text-lg md:text-xs border-2 border-light_dark/25 shadow-sm font-semibold caret-transparent active:border-2 active:border-bg_variant1">
                            <span className='size-8'><img src='/assets/icon/icons_google.svg'/></span>
                            <span className="mt-1">Continue with Google</span>
                        </button>
                    </div>
               </div>
            </div>
        </div>
    );
}

export default SignIn;