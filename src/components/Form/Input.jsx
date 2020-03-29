import React from 'react';
import { Field } from 'formik';
import { capitalize } from '../../util';

const Input = ({
    id,
    altText,
    className = '',
    inputClassName = '',
    ...props
}) => {
    const isCheckBox = props.type === 'checkbox';
    return (
        <div className={`form-input ${className}`.trim()}>
            {!isCheckBox ? (
                <>
                    <label htmlFor={id}>
                        {altText || capitalize(props.name)}:
                    </label>
                    <Field
                        {...props}
                        className={`${inputClassName}`.trim()}
                        id={id}
                    />
                </>
            ) : (
                <>
                    <Field
                        {...props}
                        id={id}
                        className={`${inputClassName}`.trim()}
                    />
                    <label htmlFor={id}>
                        {altText || capitalize(props.name)}
                    </label>
                </>
            )}
        </div>
    );
};

export default Input;
