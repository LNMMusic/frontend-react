// LIBS
import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup' 
import InputField from './wrapper/InputField'
import './FormCss.css'



const FormCarCreate = () => {
    // State
    const [response, setResponse] = useState(null);
    
    // Form [parameters]
    const FormFields = {}
    const FormValidators = {}
    const FormWrappers = []

    // Form [http]
    const http = {
        method: "GET",
        url:    "/api/car/create",
        auth:   null
    }
    const FormSubmission = async (http, body) => {
        const {method, url, auth} = http          // could be added an auth option

        // request
        const request = {
            method:     method,
            headers:    {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }
        if (body) {
            request["body"] = JSON.stringify(body)
        }
        if (auth) {
            request["auth"] = auth
        }

        // response
        try {
            const response = await fetch(url, request)
            if (!response.ok) {
                setResponse(`not found`)
            } else {
                const data = await response.json()
                setResponse(data["data"])
            }
        } catch (e) {
            setResponse(`Something went wrong:\n${JSON.stringify(e)}`)
        }
    }

    // Form [component]
    return (
        <Formik
            initialValues={FormFields}
            validationSchema={Yup.object(FormValidators)}
            onSubmit={(body, { resetForm }) => {
                FormSubmission(http, body)
                resetForm();
            }}
        >
            <Form className="formik">
                {/* Form Fields */}
                <div className="formik-fields">{FormWrappers.map((wrapper) => {
                    return wrapper
                })}</div>

                {/* Form Button */}
                <button type="submit" className="formik-button">Search</button>

                {/* Form Response */}
                <h2 className="formik-response">{response}</h2>
            </Form>
        </Formik>
    )
}

export default FormCarCreate