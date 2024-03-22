import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Menu from '../components/Menu.jsx';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../features/auth/authSlice.js';
import LoginButton from '../components/LoginButton.jsx';

function NavBar() {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
     
     const handleLogin = () => {
      
        console.log('clicked!!');
     }

    return (
        <div>
            <div className="h-20 w-full p-3 rounded-md flex flex-row justify-between caret-bg_variant1 cursor-pointer">
                <div className="w-40 ">
                    <img src='/assets/img/next-meal-white.png' />
                </div>
                <div className="w-fit">
                    {isAuthenticated === false ? <LoginButton onClick={handleLogin}/> : <Menu /> }
                </div>
            </div>
        </div>
    );
}

export default NavBar;