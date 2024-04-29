import React from 'react';
import Root from '../components/Root';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import RestaurantsList from '../components/RestaurantsList';
import RestaurantProfile from '../components/RestaurantProfile';
import MealsList from '../components/MealsList';
import MealItem from '../components/MealItem';

import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
 const state = useSelector(state => state.state);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}  />
        <Route path="restaurantslist" element={<RestaurantsList />} />
        <Route path="/restaurantprofile/:id" element={<RestaurantProfile />} />
        <Route path="mealslist" element={<MealsList />} />
        <Route path="mealitem/:id" element={<MealItem />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
