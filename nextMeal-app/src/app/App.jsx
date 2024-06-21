import React from 'react';
import Root from '../components/Root';
import SignIn from '../components/SignIn';
import SignOut from '../components/SignOut';
import RestaurantsList from '../components/RestaurantsList';
import RestaurantProfile from '../components/RestaurantProfile';
import MealsList from '../components/MealsList';
import MealItem from '../components/MealItem';
import BeverageItem from '../components/BeverageItem';
import PageError from '../components/PageError';
import MyFavorites from '../components/FavoritesPage';
import Authenticated from '../components/Authenticated';
import ReviewForm from '../components/ReviewComponents/ReviewForm';

import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const state = useSelector(state => state.state);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}  />
        <Route path="/authenticated" element={<Authenticated />} />
        <Route path="pageNotFound" element={<PageError />} />
        <Route path="restaurantslist" element={<RestaurantsList />} />
        <Route path="/restaurantprofile/:id" element={<RestaurantProfile />} />
        <Route path="/review/:id" element={<ReviewForm />} />
        <Route path="mealslist" element={<MealsList />} />
        <Route path="mealitem/:id" element={<MealItem />} />
        <Route path="beverageitem/:id" element={<BeverageItem />} />
        <Route path="/myFavorites" element={<MyFavorites />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
      </Routes>
    </Router>
  );
}

export default App;