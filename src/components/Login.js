import React, { useEffect } from 'react';
import { useState } from 'react';
import LoginValidation from './LoginValidation' ;
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {

    const [values , setValues] = useState({
        name:'' , 
        password:''
    })

    const [errors , setError] = useState({}) ; 

    function handleChange(e){
        setValues({...values , [e.target.name] :e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault() ;
        setError(LoginValidation(values))  ; 
        console.log(values.name)
        console.log(values.password)
        
        axios.post("http://localhost:8080/auth/login",{
            username:values.name,
            password:values.password
        }).then((response)=>{
            console.log(response.data.access_token)
            localStorage.setItem('accessToken',response.data.access_token) 
            console.log(localStorage)
            navigate("/")
        }).catch((error)=>{
            console.log(error) ; 
        })
    }
    const navigate =  useNavigate()
    useEffect(()=>{
        if(Object.keys(errors).length===0 &&(values.name !=="" && values.password !==""  )){
                
        }
    }, [errors] )
    const handleApi=()=>{
       
    }
    return (
        <div className="container">
        <div className="screen">
            <div className="screen__content">
                <form onSubmit={handleSubmit}  className="login">
                    <div className="login__field">
                        <i className="login__icon fas fa-user"></i>
                        <input type="text" className="login__input" placeholder="User name" value={values.name} name='name' onChange={handleChange} />
                        {errors.name && <p style={{color:"red"}} >{errors.name}</p> }
                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-lock"></i>
                        <input type="password" className="login__input" placeholder="Password"  value={values.password}  name='password' onChange={handleChange} />
                        {errors.password && <p style={{color:"red"}} >{errors.password}</p> }
                    </div>
                    <button className="button login__submit">
                        <span  className="button__text">Log In Now <Link to="/register" >register</Link> </span>
                        <i className="button__icon fas fa-chevron-right"></i>
                    </button>				
                </form>
                <div className="social-login">
                    <h3>log in via</h3>
                    <div className="social-icons">
                        <a href="#" className="social-login__icon fab fa-instagram"></a>
                        <a href="#" className="social-login__icon fab fa-facebook"></a>
                        <a href="#" className="social-login__icon fab fa-twitter"></a>
                    </div>
                </div>
            </div>
            <div className="screen__background">
                <span className="screen__background__shape screen__background__shape4"></span>
                <span className="screen__background__shape screen__background__shape3"></span>		
                <span className="screen__background__shape screen__background__shape2"></span>
                <span className="screen__background__shape screen__background__shape1"></span>
            </div>		
        </div>
    </div>
    );
};

export default Login;