import React from 'react';
import { Field } from 'formik';
import { capitalize } from '../../util';

const Input = ({ id, ...props }) => {
    return (
        <div className="form-input">
            <label htmlFor={id}>{capitalize(props.name)}:</label>
            <Field {...props} id={id} />
        </div>
    );
};

export default Input;
