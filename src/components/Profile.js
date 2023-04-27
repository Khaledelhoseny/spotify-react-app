import React from 'react';
import Sidebar from './Sidebar';
import SongsUser from './SongsUser';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
const Profile = () => {
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
        <body>
            <header>
                <Sidebar/>
                <div className="song_side background_img" >
                <nav>
                <SongsUser/>
                </nav>
                <div class="artist_details" >
                <img src="../images/me.jpg" alt=""/>
                <h5 class="artist_name">
                    <p>{userInfo.username}</p>
                </h5>
                </div>
                </div>
               


            </header>
      </body>
    
    );
};

export default Profile;