import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SongCard from './SongCard';

const SongSection = () => {
    
    const [tracks , setTracks] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/trend?genre=Pop&pageNumber=1&pageSize=100",
        {
            headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
        }
        ).then((response)=>{
            setTracks(response.data) 
        }).catch((error)=>{
            console.log(error) ; 
        })

    },[])  

    return (
        <>

            <div className="songs-title" >
                    {tracks.map((track)=>(  
                            <SongCard 
                            artistName = {track.track.artist.name}  
                            trackTitle = {track.track.title}

                        />
                    ))}   
            </div>
           

        </>
    );
};

export default SongSection;