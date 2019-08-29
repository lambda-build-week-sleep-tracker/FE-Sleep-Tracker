import React from 'react';
// import './index.css';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute'; 
import { Link, Route } from 'react-router-dom' 



// Importing components
import LoginForm from './components/LoginForm/LoginForm';
import SignUpForm from './components/signUpForm/SignUpForm';
import SleepLog from './components/SleepLog/SleepLog';
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import Clock from './components/clock/Clock'
import SleepLogModal from './components/SleepLog/SleepLogModal';


function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      {/* <Nav /> */}
      {/* <Home /> */}
        <LoginForm/> 
				<SignUpForm/>
			{/* <Clock/> */}
=======
      <Route exact path='/' component={LoginForm} />
      <Route path='/signup' component={SignUpForm} />
      <PrivateRoute path='/home' component={Home} />
      <PrivateRoute path='/sleeplog' component={SleepLog} />
>>>>>>> 06a3a4d1c3cc915d26e63658cce912ba07c83b91
    </div>
  );
}

export default App;
