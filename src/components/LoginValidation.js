import React from 'react';

const LoginValidation = (values) => {
  let errors = {}
  if(!values.name){
    errors.name = "Name Required" ; 
  }else if(values.name.length < 5 ){
    errors.name = "name must be greater than 5" ; 
  }else if(values.name !=='khaledelhoseny' ){
    errors.name = "invalid username" ; 
  }

  if(!values.password){
    errors.password = "password Required" ; 
  }else if(values.password !== '123' ){
    errors.password = "invalid password" ; 
  }

  return errors; 
};

export default LoginValidation ;