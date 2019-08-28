import React, { useState } from 'react';
import axios from 'axios';
// Importing Styles
import './loginForm.scss'


function LoginForm(props) {

	const [user, setUser] = useState({email: "", password: ""})

	const changeHandler = event => {
		// console.log("THIS IS THE EVENT VALUE ", event.target.value)
		// console.log("THIS IS THE NAME OF THE TARGET", event.target.name)
		setUser({
			...user, 
			[event.target.name]: event.target.value
		})
		console.log(user); 
	}

	const submitForm = event => {
		event.preventDefault()

		// const sentUser = {
		// 	id: uuid(),
		// 	...newUser, 
		// }
		// console.log(sentUser); 
		console.log(user); 
		axios
			.post('https://sleeptracker-api.herokuapp.com/auth/login/', user)
			.then((res) => {
				localStorage.setItem('token', res.data.token)
				// props.history.push('/bubbles'); 
				console.log(res);
				setUser({
					email: '',
					password: ''
				})
			})
			.catch(err => {
				console.log('Something went wrong', err)
			})
		}

	return (
		<div className="login-container">
			<h2>Login</h2>
			<div className="form-container">
				<form onSubmit={submitForm}>
				{/* User Name Input */}
				<label htmlFor="email">User Name</label>
				<input 
					type="text" 
					name="email" 
					id="userName" 
					required 
					placeholder="John Doe"
					onChange={changeHandler}
					value={user.email}
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
					value={user.password}
					/>

				<button type="submit">Submit</button>
				</form>
			</div>
			
		</div>
	)
}

export default LoginForm;