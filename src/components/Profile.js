import React from 'react';
import Sidebar from './Sidebar';
import SongsUser from './SongsUser';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Player from './Player';

const Profile = () => {

    function randomPic(){
        return Math.floor((Math.random() * 2) + 1);
    }
    const [userInfo , setUserInfo] = useState({})
    useEffect(()=>{
        axios.get("http://localhost:8080/api/v1/user/profile",
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
        <div className='main_div' >
            <header>
                <Sidebar/>
                <div className="song_side background_img" >
                    <nav>
                    <SongsUser/>
                    </nav>
                    <div className="artist_details" >
                        <img src="../images/me.jpg" alt=""/>
                        <h5 className="artist_name">
                            <p>{userInfo.username}</p>
                        </h5>
                    </div>
                    <div className="artist_songs">
                        <Player/>
                        <img id='pic' src= {`./images/song_${randomPic()}.jpg`}   alt=""/>
                        <p className="mt-2 fs-5" > first first first first first</p>
                        <p className="mt-2 fs-5"  >album album album album album</p>
                        <div className="right_icons" >
                            <ul>
                            <li> 
                                <span><i className="fa-solid fa-headphones fs-5 "></i></span>
                                <span className="fs-5" >11,22,333</span>
                            </li>
                            
                            <li>
                                <span><i className="fa-solid fa-clock fs-5"></i></span>
                                <span className="fs-5" >3:33</span>
                            </li>
                            <li><i className="fa-solid fa-heart text-light fs-4"></i></li>
                            <li><i className="fa-solid fa-ellipsis text-light fs-3 fw-bold "></i></li>
                            </ul>
                        </div>
                    </div>

                </div>
               


            </header>
      </div>
    
    );
};

export default Profile;