import React from 'react';
import { Field } from 'formik';
import { capitalize } from '../../util';

const Input = ({ id, altText, className = '', ...props }) => {
    const isCheckBox = props.type === 'checkbox';
    return (
        <div className={`form-input ${className}`.trim()}>
            {!isCheckBox ? (
                <>
                    <label htmlFor={id}>
                        {altText || capitalize(props.name)}:
                    </label>
                    <Field {...props} id={id} />
                </>
            ) : (
                <>
                    <Field {...props} id={id} />
                    <label htmlFor={id}>
                        {altText || capitalize(props.name)}
                    </label>
                </>
            )}
        </div>
    );
};

export default Input;
