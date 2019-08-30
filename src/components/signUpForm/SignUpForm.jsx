import React from 'react'
import axios from 'axios'
import { withFormik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'; 

function SignUpForm({ touched, errors, values }) {

	return (
		<div className="signUp-container">
			<h2>Sign Up</h2>
			<div className="form-container">
				<Form>
					{/* New User Name */}
					<label>
						User Name
						<Field type="text" name="parent_name" placeholder="John Doe" />
						{touched.parent_name && errors.parent_name && <p>{errors.parent_name}</p> }
						</label>

					{/* New User Email */}
					<label>
						Email:
						<Field type="email" name="email" placeholder="JohDoe@gmail.com"/>
						{touched.email && errors.email && <p>{errors.email}</p> }
					</label>
					

					{/* Password */}
					<label>
						Password
						<Field type="password" name="password" placeholder="Password"/>
						{ touched.password && errors.password && <p>{errors.password}</p> }
							{/* pattern="^(?=.*[a-z].*)(?=.*[A-Z].*)(?=.*\d.*)[a-zA-Z\d]{8,}$" */}
					</label>
					
					
					{/* Child Name */}
					<label>
						Child Name
						<Field type="text" name="child_name" placeholder="John Doe Jr"/>
						{ touched.child_name && errors.child_name && <p>{errors.child_name}</p> }
					</label>
					

					{/* Child Birthdat */}
					<label>
						What is your Childs Birthday
						<Field type="date" name="birthday" min="2000-01-01"/>
						{ touched.birthday && errors.birthday && <p>{errors.birthday}</p> }
					</label>

					<button type="submit">Submit</button>
				</Form>
				<p>Already have an account? <Link to='/'>Login</Link></p>
			</div>
		</div>
	)
}

const FormikSignUpForm = withFormik({
	
	// Decalring prop names that are assigned to formiks values prop
	mapPropsToValues({parent_name, email, password, child_name, birthday}){
		return {
			// State Values
			parent_name: parent_name || "",
			email: email || "",
			password: password || "",
			child_name: child_name || "",
			birthday: birthday || ""
		}
	},

	// YUP validation
	validationSchema: Yup.object().shape({
		parent_name: Yup.string().required("You must enter a user name"),
		email: Yup.string().email().required("You must enter in a email"),
		password: Yup.string().min(8,"Your password must be atleast 8 characters long").required("You must enter in a password"),
		child_name: Yup.string().required("What did you not give your child a name..."),
		birthday: Yup.string().required("You must set a brithday")
	}),

	// Handling Form Submission
	handleSubmit(values, props){
		
		// Formatting the birtrhday to an ISO string for the DB
		const childBirthday = new Date(values.newChildBirthday).getTime()
		const newValues = {
			...values,
			newChildBirthday: childBirthday
		}

		axios
			.post("https://sleeptracker-api.herokuapp.com/auth/register", newValues)
			.then((res) => {
				props.props.history.push('/home')
				console.log(res)
			})
			.catch(err => console.log(err))

	}

})(SignUpForm)

export default FormikSignUpForm
