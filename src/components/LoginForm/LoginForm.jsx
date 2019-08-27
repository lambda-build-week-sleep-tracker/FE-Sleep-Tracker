import React from 'react';

// Importing Styles
import './loginForm.scss'

function LoginForm() {

	return(
		<div className="login-container">
			<h2>Login</h2>
			<div className="form-container">
				<form>
				{/* User Name Input */}
				<label htmlFor="userName">User Name</label>
				<input type="text" name="userName" id="userName" required placeholder="John Doe"/>

				{/* Password */}
				<label htmlFor="password">Password</label>
				<input type="password" name="password" id="password" required placeholder="Enter Password"/>

				<button type="submit">Submit</button>
				</form>
			</div>
			
		</div>
	)
}

export default LoginForm;