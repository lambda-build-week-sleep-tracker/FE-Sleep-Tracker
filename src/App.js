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
      <Nav />
      <Route exact path='/' component={LoginForm} />
      <Route path='/signup' component={SignUpForm} />
      <PrivateRoute path='/timer' component={Clock} />
      <PrivateRoute path='/home' component={Home} />
      <PrivateRoute path='/sleeplog' component={SleepLog} />
    </div>
  );
}

export default App;
