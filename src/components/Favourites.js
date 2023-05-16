import React from 'react';
import Sidebar from './Sidebar';
import SongSearch from './SongSearch';
import SongsUser from './SongsUser';
import { useState, useEffect } from 'react';
import axios from 'axios';
import FavSection from './FavSection';
const Favourites = () => {

    const [favTracks , setFavTracks] = useState([])
    const getFavTracks = ()=>{
      axios.get("http://localhost:8080/api/v1/favorite?pageNumber=1&pageSize=20",
      {
          headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
      }
      ).then((response)=>{
          // console.log(response)
          setFavTracks(response.data) 
      }).catch((error)=>{
          console.log(error) ; 
      })
  
    } 
    useEffect(()=>{
      getFavTracks()
      },[])  
  

    return (
        <div className='main_div' >
        <header >
        <Sidebar/>
        <div className="song_side" >
        <nav>
            <SongsUser/>
        </nav>
            <FavSection setFavTracks={setFavTracks} sectionTitle="your favorites" tracks={favTracks} />
        </div>
        </header>
        </div>
    );
};

export default Favourites;