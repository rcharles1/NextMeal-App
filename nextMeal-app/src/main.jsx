import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './app/App.jsx'
import './index.css'
import store from './app/store.js'
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
     <Router>
      <App />
     </Router>
   </Provider>
  </React.StrictMode>,
)

// The use of Provider follows up the use of the useSelector hook to access state: const state = useSelector(state => state.state) 
// and useDispatch hoook to dispatch actions