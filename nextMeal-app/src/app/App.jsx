import React from 'react';
import Root from '../components/Root/Root';
import SignIn from '../components/UserAuthentication/SignIn';
import SignOut from '../components//UserAuthentication/SignOut';
import RestaurantsList from '../components/RestaurantComponents/RestaurantsList';
import RestaurantProfile from '../components/RestaurantComponents/RestaurantProfile';
import MealsList from '../components/MealComponents/MealsList';
import MealItem from '../components/MealComponents/MealItem';
import BeverageItem from '../components/BeverageComponents/BeverageItem';
import PageError from '../components/ErrorComponents/PageError';
import MyFavorites from '../components/WishlistComponent/FavoritesPage';
import Authenticated from '../components/UserAuthentication/Authenticated';
import ReviewForm from '../components/ReviewComponents/ReviewForm';
import About from '../components/About/About';
import Contacts from '../components/Contact/Contact';
import HomePage from '../components/HomePage/HomePage';
import ErrorBoundary from '../components/ErrorComponents/ErrorBoundary';

import { useSelector } from 'react-redux';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />} >
    <Route index element={<HomePage />} />
    <Route path="/authenticated" element={<Authenticated />} />
    <Route path="/about" element={<About />} />
    <Route path="/contacts" element={<Contacts />} />
    <Route path="pageNotFound" element={<PageError />} />
    <Route path="restaurantlistings" element={<RestaurantsList />} />
    <Route path="/restaurantprofile/:id" element={<RestaurantProfile />} />
    <Route path="/review/:id" element={<ReviewForm />} />
    <Route path="meallistings" element={<MealsList />} />
    <Route path="mealitem/:id" element={<MealItem />} />
    <Route path="beverageitem/:id" element={<BeverageItem />} />
    <Route path="/myFavorites" element={<MyFavorites />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signout" element={<SignOut />} />
  </Route>
));

function App() {
  const state = useSelector(state => state.state);

  return (
    <ErrorBoundary >
      <RouterProvider router={ router } />
    </ErrorBoundary>
  );
}

export default App;