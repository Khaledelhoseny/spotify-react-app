import React from 'react';
import Sidebar from './Sidebar';
import SongsUser from './SongsUser';
import { useState } from 'react';
import BottomBar from './BottomBar';
import axios from 'axios';
import ResetPasswordVald from './ResetPasswordVald' ;
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
    const [values , setValues] = useState({
        currentPassword:'' , 
        newPassword:''
    })

    const [errors , setError] = useState({}) ; 

    function handleChange(e){
        setValues({...values , [e.target.name] :e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault() ;
        // setError(LoginValidation(values))  ; 
        console.log(values.currentPassword)
        console.log(values.newPassword)
        
        axios.post("http://localhost:8080/api/v1/auth/reset-password",{
            currentPassword:values.currentPassword,
            newPassword:values.newPassword
        } ,
        {
          headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
        } 
        ).then((response)=>{
            console.log(response)
            setError(ResetPasswordVald(values)) ;
            toast.success('password reset successfuly', {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
        }).catch((error)=>{
            console.log(error)
            if(error.response.status ===400){
                setError(ResetPasswordVald(values)) ;
            }else if(error.response.status ===403){
                setError(
                    {
                        currentPassword:"invalid current password",

                    }
                ) ;
            }

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
        <div className='main_div' >
            <header>
                <Sidebar/>
                <div className="song_side " >
                <nav>
                    <SongsUser/>
                </nav> 
                    <div class="reset_container" >
                    <ToastContainer 
                        position="top-center"
                        autoClose={4000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />
        
                    
                        <img src="./images/uper-signin.jpeg" width="100%" alt=""/>
                        <form  onSubmit={handleSubmit} >
                            <div class="reset_container_content" > 
                                
                                    <p>Reset Your Password</p>
                                    <hr/>
                                    <div class="reset_field" >
                                        <label for="">current password</label>
                                        <br/>
                                        <input type="text" className="login__input" placeholder="current password" onChange={handleChange} name='currentPassword' />
                                        {errors.currentPassword && <p style={{color:"red"}} >{errors.currentPassword}</p> } 
                                    </div>
                                    <div class="reset_field" >
                                        <label for="">new password</label>
                                        <br/>
                                        <input type="text" className="login__input" placeholder="new password"    onChange={handleChange} name='newPassword'  />
                                        {errors.newPassword && <p style={{color:"red"}} >{errors.newPassword}</p> } 
                                    </div>
                                    <div class="reset_button" >
                                        <button className='mt-3' >Reset</button>
                                        <hr/>
                                    </div> 
                                     
                                
                                
                            </div>
                        </form>
                    </div>
                </div>
                <BottomBar/>
            </header>
      </div>
    );
};

export default ResetPassword;