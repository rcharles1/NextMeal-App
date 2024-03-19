import { useSelector } from 'react-redux';

function App() {
 const state = useSelector(state => state.state);

  return (
    <>
     <h1 className="text">We Ready to start building! Tomorrow Is Here!</h1>
    </>
  )
}

export default App
