import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { EmailIcon } from '../components/svgs/InterfaceSvg';
import { useMediaQuery } from 'react-responsive';
import PosterCarousel from './PostersSlideShow';

function SignIn() {
   const navigate = useNavigate();
   const isMediumScreen = useMediaQuery({ minWidth: 768 });

   let iconSize = isMediumScreen ? '20' : '30';

   const handleSubmit = async event => {
    navigate('/');
   };

   const handleGoogleSignIn = async () => {
    window.location.href = 'http://localhost:3000/auth/google';
   };
    
    return (
        <div className="h-screen w-full bg-bg_variant1/5 md:flex md:flex-row-reverse antialised caret-transparent text-default/75">
            <div className="block md:hidden h-1/2 bg-graphicRectangles bg-cover sm:h-56 md:w-5/12 md:h-screen md:bg-cover bg-center caret-transparent w-100 relative">
               <div className="w-56 absolute mt-1 top-36 left-28 sm:left-48 md:left-64 md:top-40"><img src='/assets/img/next-meal-white.png' /></div>
            </div>
            <div className="hidden md:block bg-pure_white/85 pl-12 p-8 pt-10 bg-cover md:w-6/12 md:h-screen bg-center caret-transparent">
               <div className="h-fit rounded-md overflow-hidden">
                   <PosterCarousel />
               </div>
            </div>
            <div className="w-full md:bg-pure_white mx-auto sm:p-6 md:mt-0 md:h-screen md:justify-center md:w-6/12 h-1/2 px-7 flex flex-col space-y-2">
               <div className="sm:w-2/3 md:w-full md:p-16 h-fit mt-4 sm:mt-8 md:mt-0 text-center bg-pure_white p-5 space-y-2">
                    <h2 className="font-bold text-2xl md:text-3xl">Welcome Back</h2>
                    <h3 className="font-semibold sm:text-xs text-default/35 mb-1 caret-transparent">Please enter your details</h3>
                    <form  onSubmit={handleSubmit}>
                        <label className="flex">
                            <div className="relative w-full">
                                <div className="absolute left-3 top-1.5 md:top-1 px-1 p-0.5"><EmailIcon fill='gray' height={iconSize} width={iconSize} /></div>
                                <input type="email" name="email" placeholder='Email Address' required className="p-2.5 px-12 ml-1 w-full md:p-2 md:pl-12 md:text-xs font-medium rounded-md caret-default bg-light_dark/10 focus:outline-none focus:ring focus:ring-2 ring-bg_variant1 "/>
                            </div>
                        </label>
                        <button className="rounded-md w-full mt-5 p-2 text-lg md:text-xs text-pure_white font-bold bg-bg_variant1 caret-transparent">
                            Sign In
                        </button>
                    </form>
                    <div className="sm:mx-auto p-2">
                        <div className="flex items-center w-56 mx-auto mt-4 md:mt-2 space-x-2"> 
                            <hr className="flex-grow border-b-2 md:border-b border-light_dark/30" />
                            <p className="text-xs font-medium text-default/70 px-2">OR</p>
                            <hr className="flex-grow border-b-2 md:border-b border-light_dark/30" />
                        </div>
                        <button onClick={handleGoogleSignIn} className="flex flex-row space-x-4 bg-light_dark/10 justify-center items-center rounded-md w-full mt-4 p-2 md:p-2 md:text-xs border-2 border-light_dark/25 shadow-sm font-semibold caret-transparent active:border-2 active:border-bg_variant1">
                            <img src='/assets/icon/icons_google.svg' className='h-5 w-5 md:h-3 md:w-3' alt='Google Icon'/>
                            <span>Continue with Google</span>
                        </button>
                    </div>
               </div>
            </div>
        </div>
    );
}

export default SignIn;