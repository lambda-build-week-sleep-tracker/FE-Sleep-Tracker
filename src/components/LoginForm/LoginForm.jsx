import React, { useState } from 'react';
import axios from 'axios';
// Importing Styles
import './loginForm.scss'


function LoginForm() {

	const [user, setUser] = useState({userName: "", password: ""})

	const changeHandler = event => {
		console.log("TARGET NAME IS", event.target.name)
		console.log(event.target.value)
		setUser({...user, [event.target.name]: event.target.value})
	}

	const formSubmit = event => {
		event.preventDefault()
		// axios.post(user)
	}

	return(
		<div className="login-container">
			<h2>Login</h2>
			<div className="form-container">
				<form onSubmit={formSubmit}>
				{/* User Name Input */}
				<label htmlFor="userName">User Name</label>
				<input 
					type="text" 
					name="userName" 
					id="userName" 
					required 
					placeholder="John Doe"
					onChange={changeHandler}
					/>

				{/* Password */}
				<label htmlFor="password">Password</label>
				<input 
					type="password" 
					name="password" 
					id="password" 
					required 
					placeholder="Enter Password"
					onChange={changeHandler}
					/>

				<button type="submit">Submit</button>
				</form>
			</div>
			
		</div>
	)
}

export default LoginForm;