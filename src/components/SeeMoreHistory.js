import {React ,useState,useEffect} from 'react';
import Sidebar from './Sidebar';
import SongsUser from './SongsUser';
import axios from 'axios';
import SongSection from './SongSection';
const SeeMoreHistory = () => {
    const [historyTracks , setHistoryTracks] = useState([])
const getHistoryTracks = ()=>{
  
        axios.get(`http://localhost:8080/api/v1/history?pageNumber=1&pageSize=100`,
        {
            headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
        }
        ).then((response)=>{
            // console.log(response)
            setHistoryTracks( response.data) 
        }).catch((error)=>{
            console.log(error) ; 
        })
    
 
}

useEffect(()=>{
    getHistoryTracks()
},[])  
    return (
                
        <div className='main_div' >
        <header >
        <Sidebar/>
        <div className="song_side" >
        <nav>
            <SongsUser/>
        </nav>
            
        <SongSection  tracks={historyTracks} /> 

        </div>
        </header>
        </div>
    );
};

export default SeeMoreHistory;