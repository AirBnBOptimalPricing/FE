import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import {Link} from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';

const Register = ({ values, errors, touched,  status }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
       status && setUsers(users => [...users, status]); 
    }, [status]);

    return (
        <div className="signUp-form">  
            <Form className="div1" >
                   <div className="formCol">
                   <Field type="text" name="username" placeholder="Username" />
                   {touched.username && errors.username && <p className="errors"> {errors.username}</p>}
                   
                    <Field type="password" name="password" placeholder="Password" />
                    {touched.password && errors.password && <p className="errors">{errors.password}</p>}
                    
                    <Field type="text" name="firstname" placeholder=" First Name" />
                   {touched.firstname && errors.firstname && <p className="errors"> {errors.firstname}</p>}
                   </div>
                    
                   <div className="formCol">
                   <Field type="text" name="lastname" placeholder="lastname" />
                   {touched.lastname && errors.lastname && <p className="errors"> {errors.lastname}</p>}

                   <Field type="email" name="email" placeholder="Email" />
                    {touched.email && errors.email && <p className="errors">{errors.email}</p>}
                    <p>Already have an account? <Link to="/login">LogIn</Link></p>
                <button type="submit"> SignUp </button>
                   </div>
            </Form>
        </div>
    );
}
const FormikSignInForm = withFormik({
    mapPropsToValues(props) {
        return {
            username: props.username || "",
            password: props.password || "",
            firstname: props.firstname || "",
            lastname: props.lastname ||"",
            email: props.email || "",
           
        };
    },
    
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .min(4, "Username must be 4 characters minimum")
            .max(15, 'Too Long!')
            .required("Please add user name!"),
        password: Yup.string()
            .min(6, "Password must be 6 characters minimum")
            .max(10, 'Too Long!')
            .required("Please add password!"),
        firstname: Yup.string()
            .min(2, "Name must be 2 characters minimum")
            .max(15, 'Name is too Long!'),
        email: Yup.string()
            .email("Email not valid")
            .required("Please add email!"),
        lastname: Yup.string()
        .required("Please add lastname!")
    }),
  
    handleSubmit(values, { resetForm, setStatus}) {
        console.log(values);
        axios()
          .post("/auth/register", values)
          .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            resetForm();
            setStatus(res.data);
          })
          .catch(err => console.error(err));
      }
    })(Register);
    
    export default FormikSignInForm;
