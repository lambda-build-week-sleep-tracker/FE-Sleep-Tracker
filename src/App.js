import React from 'react';
import './index.css';
import ClockApp from './components/clock/Clock'
// Importing components
// import LoginForm from './components/LoginForm';
function App() {
  return (
    <div className="App">
        <p>App Component</p>
        {/* <LoginForm/> 
        <SignUpForm/> */}
        <ClockApp />
    </div>
  );
}

export default App;
