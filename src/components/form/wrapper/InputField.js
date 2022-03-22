import React from 'react'
import { useField } from 'formik'


// ABSTRACTION [EACH FIELD]
const InputField = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className='wrapperInput'>
            <label htmlFor={props.id || props.name} className="wrapperInput-label">{label}</label>
            <input className="text-input wrapperInput-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error wrapperInput-error">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default InputField