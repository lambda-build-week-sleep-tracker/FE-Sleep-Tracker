import React from 'react';
import './index.css';



// Importing components
import LoginForm from './components/LoginForm/LoginForm';
import SignUpForm from './components/signUpForm/SignUpForm';
import SleepLog from './components/SleepLog/SleepLog';
import Home from './components/Home/Home'
import Nav from './components/Nav/Nav'
import Clock from './components/clock/Clock'


function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      {/* <Home /> */}
       {/* <LoginForm/> 
			<SignUpForm/> */}
			<Clock/>
    </div>
  );
}

export default App;
