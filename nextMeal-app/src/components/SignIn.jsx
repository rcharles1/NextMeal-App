import { React } from 'react';
import { useNavigate } from 'react-router-dom';

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
            <div className="h-1/2 bg-graphicRectangles bg-cover sm:h-1/3 md:w-2/3 md:h-screen md:bg-cover sm:bg-auto bg-center caret-transparent w-100 relative">
               <div className="w-56 absolute mt-1 top-36 left-28 sm:left-48 md:left-64 md:top-40"><img src='/assets/img/next-meal-white.png' /></div>
            </div>
            <div className="w-full sm:w-2/3 mx-auto sm:p-6 sm:mt-4 md:mt-0 md:h-screen md:justify-center md:w-1/3 rounded-md md:rounded-none bg-pure_white/75 h-1/2 px-7 flex flex-col space-y-2 md:space-y-1.5">
                <h2 className="hidden md:block font-bold text-lg mb-1 caret-transparent">Provide your credentials</h2>
                <form  onSubmit={handleSubmit}>
                    <label className="flex flex-col space-y-2 md:space-y-1 mx-auto md:w-10/12">
                        <span className="text-base md:text-xs font-semibold">Email</span>
                        <input type="email" name="email" placeholder='Enter Email Address' required className="outline outline-light_dark/15 md:outline-2 md:text-xs rounded-md h-12 md:h-8 md:px-2 focus:outline-3 focus:outline-bg_variant1 focus:caret-bg_variant1 px-4"/>
                    </label>
                    <label className="flex flex-col space-y-2 mt-2.5 mx-auto md:w-10/12">
                        <span className="text-base md:text-xs font-semibold">Password</span>
                        <input type="password" name="password" placeholder='Enter Password' required className="outline outline-light_dark/15 md:text-xs rounded-md h-12 px-4 md:outline-2 md:h-8 md:px-2 focus:outline-3 focus:outline-bg_variant1 focus:caret-bg_variant1"/>
                    </label>
                    <div className="mt-1.5 mx-60 text-xs font-semibold w-36 caret-transparent md:mx-36 md:p-1"><a href="/forgot-password">Forgot Password?</a></div>
                    <div className="mt-2 w-60 flex flex-row space-x-1 text-xs md:mx-6 caret-transparent">
                        <span>Don't have an account?</span>
                        <span className="font-semibold text-bg_variant1 cursor-pointer"><a href="/SignUp">Sign Up</a></span>
                    </div>
                    <button className="h-12 rounded-md w-full md:w-64 md:mx-6 md:h-9 mt-4 text-lg md:text-sm text-slate_white font-semibold bg-bg_variant1 caret-transparent">
                        Sign In
                    </button>
                </form>
                <div className="mx-auto h-40">
                    <h3 className="mx-auto border w-48 border-light_dark/35 mt-5"></h3>
                    
                        <button onClick={handleGoogleSignIn} className="flex flex-row space-x-6 justify-start items-center h-12 rounded-md w-80 md:w-64 md:mx-6 md:h-9 mt-4 p-5 text-lg md:text-xs border border-slate_white shadow-sm font-semibold caret-transparent active:border-2 active:border-bg_variant1">
                            <span className='size-8'><img src='/assets/icon/icons_google.svg'/></span>
                            <span className="mt-1">Continue with Google</span>
                        </button>
                </div>
            </div>
        </div>
    );
}

export default SignIn;