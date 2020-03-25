import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';

function Login({ values, errors, touched, status }) {
    const [user, setUser] = useState([]);

    useEffect(() => {
        status && setUser(user => [...user, status]);
    }, [status]);

    return (
        <div className="login-form">
            <Form className="formCol">
                <Field type="text" name="username" placeholder="Username" />
                {touched.username && errors.username && (
                    <p>{errors.username}</p>
                )}

                <Field type="password" name="password" placeholder="Password" />
                {touched.password && errors.password && (
                    <p>{errors.password}</p>
                )}
                <p>
                    Don't have an account? <Link to="/register">SignUp</Link>
                </p>
                <button type="submit"> LogIn </button>
                <p>Forgot your password?</p>
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
