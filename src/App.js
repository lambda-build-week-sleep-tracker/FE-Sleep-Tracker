import React from 'react';
import './index.css';



// Importing components
import LoginForm from './components/LoginForm/LoginForm';
import SignUpForm from './components/signUpForm/SignUpForm';
import SleepLog from './components/SleepLog/SleepLog';


function App() {
  return (
    <div className="App">
      <p>App Component</p>
			<LoginForm/> 
			<SignUpForm/>
    </div>
  );
}

export default App;
