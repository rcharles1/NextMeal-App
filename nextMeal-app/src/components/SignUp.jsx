import { React } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../features/auth/authSlice';

function SignUp() {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleSubmit = event => {
       dispatch(signUp());
       navigate('/sigin');
   }
    
    return (
        <div className="h-screen w-100 bg-pure_white">
            <div className="h-1/2 bg-graphicRectangles bg-cover w-100 relative caret-transparent">
               <div className="w-56 absolute mt-1 top-36 left-28"><img src='/assets/img/next-meal-white.png' /></div>
               <h1 className="absolute top-96 left-8 text-3xl mt-2 font-bold">Welcome!</h1>
            </div>
            <div className="w-100 h-1/2 px-7 flex flex-col space-y-2 ">
                <form  onSubmit={handleSubmit}>
                    <label className="flex flex-col space-y-2">
                        <span className="text-base font-semibold">Email</span>
                        <input type="email" name="email" placeholder='Enter Email Address' required className="outline outline-light_dark rounded-md h-12 px-4"/>
                    </label>
                    <label className="flex flex-col space-y-2 mt-2.5">
                        <span className="text-base font-semibold">Password</span>
                        <input type="password" name="password" placeholder='Enter Password' required className="outline outline-light_dark rounded-md h-12 px-4"/>
                    </label>
                    <div className="mt-2 w-60 flex flex-row space-x-1 text-xs">
                        <span>Already have an account?</span>
                        <span className="font-semibold"><a href="/forgot-password">Sign In</a></span>
                    </div>
                    <button className="h-12 rounded-md w-full mt-4 text-lg text-slate_white font-semibold bg-bg_variant1">Sign Up</button>
                </form>
                <div className="mx-auto h-40 flex flex-col space-y-2">
                    <h3 className="mx-auto border w-48 border-light_dark mt-5"></h3>
                    <button className="flex flex-row space-x-6 justify-start items-center h-12 rounded-md w-80 mt-4 p-5 text-lg border border-slate_white shadow-sm font-semibold">
                        <span className='size-8'><img src='/assets/icon/icons_google.svg'/></span>
                        <span className="mt-1">Continue with Google</span>
                    </button>
                    <button className="flex flex-row space-x-6 justify-start items-center h-12 rounded-md w-80 mt-4 p-4 text-lg border border-slate_white shadow-sm font-semibold">
                        <span className='size-8'><img src='/assets/icon/logos_facebook.svg'/></span>
                        <span className="mt-1">Continue with Facebook</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;