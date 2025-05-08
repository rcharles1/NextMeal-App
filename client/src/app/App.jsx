import Root from '../components/Root/Root';
import SignIn from '../components/UserAuthentication/SignIn';
import SignOut from '../components//UserAuthentication/SignOut';
import RestaurantListings from '../components/RestaurantComponents/RestaurantListings';
import RestaurantListing from '../components/RestaurantComponents/RestaurantListing';
import MealListings from '../components/MealComponents/MealListings';
import MealListing from '../components/MealComponents/MealListing';
import BeverageListing from '../components/BeverageComponents/BeverageListing';
import PageError from '../components/ErrorComponents/PageError';
import MyFavorites from '../components/WishlistComponent/FavoritesPage';
import Authenticated from '../components/UserAuthentication/Authenticated';
import ReviewForm from '../components/ReviewComponents/ReviewForm';
import About from '../components/About/About';
import Contacts from '../components/Contact/Contact';
import HomePage from '../components/HomePage/HomePage';
import ErrorBoundary from '../components/ErrorComponents/ErrorBoundary';

import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Stakeholders from '../components/StakeholdersComponents/Stakeholders';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root />} >
    <Route index element={<HomePage />} />
    <Route path="/authenticated" element={<Authenticated />} />
    <Route path="/about" element={<About />} />
    <Route path="/contacts" element={<Contacts />} />
    <Route path="pageNotFound" element={<PageError />} />
    <Route path="restaurantlistings" element={<RestaurantListings />} />
    <Route path="/restaurantlistings/:id" element={<RestaurantListing />} />
    <Route path="/review/:id" element={<ReviewForm />} />
    <Route path="meallistings" element={<MealListings />} />
    <Route path="meallistings/:id" element={<MealListing />} />
    <Route path="beveragelistings/:id" element={<BeverageListing />} />
    <Route path="/myFavorites" element={<MyFavorites />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/signout" element={<SignOut />} />
    <Route path="/stakeholders" element={<Stakeholders />} />
  </Route>
));

function App() {

  return (
    <ErrorBoundary >
      <RouterProvider router={ router } />
    </ErrorBoundary>
  );
}

export default App;