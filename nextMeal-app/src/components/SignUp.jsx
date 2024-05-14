import { React } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../features/auth/authSlice';

function SignUp() {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleSubmit = event => {
       dispatch(signUp());
       navigate('/signin');
   }
    
    return (
        <div className="h-screen w-100 bg-bg_variant1/5 md:flex md:flex-row-reverse antialised caret-transparent text-default/75">
            <div className="h-1/2 bg-graphicRectangles bg-cover w-100 relative caret-transparent sm:h-1/3 md:w-2/3 md:h-screen md:bg-cover sm:bg-auto bg-center">
               <div className="w-56 absolute mt-1 top-36 left-28 sm:left-48 md:left-64 md:top-40"><img src='/assets/img/next-meal-white.png' /></div>
            </div>
            <div className="w-100 h-1/2 px-7 flex flex-col space-y-2 md:justify-center sm:w-2/3 mx-auto sm:p-6 sm:mt-4 md:h-screen md:mt-0 md:pt-8 md:w-1/3 rounded-md md:rounded-none bg-pure_white/75 ">
               <h1 className="hidden md:block text-3xl mx-4 font-bold">Welcome!</h1>
                <form  onSubmit={handleSubmit}>
                    <label className="flex flex-col space-y-2 md:space-y-1 mx-auto md:w-10/12">
                        <span className="text-base md:text-xs font-semibold">Email</span>
                        <input type="email" name="email" placeholder='Enter Email Address' required className="outline outline-light_dark/15 md:outline-2 focus:outline-3 focus:outline-bg_variant1 focus:caret-bg_variant1 md:text-xs rounded-md md:h-8 md:px-2 h-12 px-4"/>
                    </label>
                    <label className="flex flex-col space-y-2 mt-2.5 md:space-y-1 mx-auto md:w-10/12">
                        <span className="text-base md:text-xs font-semibold">Password</span>
                        <input type="password" name="password" placeholder='Enter Password' required className="outline outline-light_dark/15 md:outline-2 focus:outline-3 focus:outline-bg_variant1 focus:caret-bg_variant1 md:text-xs rounded-md md:h-8 md:px-2 h-12 px-4"/>
                    </label>
                    <div className="mt-2 w-60 flex flex-row space-x-1 md:mx-6 text-xs">
                        <span>Already have an account?</span>
                        <span className="font-semibold text-bg_variant1 cursor pointer"><a href="/signin">Sign In</a></span>
                    </div>
                    <button className="h-12 rounded-md w-full mt-4 text-lg text-slate_white font-semibold bg-bg_variant1 md:w-64 md:mx-6 md:h-9 md:text-sm caret-transparent hover:bg-bg_variant1/80">Sign Up</button>
                </form>
                <div className="mx-auto h-40 flex flex-col space-y-2 md:space-y-3">
                    <h3 className="mx-auto border w-48 border-light_dark/35 mt-5"></h3>
                    <button className="flex flex-row space-x-6 justify-start items-center h-12 rounded-md w-80 mt-4 p-5 text-lg border border-slate_white shadow-sm font-semibold md:w-64 md:mx-6 md:h-9 md:text-xs caret-transparent active:border-2 active:border-bg_variant1/85">
                        <span className='size-8 sm:size-6'><img src='/assets/icon/icons_google.svg' alt="google-logo"/></span>
                        <span className="mt-1">Continue with Google</span>
                    </button>
                    <button className="flex flex-row space-x-6 justify-start items-center h-12 rounded-md w-80 mt-4 p-4 text-lg outline outline-slate_white shadow-sm font-semibold md:w-64 md:mx-6 md:h-9 md:text-xs caret-transparent active:outline-bg_variant1/85">
                        <span className='size-8 sm:size-6'><img src='/assets/icon/logos_facebook.svg' alt="facebook-logo"/></span>
                        <span className="mt-1">Continue with Facebook</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;