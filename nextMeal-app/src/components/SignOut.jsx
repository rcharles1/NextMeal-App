import React, { useEffect }  from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../features/auth/authSlice';

function SignOut() {
   const dispatch = useDispatch();
   const navigate = useNavigate();

    useEffect(() => {
       dispatch(signOut());
       navigate('/');
    }, [dispatch]);
    
    return (
        <div className="h-screen w-100 bg-default/50 md:flex md:flex-row-reverse antialised caret-transparent text-default/75">
            
        </div>
    );
}

export default SignOut;