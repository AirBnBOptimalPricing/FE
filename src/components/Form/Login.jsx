import React from 'react';
import { withFormik, Form } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { Input } from '../';
import { login } from '../../redux/actionCreators';

function Login({ errors, touched }) {
    return (
        <div className="form">
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
                    Don't have an account? <Link to="/register">SignUp</Link>
                </p>
                <button type="submit"> LogIn </button>
            </Form>
        </div>
    );
}
const LoginForm = withFormik({
    mapPropsToValues(props) {
        return {
            email: props.email || '',
            password: props.password || '',
        };
    },

    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email('Please enter a valid email')
            .required('Please add email!'),
        password: Yup.string().required('Please add password!'),
    }),

    handleSubmit(
        { values },
        {
            props: {
                login,
                history: { push },
            },
            resetForm,
        },
    ) {
        login(values).then(({ message }) => {
            resetForm({
                username: '',
                password: '',
                firstName: '',
                lastName: '',
                email: '',
            });
            push('/property');
        });
    },
})(Login);

const mapStateToProps = state => {
    return {
        isLoading: state.auth.isLoading,
        error: state.auth.error,
    };
};
export default connect(mapStateToProps, { login })(LoginForm);
