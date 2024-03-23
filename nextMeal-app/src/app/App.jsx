import React from 'react';
import SignUp from '../components/SignUp.jsx';
import SignIn from '../components/SignIn';
import Root from '../components/Root';
import Restaurants from '../components/RestaurantList';

import { useSelector } from 'react-redux';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/'  element={ <Root/> }>
    
  </Route>
));

function App() {
 const state = useSelector(state => state.state);

  return (
    <div>
      <RouterProvider router={ router } />
    </div>
  );
}

export default App;
