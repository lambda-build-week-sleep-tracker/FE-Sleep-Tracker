import React from 'react';
import './index.css';



// Importing components
import LoginForm from './components/LoginForm/LoginForm';
import SleepLog from './components/SleepLog/SleepLog';


function App() {
  return (
    <div className="App">
      <p>App Component</p>
			<LoginForm/>
    </div>
  );
}

export default App;
