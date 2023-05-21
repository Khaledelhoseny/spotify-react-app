import React from 'react';
import Sidebar from './Sidebar';
import SongsUser from './SongsUser';
import { useState } from 'react';
import BottomBar from './BottomBar';
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
        
        axios.post("http://localhost:8080/api/v1/auth/reset-password",{
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
        <div className='main_div' >
            <header>
                <Sidebar/>
                <div className="song_side " >
                <nav>
                    <SongsUser/>
                </nav> 
                    <div class="reset_container" >
                        <img src="./images/uper-signin.jpeg" width="100%" alt=""/>
                        <form  onSubmit={handleSubmit} >
                            <div class="reset_container_content" > 
                                
                                    <p>Reset Your Password</p>
                                    <hr/>
                                    <div class="reset_field" >
                                        <label for="">current password</label>
                                        <br/>
                                        <input type="text" className="login__input" placeholder="current password" onChange={handleChange} name='currentPassword' />
                                        {/* {errors.name && <p style={{color:"red"}} >{errors.name}</p> }  */}
                                    </div>
                                    <div class="reset_field" >
                                        <label for="">new password</label>
                                        <br/>
                                        <input type="password" className="login__input" placeholder="new password"    onChange={handleChange} name='newPassword'  />
                                        {/* {errors.password && <p style={{color:"red"}} >{errors.password}</p> }  */}
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