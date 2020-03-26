import React, { useState, useEffect } from 'react';
import { withFormik, Form } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { Input } from '../';
import { register } from '../../redux/actionCreators';

const Register = ({ values, errors, touched, status }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        status && setUsers(users => [...users, status]);
    }, [status]);

    return (
        <div className="form">
            <header>
                <h3 className="form-header">Register</h3>
            </header>
            <Form className="div1">
                <div className="formCol">
                    <Input
                        type="text"
                        name="username"
                        placeholder="Username*"
                    />
                    {touched.username && errors.username && (
                        <p className="errors"> {errors.username}</p>
                    )}

                    <Input
                        type="password"
                        name="password"
                        placeholder="Password*"
                    />
                    {touched.password && errors.password && (
                        <p className="errors">{errors.password}</p>
                    )}

                    <Input
                        type="text"
                        name="firstname"
                        placeholder=" First Name*"
                        altText="First Name"
                    />
                    {touched.firstname && errors.firstname && (
                        <p className="errors"> {errors.firstname}</p>
                    )}
                </div>

                <div className="formCol">
                    <Input
                        type="text"
                        name="lastname"
                        placeholder="lastname*"
                        altText="Last Name"
                    />
                    {touched.lastname && errors.lastname && (
                        <p className="errors"> {errors.lastname}</p>
                    )}

                    <Input type="email" name="email" placeholder="Email*" />
                    {touched.email && errors.email && (
                        <p className="errors">{errors.email}</p>
                    )}
                    <p>
                        Already have an account? <Link to="/login">LogIn</Link>
                    </p>
                </div>
                <button type="submit"> SignUp </button>
            </Form>
        </div>
    );
};
const RegistrationForm = withFormik({
    mapPropsToValues(props) {
        return {
            username: props.username || '',
            password: props.password || '',
            firstname: props.firstname || '',
            lastname: props.lastname || '',
            email: props.email || '',
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
            .min(4, 'Username must be 4 characters minimum')
            .max(15, 'Too Long!')
            .required('Please add user name!'),
        password: Yup.string()
            .min(6, 'Password must be 6 characters minimum')
            .required('Please add password!'),
        firstname: Yup.string()
            .min(2, 'Name must be 2 characters minimum')
            .max(15, 'Name is too Long!'),
        email: Yup.string()
            .email('Email not valid')
            .required('Please add email!'),
        lastname: Yup.string().required('Please add lastname!'),
    }),

    handleSubmit(values, { props: { register } }) {
        console.log(values);
        register(values);
    },
})(Register);

const mapStateToProps = state => {
    return {
        isLoading: state.auth.isLoading,
        error: state.auth.error,
    };
};

export default connect(mapStateToProps, { register })(RegistrationForm);
