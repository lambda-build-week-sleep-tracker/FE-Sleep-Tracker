import React, { useState } from 'react'
import axios from 'axios'
import uuid from 'uuid/v1'

function SignUpForm() {

	const [ newUser, setNewUser ] = useState({
		// newUserName: "",
		// newUserEmail:"",
		// newUserPassword:"",
		// newChildName: "",
		// newChildBirthday: ""
		// id: '',
		email: '',
		password: '',
		child_name: '', 
		parent_name: '',
		birthday: ''
	})


	const changeHandler = event => {
		// console.log("THIS IS THE EVENT VALUE ", event.target.value)
		// console.log("THIS IS THE NAME OF THE TARGET", event.target.name)
		setNewUser({
			...newUser, 
			[event.target.name]: event.target.value
		})
		console.log(newUser); 
	}

	const submitForm = event => {
		event.preventDefault()

		// const sentUser = {
		// 	id: uuid(),
		// 	...newUser, 
		// }
		// console.log(sentUser); 
		console.log(newUser); 
		axios
			.post('https://cors-anywhere.herokuapp.com/https://sleeptracker-api.herokuapp.com/auth/register', newUser)
			.then((res) => {
				localStorage.setItem('token', res.data.token)
				// props.history.push('/bubbles'); 
				console.log(res);
				setNewUser({
					email: '',
					password: '',
					child_name: '', 
					parent_name: '',
					birthday: ''
				})
			})
			.catch(err => {
				console.log('.then block aint workin', err)
			})
		}
		


	return (
		<div className="signUp-container">
			<h2>Sign Up</h2>
			<div className="form-container">
				<form>
					{/* New User Name */}
					<label htmlFor="parent_name">User Name</label>
					<input 
						type="text" 
						// name="newUserName"
						name="parent_name"
						placeholder="John Doe"
						required
						value={newUser.parent_name}
						onChange={changeHandler}
						/>

					{/* New User Email */}
					<label htmlFor="email">Email</label>
					<input 
						type="email"
						// name="newUserEmail"
						name="email"
						placeholder="JohDoe@gmail.com"
						value={newUser.email}
						onChange={changeHandler}
						required
						/>

					{/* Password */}
					<label htmlFor="password">Password</label>
					<input 
						type="password"
						// name="newUserPassword"
						name="password"
						placeholder="Password"
						value={newUser.password}
						onChange={changeHandler}
						pattern="^(?=.*[a-z].*)(?=.*[A-Z].*)(?=.*\d.*)[a-zA-Z\d]{8,}$"
						required
						/>
					
					{/* Child Name */}
					<label htmlFor="child_name">Child Name</label>
					<input 
						type="text"
						// name="newChildName"
						name="child_name"
						placeholder="John Doe Jr"
						value={newUser.child_name}
						onChange={changeHandler}
						/>

					{/* Child Birthday */}
					<label htmlFor="birthday">What is your Childs Birthday</label>
					<input 
						type="date" 
						// name="newChildBirthday" 
						name="birthday"
						min="2000-01-01"
						value={newUser.birthday}
						onChange={changeHandler}
						/>

					<button type="submit" onClick={submitForm}>Submit</button>
				</form>
			</div>
		</div>
	)
}




export default SignUpForm