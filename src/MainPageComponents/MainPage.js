import React from 'react';
import Sidebar from '../components/Sidebar';
import SongsUser from '../components/SongsUser';
import SongSection from '../components/SongSection';
import { useState ,useEffect } from 'react'; 
import axios from 'axios';
import MainPageSideBar from './MainPgaeSideBar';
import MainPageComponents from './MainPageSongUser';
const MainPage = () => {
// get pop tracks
  const [popTracks , setPopTracks] = useState([])
  const getPopTracks = ()=>{
    axios.get("http://localhost:8080/trend?genre=Pop&pageNumber=1&pageSize=100",
    {
        headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
    }
    ).then((response)=>{
        setPopTracks(response.data) 
    }).catch((error)=>{
        // console.log(error) ; 
    })

  } 
  useEffect(()=>{
    getPopTracks()
    },[])  

// get pop tracks

// get rock tracks
const [rockTracks , setRockTracks] = useState([])
const getRockTracks = ()=>{
  axios.get("http://localhost:8080/trend?genre=Rock&pageNumber=1&pageSize=100",
  {
      headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
  }
  ).then((response)=>{
      setRockTracks(response.data) 
  }).catch((error)=>{
    //   console.log(error) ; 

  })

} 
useEffect(()=>{
  getRockTracks()
  },[])  
// get rock tracks 

if(window.location.reload){
    console.log("reloaded")
    // getPopTracks()
    // getRockTracks()

}
    return (
      
            
        <div className='main_div' >
        <header >
            <MainPageSideBar/>
        <div className="song_side" >
        <nav>
            <MainPageComponents/>
        </nav>
            
     
                 <h1>pop</h1>
                 <SongSection tracks={popTracks} /> 
                 <h1>rock</h1>
                 <SongSection tracks={rockTracks} />  
    
            {/* <h1 id='title' ></h1>
            <img id='downpic'/> */}
            {/* {document.getElementById("pic") } */}
            
        </div>
        </header>
        </div>
       


        
    );
};

export default MainPage;