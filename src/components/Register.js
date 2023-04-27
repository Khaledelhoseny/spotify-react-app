import React, { useEffect } from 'react';
import { useState } from 'react';
import SignUpValidation from './SignUpValidation' ;
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Toast } from 'bootstrap';
import { toast } from 'react-toastify';
const Register = () => {

    const [values , setValues] = useState({
        firstName:'' , 
        lastName:'' ,
        email :'',
        password:'' , 
        username:'' ,
        favoriteGenre :'', 
        birthDate : '' , 
        gender:''
    })

    const [errors , setError] = useState({}) ; 

    function handleChange(e){
        setValues({...values , [e.target.name] :e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault() ;
        setError(SignUpValidation(values))  ; 

        axios.post("http://localhost:8080/auth/register",{
            username:values.username,
            email:values.email,
            password:values.password
        }).then((response)=>{
            console.log(response) 
    
        }).catch((error)=>{
            console.log(error) ; 
        })
        // fetch("http://localhost:8080/auth/register",{
        //     method:"POST",
        //     headers: {'content-type':'application/json'},
        //     body:JSON.stringify({
        //         username:values.name,
        //         email:values.email,
        //         password:values.password,

        //     })
        // }).then(()=>{
        //     console.log(values) 
        //     toast.success("Successs")
        // }).catch((error)=>{
        //     toast.error("faild"+error.message)

        // })
    }
    const navigate =  useNavigate()
    useEffect(()=>{
        if(Object.keys(errors).length===0 &&(values.name !=="" && values.password !==""  )){
                navigate("/login")
                
        }
    }, [errors] )

    return (
        <div className="container">
        <div className="screen">
            <div className="screen__content">
                <form onSubmit={handleSubmit} className="login">
                    <div className="login__field">
                        <i className="login__icon fas fa-user"></i>
                        <input type="text" className="login__input" placeholder="firstName"  name='firstName'  onChange={handleChange} />
                        {errors.firstName && <p style={{color:"red"}} >{errors.firstName}</p> }
                        
                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-lock"></i>
                        <input type="text" className="login__input" placeholder="lastName"    name='lastName' onChange={handleChange} />
                        {errors.lastName && <p style={{color:"red"}} >{errors.lastName}</p> }

                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-lock"></i>
                        <input type="email" className="login__input" placeholder="email"    name='email' onChange={handleChange} />
                        {errors.email && <p style={{color:"red"}} >{errors.email}</p> }

                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-lock"></i>
                        <input type="password" className="login__input" placeholder="password"    name='password' onChange={handleChange} />
                        {errors.password && <p style={{color:"red"}} >{errors.password}</p> }

                    </div>
                    <div className="login__field">
                        <i className="login__icon fas fa-lock"></i>
                        <input type="text" className="login__input" placeholder="username"    name='username' onChange={handleChange} />
                        {errors.username && <p style={{color:"red"}} >{errors.username}</p> }

                    </div>
                    
                    <div className="login__field">
                        <i className="login__icon fas fa-lock"></i>
                        <input type="text" className="login__input" placeholder="favoriteGenre"    name='favoriteGenre' onChange={handleChange} />
                        {errors.favoriteGenre && <p style={{color:"red"}} >{errors.favoriteGenre}</p> }
            
                    </div>
                    <div className="login__field">  
                        <input type="date" name='birthDate' className="login__input"     onChange={handleChange} />
                        {errors.birthDate && <p style={{color:"red"}} >{errors.birthDate}</p> }

                    </div>

                    <div className="login__field">
                        <label>Gender</label>
                        <br></br>
                        <input type="radio" className="login__input"  value="Male"   name='gender' onChange={handleChange} />
                        <label>Male</label>
                        <input type="radio" className="login__input"  value="Female"  name='gender' onChange={handleChange} />
                        <label>Female</label>
                    </div>

                    <button className="button login__submit">
                        <span className="button__text">register</span>
                        <i className="button__icon fas fa-chevron-right"></i>
                    </button>				
                </form>
                
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

export default Register;