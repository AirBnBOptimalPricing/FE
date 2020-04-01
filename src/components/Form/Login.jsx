import React from 'react';
import { withFormik, Form } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { Input } from '../';
import { login } from '../../redux/actionCreators';

function Login({ errors, touched, error }) {
    return (
        <div className="form login">
            <header>
                <h3 className="form-header">Login</h3>
            </header>
            <Form className="formCol">
                <Input type="text" name="email" placeholder="Email" />
                {touched.email && errors.email && <p>{errors.email}</p>}

                <Input type="password" name="password" placeholder="Password" />
                {touched.password && errors.password && (
                    <p>{errors.password}</p>
                )}
                <p>
                    Don't have an account? <Link to="/register">Sign up</Link>!
                </p>
                <button type="submit"> Login </button>
            </Form>
        </div>
    );
}
const LoginForm = withFormik({
    mapPropsToValues({ email = '', password = '' }) {
        return {
            email,
            password,
        };
    },

    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email('Please enter a valid email')
            .required('Please add email!'),
        password: Yup.string().required('Please add password!'),
    }),

    handleSubmit: (
        values,
        {
            props: {
                login,
                history: { push },
            },
            resetForm,
        },
    ) => {
        login(values).then(data => {
            resetForm({
                password: '',
                email: '',
            });
            push('/property');
        });
    },
})(Login);

const mapStateToProps = ({ auth: { error } }) => {
    return {
        error,
    };
};
export default connect(mapStateToProps, { login })(LoginForm);
