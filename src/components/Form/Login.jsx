import React, { useState, useEffect } from 'react';
import { withFormik, Form } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
import { Input } from '../';

function Login({ values, errors, touched, status }) {
    const [user, setUser] = useState([]);

    useEffect(() => {
        status && setUser(user => [...user, status]);
    }, [status]);

    return (
        <div className="form">
            <header>
                <h3 className="form-header">Login</h3>
            </header>
            <Form className="formCol">
                <Input type="text" name="username" placeholder="Username" />
                {touched.username && errors.username && (
                    <p>{errors.username}</p>
                )}

                <Input type="password" name="password" placeholder="Password" />
                {touched.password && errors.password && (
                    <p>{errors.password}</p>
                )}
                <p>
                    Don't have an account? <Link to="/register">SignUp</Link>
                </p>
                <button type="submit"> LogIn </button>
            </Form>
        </div>
    );
}
const FormikLoginForm = withFormik({
    mapPropsToValues(props) {
        return {
            username: props.username || '',
            password: props.password || '',
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required('Please add username!'),
        password: Yup.string().required('Please add password!'),
    }),

    handleSubmit(values, { resetForm, setStatus }) {
        axios
            .post('', values)
            .then(response => {
                console.log('Login Response', response);
                resetForm();
                setStatus(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    },
})(Login);
export default FormikLoginForm;
