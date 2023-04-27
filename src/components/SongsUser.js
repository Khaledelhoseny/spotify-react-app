import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const SongsUser = () => {
    const [userInfo , setUserInfo] = useState({})
    useEffect(()=>{
        axios.get("http://localhost:8080/user/profile",
      {
          headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
      }
      
      ).then((response)=>{
          // console.log(response.data) 
          setUserInfo(response.data) ;
      }).catch((error)=>{
          console.log(error) ; 
      })
  
        },[])

    return (
        <div className="song_user" >
        <img src="./images/me.jpg" alt=""/>
        <span>{userInfo.username}</span>
        <i className="fa-regular fa-bell"></i>
        <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          settings
        </button>
        <ul class="dropdown-menu">
          <li><Link class="dropdown-item" to="/profile">Profile</Link></li>
          <li><Link class="dropdown-item" to="/resetPassword">reset password</Link></li>
          <li><a class="dropdown-item" href="#">LogOut</a></li>     
        </ul>
      </div>
      </div>
    );
};

export default SongsUser;