import React from 'react';
import { withFormik, Form } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { Input } from '../';
import { register } from '../../redux/actionCreators';

const Register = ({ errors, touched }) => {
    return (
        <div className="form">
            <header>
                <h3 className="form-header">Register</h3>
            </header>
            <Form className="div1">
                <div className="formCol">
                    <Input type="email" name="email" placeholder="Email*" />
                    {touched.email && errors.email && (
                        <p className="errors">{errors.email}</p>
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
                        name="firstName"
                        placeholder=" First Name*"
                        altText="First Name"
                    />
                    {touched.firstName && errors.firstName && (
                        <p className="errors"> {errors.firstName}</p>
                    )}
                </div>

                <div className="formCol">
                    <Input
                        type="text"
                        name="lastName"
                        placeholder="lastName*"
                        altText="Last Name"
                    />
                    {touched.lastName && errors.lastName && (
                        <p className="errors"> {errors.lastName}</p>
                    )}

                    <p>
                        Already have an account? <Link to="/login">Log in</Link>
                    </p>
                </div>
                <button type="submit"> Register </button>
            </Form>
        </div>
    );
};
const RegistrationForm = withFormik({
    mapPropsToValues(props) {
        return {
            password: props.password || '',
            firstName: props.firstName || '',
            lastName: props.lastName || '',
            email: props.email || '',
        };
    },

    validationSchema: Yup.object().shape({
        password: Yup.string()
            .min(6, 'Password must be 6 characters minimum')
            .required('Please add password!'),
        firstName: Yup.string().min(2, 'Name must be 2 characters minimum'),
        email: Yup.string()
            .email('Email not valid')
            .required('Please add email!'),
        lastName: Yup.string().required('Please add lastName!'),
    }),

    handleSubmit(
        { username, ...values },
        {
            props: {
                register,
                history: { push },
            },
            resetForm,
        },
    ) {
        register(values).then(({ message }) => {
            resetForm({
                username: '',
                password: '',
                firstName: '',
                lastName: '',
                email: '',
            });
            push('/login');
        });
    },
})(Register);

const mapStateToProps = state => {
    return {
        isLoading: state.auth.isLoading,
        error: state.auth.error,
    };
};

export default connect(mapStateToProps, { register })(RegistrationForm);
