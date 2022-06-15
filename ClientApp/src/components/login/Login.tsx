import { ErrorMessage, Formik } from 'formik';
import React from 'react';
import { Button, Form, Label } from 'semantic-ui-react';
import UserStore from '../../Helpers/loginhelper';
import MyTextInput from './MyTextInput';

export default function Login(){
    let userstore = new UserStore;
    return(
      <Formik initialValues={{email: "", password: "", error: null}}
      onSubmit = {(values, {setErrors}) => userstore.login(values).catch(error => setErrors({error: "Invalid Email or Pass"}))}
      >
        {({handleSubmit, isSubmitting, errors}) => (
        <Form className="ui form" onSubmit={handleSubmit} >

    
      <MyTextInput placeholder='Email' name="email" />

  
      <MyTextInput placeholder='Password' name="password" type='password'/>

      <ErrorMessage
      name ='error' render={() => <Label style={{marginBottom: 10}} basic color="red" content={errors.error} /> }
      />
    <Button loading={isSubmitting} positive type='submit'>Login</Button>
  </Form>
    )}
      </Formik>
)}