import React from 'react';
import './index.css';

// Importing components
import LoginForm from './components/LoginForm/LoginForm'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'

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
