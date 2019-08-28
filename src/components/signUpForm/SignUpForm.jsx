import React from 'react'
import axios from 'axios'
import { withFormik, Field, Form } from 'formik'
import * as Yup from 'yup'

function SignUpForm({ touched, errors, values }) {

	return(
		<div className="signUp-container">
			<h2>Sign Up</h2>
			<div className="form-container">
				<Form>
					{/* New User Name */}
					<label>
						User Name
						<Field type="text" name="newUserName" placeholder="John Doe" />
						{touched.newUserName && errors.newUserName && <p>{errors.newUserName}</p> }
						</label>

					{/* New User Email */}
					<label>
						Email:
						<Field type="email" name="newUserEmail" placeholder="JohDoe@gmail.com"/>
						{touched.newUserEmail && errors.newUserEmail && <p>{errors.newUserEmail}</p> }
					</label>
					

					{/* Password */}
					<label>
						Password
						<Field type="password" name="newUserPassword" placeholder="Password"/>
						{ touched.newUserPassword && errors.newUserPassword && <p>{errors.newUserPassword}</p> }
							{/* pattern="^(?=.*[a-z].*)(?=.*[A-Z].*)(?=.*\d.*)[a-zA-Z\d]{8,}$" */}
					</label>
					
					
					{/* Child Name */}
					<label>
						Child Name
						<Field type="text" name="newChildName" placeholder="John Doe Jr"/>
						{ touched.newChildName && errors.newChildName && <p>{errors.newChildName}</p> }
					</label>
					

					{/* Child Birthdat */}
					<label>
						What is your Childs Birthday
						<Field type="date" name="newChildBirthday" min="2000-01-01"/>
						{ touched.newChildBirthday && errors.newChildBirthday && <p>{errors.newChildBirthday}</p> }
					</label>

					<button type="submit">Submit</button>
				</Form>
			</div>
		</div>
	)
}

const FormikSignUpForm = withFormik({
	
	// Decalring prop names that are assigned to formiks values prop
	mapPropsToValues({newUserName, newUserEmail, newUserPassword, newChildName, newChildBirthday}){
		return {
			// State Values
			newUserName: newUserName || "",
			newUserEmail: newUserEmail || "",
			newUserPassword: newUserPassword || "",
			newChildName: newChildName || "",
			newChildBirthday: newChildBirthday || ""
		}
	},

	// YUP validation
	validationSchema: Yup.object().shape({
		newUserName: Yup.string().required("You must enter a user name"),
		newUserEmail: Yup.string().email().required("You must enter in a email"),
		newUserPassword: Yup.string().min(8,"Your password must be atleast 8 characters long").required("You must enter in a password"),
		newChildName: Yup.string().required("What did you not give your child a name..."),
		newChildBirthday: Yup.string().required("You must set a brithday")
	}),

	// Handling Form Submission
	handleSubmit(values,  { resetForm }){
		axios
			.post("URL", values)
			.then( () => resetForm() )
	}

})(SignUpForm)

export default FormikSignUpForm