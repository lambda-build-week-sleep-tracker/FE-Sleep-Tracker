import React from 'react';
import './index.css';



// Importing components
import LoginForm from './components/LoginForm/LoginForm';
import SignUpForm from './components/signUpForm/SignUpForm';
import SleepLog from './components/SleepLog/SleepLog';
import Home from './components/Home/Home'


function App() {
  return (
    <div className="App">
      <p>App Component</p>
      <Home />
      {/* <LoginForm/> 
			<SignUpForm/> */}
    </div>
  );
}

export default App;
