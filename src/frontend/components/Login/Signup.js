import React from 'react'
import { Formik, Field, Form } from 'formik'
import { Button } from 'antd';

const Signup = () => (
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        password: '',
        lastName: '',
        password: '',
      }}
      onSubmit={values => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
        }, 500)
      }}
      render={() => (
        <Form>
          <label htmlFor="email">Email</label>
          <Field name="email" placeholder="Jane" />

          <label htmlFor="password">Password</label>
          <Field name="password" placeholder="jane@acme.com" type="password" />

          <Button type="primary">Submit</Button>
        </Form>
      )}
    />
  </div>
)

export default Signup