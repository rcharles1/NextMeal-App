import { useSelector } from 'react-redux';
import SignUp from '/src/components/SignUp.jsx';
import SignIn from '../components/SignIn';
import HomePage from '../components/Home';
import NavBar from '../components/NavBar.jsx';

function App() {
 const state = useSelector(state => state.state);

  return (
    <div>
      <div className="flex flex-col bg-bg_variant1 p-3 h-screen w-100">
        <NavBar />
        <HomePage />
      </div>
    </div>
  )
}

export default App
