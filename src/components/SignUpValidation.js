import React from 'react';

const SignUpValidation = (values) => {
  let errors = {}
  const email_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const string_pattern = /^[a-zA-Z\s]+$/
  if(!values.firstName){
    errors.firstName = "firstName Required" ; 
  }

  if(!values.lastName){
    errors.lastName = "lastName Required" ; 
  }

  if(!values.email){
    errors.email = "email Required" ; 
  }else if (!email_pattern.test(values.email)){
    errors.email = "invalid email" ; 
  }

  if(!values.password){
    errors.password = "password Required" ; 
  }

  if(!values.birthDate){
    errors.birthDate = "date Required" ; 
  }
  return errors; 
};

export default SignUpValidation ;