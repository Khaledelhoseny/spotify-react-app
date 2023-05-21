import React, { useEffect } from 'react';
import { useState } from 'react';
import SignUpValidation from './SignUpValidation' ;
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
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
        console.log(values.password.length)
        // setError(SignUpValidation(values)) ; 
        axios.post("http://localhost:8080/api/v1/auth/register",{
            firstName:values.firstName,
            lastName:values.lastName,
            email:values.email,
            password:values.password,
            username:values.username,
            favoriteGenre:values.favoriteGenre,
            birthDate:values.birthDate,
            gender:values.gender,
        }).then((response)=>{
            console.log(response) 
            navigate("/login")
           
        }).catch((error)=>{
            if(error.response.status ===400){
                setError(SignUpValidation(values)) ; 
            }else if(error.response.data.message ==='[P2002]: Unique constraint failed on the fields: (`username`)'){
                setError(
                    {   username:"username is already exist",
                    })

            }else if(error.response.data.message ==='[P2002]: Unique constraint failed on the fields: (`email`)'){
                setError(
                    {   email:"email is already exist",
                    })

            }
            
            console.log(error) ; 
        })
     
    }
    const navigate =  useNavigate()
    useEffect(()=>{
        if(Object.keys(errors).length===0 &&(values.name !=="" && values.password !==""  )){
                
                
        }
    }, [errors] )

    return (
        <div className='main_div' >
        <div class="register_container" >
        <img src="./images/uper-signin.jpeg" width="100%" alt=""/>
        <form onSubmit={handleSubmit} >
            <div class="register_container_content" > 
                
                    <p>Sign Up To BEAT</p>
                    <div class="register_field" >
                        <label for="">First name</label>
                        <br/>
                        <input type="text" className="login__input" placeholder="first name" name='firstName'  onChange={handleChange} />
                         {errors.firstName && <p style={{color:"red"}} >{errors.firstName}</p> } 
                    </div>
                    <div class="register_field" >
                        <label for="">Last name</label>
                        <br/>
                        <input type="text" className="login__input" placeholder="last name"   name='lastName' onChange={handleChange} />
                         {errors.lastName && <p style={{color:"red"}} >{errors.lastName}</p> }
                    </div>
                    <div class="register_field" >
                        <label for="">Email</label>
                        <br/>
                        <input type="text" className="login__input" placeholder="email"   name='email' onChange={handleChange} />
                         {errors.email && <p style={{color:"red"}} >{errors.email}</p> }
                    </div>
                    <div class="register_field" >
                        <label for="">Password</label>
                        <br/>
                        <input type="password" className="login__input" placeholder="password"    name='password' onChange={handleChange} />
                         {errors.password && <p style={{color:"red"}} >{errors.password}</p> }
                    </div>
                    <div class="register_field" >
                        <label for="">Username</label>
                        <br/>
                        <input type="text" className="login__input" placeholder="username"    name='username' onChange={handleChange} />
                        {errors.username && <p style={{color:"red"}} >{errors.username}</p> }
                    </div>
                    <div class="register_field" >
                        <label for="">favorite Genre</label>
                        <br/>          
                          <select  name='favoriteGenre' onChange={handleChange}  className="form-select form-select-sm" aria-label=".form-select-sm example">
                            <option disabled hidden selected>choose your favorite genre </option>
                            <option value="Pop">Pop</option>
                            <option value="Rock">Rock</option>
                            <option value="HipHop">HipHop</option>
                            <option value="Jazz">Jazz</option>
                            <option value="Country">Country</option>
                            <option value="Blues">Blues</option>
                            <option value="Reggae">Reggae</option>
                          </select>      
                           {errors.favoriteGenre && <p style={{color:"red"}} >{errors.favoriteGenre}</p> } 
                    </div>
                    <div class="register_field" >
                        <label for="">Choose your birth date</label>
                        <br/>
                        <input type="date" className="login__input"  name="birthDate" onChange={handleChange} />
                        {errors.birthDate && <p style={{color:"red"}} >{errors.birthDate}</p> }
                    </div>
                    <div class="register_checkbox" >
                        <label for="">What is your gender</label>
                        <br/>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="gender" id="inlineRadio1" value="Male"  onChange={handleChange} />
                            <label class="form-check-label" for="inlineRadio1">Male</label>
                          </div>
                          <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="gender" id="inlineRadio2" value="Female"  onChange={handleChange} />
                            <label class="form-check-label" for="inlineRadio2">Female</label>
                          </div>
                        {errors.gender && <p style={{color:"red"}} >{errors.gender  }</p> }  
                    </div>
                    <div class="register_button" >
                        <button>Sign Up </button>
                    </div> 
                 
                
            </div>
        </form>
    </div>

         </div>
    );
};

export default Register;