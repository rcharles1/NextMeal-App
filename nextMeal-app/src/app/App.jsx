import { useSelector } from 'react-redux';
import SignUp from '/src/components/SignUp.jsx';
import SignIn from '../components/SignIn';
import HomePage from '../components/Home';
import NavBar from '../components/NavBar.jsx';
import Restaurants from '../components/RestaurantList';
import Footer from '../components/Footer';

function App() {
 const state = useSelector(state => state.state);

  return (
    <div>
      <div className="flex flex-col bg-bg_variant1 p-3 h-screen w-100">
        <div className="">
          <NavBar />
        </div>
        <div className="bg-graphicDots bg-no-repeat bg-right-top">
         <HomePage />
        </div>
      </div>
      <Restaurants />
      <Footer />
    </div>
  )
}

export default App
