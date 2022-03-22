// LIBS
import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import InputField from './wrapper/InputField'
import * as Yup from 'yup'
import './FormCss.css'



const FormCar = () => {
    // State
    const [response, setResponse] = useState(null);
    const fields = {
        initial: {
            car_plate: ''
        },
        validation: Yup.object({
            car_plate: Yup.string().required('Required')
        })
    }

    // Handlers
    const FormSubmission = async (http) => {
        const {method, url} = http          // could be added an auth option

        // request
        const request = {
            method:     method,
            headers:    {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
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
    return (
        <Formik
            initialValues={fields.initial}
            validationSchema={fields.validation}
            onSubmit={(values, { resetForm }) => {
                const http = {
                    method: "GET",
                    url:    `/api/car/?car_plate=${values.car_plate}`
                }
                FormSubmission(http)
                resetForm();
            }}
        >
            <Form className='formik'>
                <div className="formik-fields">
                    <InputField 
                        label="Car Plate"
                        name ="car_plate"
                        type ="text"
                        placeholder="AA-123"
                    />
                </div>
                <button type="submit" className='formik-button'>Search</button>
                <h2 className="formik-response">
                    {response}
                </h2>
            </Form>
        </Formik>
    )
}

export default FormCar