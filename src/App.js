import React from 'react';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom'



// Importing components
import LoginForm from './components/LoginForm/LoginForm'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import {PrivateRoute} from './components/PrivateRoute/PrivateRoute'


function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      {/* <LoginForm/> 
			<SignUpForm/> */}
    </div>
  );
}

export default App;
