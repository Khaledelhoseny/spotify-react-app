import React from 'react';
import Sidebar from './Sidebar';
import SongsUser from './SongsUser';
import { useState } from 'react';
import axios from 'axios';
const ResetPassword = () => {
    const [values , setValues] = useState({
        currentPassword:'' , 
        newPassword:''
    })

    // const [errors , setError] = useState({}) ; 

    function handleChange(e){
        setValues({...values , [e.target.name] :e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault() ;
        // setError(LoginValidation(values))  ; 
        console.log(values.currentPassword)
        console.log(values.newPassword)
        
        axios.post("http://localhost:8080/auth/reset-password",{
            currentPassword:values.currentPassword,
            newPassword:values.newPassword
        } ,
        {
          headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
        } 
        ).then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error) ; 
        })
    }
    // const navigate =  useNavigate()
    // useEffect(()=>{
    //     if(Object.keys(errors).length===0 &&(values.name !=="" && values.password !==""  )){
                
    //     }
    // }, [errors] )
    // const handleApi=()=>{
       
    // }
    return (
        <body>
            <header>
                <Sidebar/>
                <div className="song_side " >
                <nav>
                    <SongsUser/>
                </nav> 
                <div class="container">
	<div class="screen">
		<div class="screen__content">
			<form onSubmit={handleSubmit} class="login">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" onChange={handleChange} name='currentPassword' placeholder=" currentPassword"/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="text" class="login__input" onChange={handleChange} name='newPassword' placeholder="newPassword"/>
				</div>
				<button class="button login__submit">
					<span class="button__text">ResetPassword</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div class="social-login">
				<h3>log in via</h3>
				<div class="social-icons">
					<a href="#" class="social-login__icon fab fa-instagram"></a>
					<a href="#" class="social-login__icon fab fa-facebook"></a>
					<a href="#" class="social-login__icon fab fa-twitter"></a>
				</div>
			</div>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div> 
                </div>
            </header>
      </body>
    );
};

export default ResetPassword;