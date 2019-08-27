import React, { useState } from 'react'
import axios from 'axios'

function SignUpForm() {

	const [newUser, setNewUser] = useState({
		newUserName: "",
		newUserEmail:"",
		newUserPassword:"",
		newChildName: "",
		newChildBirthday: ""
	})


	const changeHandler = event => {
		console.log("THIS IS THE EVENT VALUE ", event.target.value)
		console.log("THIS IS THE NAME OF THE TARGET", event.target.name)
		setNewUser({...newUser, [event.target.name]: event.target.value})
	}

	const submitForm = event => {
		event.preventDefault()
		/* 
		axios
			.post(newUser)
			.then(() => {
				setUser({
					newUserName: "",
					newUserEmail:"",
					newUserPassword:"",
					newChildName: "",
					newChildBirthday: ""
				})
			})
		*/
	}


	return(
		<div className="signUp-container">
			<h2>Sign Up</h2>
			<div className="form-container">
				<form>
					{/* New User Name */}
					<label htmlFor="newUserName">User Name</label>
					<input 
						type="text" 
						name="newUserName" 
						placeholder="John Doe"
						required
						value={newUser.newUserName}
						onChange={changeHandler}
						/>

					{/* New User Email */}
					<label htmlFor="newUserEmail">Email</label>
					<input 
						type="email"
						name="newUserEmail"
						placeholder="JohDoe@gmail.com"
						value={newUser.newUserEmail}
						onChange={changeHandler}
						required
						/>

					{/* Password */}
					<label htmlFor="newUserPassword">Password</label>
					<input 
						type="password"
						name="newUserPassword"
						placeholder="Password"
						value={newUser.newUserPassword}
						onChange={changeHandler}
						pattern="^(?=.*[a-z].*)(?=.*[A-Z].*)(?=.*\d.*)[a-zA-Z\d]{8,}$"
						required
						/>
					
					{/* Child Name */}
					<label htmlFor="newChildName">Child Name</label>
					<input 
						type="text"
						name="newChildName"
						placeholder="John Doe Jr"
						value={newUser.newChildName}
						onChange={changeHandler}
						/>

					{/* Child Birthdat */}
					<label htmlFor="newChildBirthday">What is your Childs Birthday</label>
					<input 
						type="date" 
						name="newChildBirthday" 
						min="2000-01-01"
						value={newUser.newChildBirthday}
						onChange={changeHandler}
						/>

					<button type="submit" onClick={submitForm}>Submit</button>
				</form>
			</div>
		</div>
	)
}

export default SignUpForm