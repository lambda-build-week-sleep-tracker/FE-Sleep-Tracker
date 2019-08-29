import React from 'react';
import axios from 'axios';
import { withFormik, Form, Field} from 'formik'
import * as Yup from 'yup'
// Importing Styles
import './loginForm.scss'


function LoginForm({ errors, touched, values }) {

	return(
		<div className="login-container">
			<h2>Login</h2>
			<div className="form-container">
				<Form>

					{/* User Name Input */}
					<label>
						Email
						<Field type="text" name="email" placeholder="JohnDoe@gmail.com"/>
						{ touched.email && errors.email && <p>{errors.email}</p> }
					</label>

					{/* Password */}
					<label>
						Password
						<Field type="password" name="password" placeholder="Enter Password"/>
						{ touched.password && errors.password && <p>{errors.password}</p> }
					</label>

					<button type="submit">Submit</button>
				</Form>
			</div>
			
		</div>
	)
}

const FormikLoginForm  = withFormik({
	mapPropsToValues({email, password}){
		return{
			email: email || "",
			password: password || ""
		}
	},

	// Yup validation
	validationSchema: Yup.object().shape({
		email: Yup.string().email().required("Email must be filled out"),
		password: Yup.string().required("Password must be filled out")
	}),

	handleSubmit(values){
		axios
			.post("https://sleeptracker-api.herokuapp.com/auth/login/", values)
			.then(res => {
				localStorage.setItem('token', res.data.token)
				console.log(res)
			})
			.catch(err => console.log(err))
	}
})(LoginForm)

export default FormikLoginForm;