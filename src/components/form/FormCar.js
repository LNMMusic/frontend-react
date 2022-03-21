// LIBS
import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import InputField from './wrapper/InputField';
import * as Yup from 'yup';



const FormCar = () => {
    // State
    const [result, setResult] = useState(null);
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
        console.log(request)
        // response
        try {
            const response = await fetch(url, request)
            const data = await response.json()
            setResult(data["data"])
        } catch (e) {
            alert(e)
        }
    }

    return (
        <Formik
            initialValues={fields.initial}
            validationSchema={fields.validation}
            onSubmit={(values, { resetForm }) => {
                const http = {
                    method: "GET",
                    url:    `/car/?car_plate=${values.car_plate}`
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
                <h2 className="formik-result">
                    {result}
                </h2>
            </Form>
        </Formik>
    )
}

export default FormCar