import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../../features/auth/authSlice';
import { fetchUserData } from '../../utilities/getData';

import { Spinner2 } from '/src/components/svgs/InterfaceSvg';

function Authenticated() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const getCurrentUserData = async () => {
      try{
        const data = await fetchUserData();
        localStorage.setItem('user', JSON.stringify(data)); 
        dispatch(signIn(data)); 
        navigate('/');
      } catch (error) {
        console.log("Authentication Failed", error)
      }
    };
    getCurrentUserData();
  }, [dispatch]);


  useEffect(() => {
    const storedUserData = localStorage.getItem('user');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      dispatch(signIn(userData)); 
    }
  }, [dispatch]);

  return (
    <div className="text-lg flex flex-col caret-transparent text-center text-default/75 w-10/12 mx-auto mt-32 h-fit space-y-4 p-20 font-bold">
        <div className=" p-6 w-fit mx-auto animate-spin "><Spinner2 fill="red" height="45" width="50" /></div>
        <span className="w-fit mx-auto">Authenticating Please wait...</span>
    </div>
  );
}

export default Authenticated;