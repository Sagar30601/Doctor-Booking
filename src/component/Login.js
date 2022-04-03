import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "./Login.css"

const SignupSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .min(10, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required')
  });

 const ValidationSchemaExample = () => (
  <div className='app'>
    <div className='login_form'>
      <h1>Login</h1>
      <Formik
        initialValues={{
          phoneNumber: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          alert(values.phoneNumber);
          console.log(values);
        }}
      >
      {/* Yup lbrary */}
        {({ errors, touched }) => (
          <Form>
            <h5>Phone Number</h5>
            <Field name="phoneNumber" />
            {errors.phoneNumber && touched.phoneNumber ? (
              <div>{errors.phoneNumber}</div>
            ) : null}
            <button type="submit">Login</button>
            <p>I agree to the Terms and Conditions of the website</p>
          </Form>
        )}
      </Formik>
    </div>
  </div>
);

export default ValidationSchemaExample