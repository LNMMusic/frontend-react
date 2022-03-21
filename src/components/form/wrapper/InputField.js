import React from 'react'
import { useField } from 'formik'


// ABSTRACTION [EACH FIELD]
const InputField = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className='formik-inputWrapper'>
            <label htmlFor={props.id || props.name} className="formik-inputWrapper-label">{label}</label>
            <input className="text-input formik-inputWrapper-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error formik-inputWrapper-error">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default InputField