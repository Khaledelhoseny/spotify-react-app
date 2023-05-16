import React from 'react';
import SongSearch from './SongSearch';
import SongsUser from './SongsUser';
import Sidebar from './Sidebar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SongSection from './SongSection';
import SearchSection from './SearchSection';
import BottomBar from './BottomBar';
const Home = () => {
// get pop tracks
    const [popTracks , setPopTracks] = useState([])
  const getPopTracks = ()=>{
    axios.get("http://localhost:8080/api/v1/trend?genre=Pop&pageNumber=1&pageSize=6",
    {
        headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
    }
    ).then((response)=>{
        // console.log(response)
        setPopTracks(response.data) 
    }).catch((error)=>{
        console.log(error) ; 
    })

  } 
  useEffect(()=>{
    getPopTracks()
    },[])  

    // console.log(popTracks)

// get pop tracks



// get rock tracks
const [rockTracks , setRockTracks] = useState([])
const getRockTracks = ()=>{
  axios.get("http://localhost:8080/trend?genre=Rock&pageNumber=1&pageSize=6",
  {
      headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
  }
  ).then((response)=>{
      setRockTracks(response.data) 
  }).catch((error)=>{
      console.log(error) ; 

  })

} 
useEffect(()=>{
  getRockTracks()
  },[])  

// get rock tracks 

// get search tracks
const [searchTracks , setSearchTracks] = useState([])
const getSearchTracks = (word)=>{
    if(word===""){
        setSearchTracks([])
        
    }else{
        axios.get(`http://localhost:8080/api/v1/search?q=${word}&pageNumber=1&pageSize=20`,
        {
            headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
        }
        ).then((response)=>{
            // console.log(response)
            setSearchTracks(response.data) 
        }).catch((error)=>{
            console.log(error) ; 
        })
    }
 
}

useEffect(()=>{
    getSearchTracks()
    },[])  
// get search tracks
    


// get history tracks
const [historyTracks , setHistoryTracks] = useState([])
const getHistoryTracks = ()=>{
  
        axios.get(`http://localhost:8080/api/v1/history?pageNumber=1&pageSize=6`,
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
// get history tracks

//add to history 
const addToHistory = (trackId)=>{
    axios.get(`http://localhost:8080/api/v1/track/${trackId}`,
    {
        headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
    }
    ).then((response)=>{
        console.log(response.data)
        getHistoryTracks()
    }).catch((error)=>{
        console.log(error) ; 
    })

}


// useEffect(()=>{
//     addToHistory()
//     },[])  
//add to history 
    return (
        
        <div className='main_div' >
        <header >
        <Sidebar/>
        <div className="song_side" >
        <nav>
            <SongSearch getSearchTracks={getSearchTracks} />
            <SongsUser/>
        </nav>
            
            {

                searchTracks.length!==0? <SearchSection addToHistory={addToHistory} tracks={searchTracks} /> 
                :
                 <> 
                 <SongSection sectionTitle="Recommend" tracks={historyTracks} /> 

                 <SongSection sectionTitle="History" tracks={historyTracks} /> 
                 
                 <SongSection  sectionTitle="Pop" addToHistory={addToHistory} tracks={popTracks} /> 
                 
                 <SongSection sectionTitle="Rock" addToHistory={addToHistory} tracks={rockTracks} />  
                 </>   
   
            }
           



            {/* <h1 id='title' ></h1>
            <img id='downpic'/> */}
            {/* {document.getElementById("pic") } */}
            
        </div>
        <BottomBar/>
        </header>
        </div>
       
    );
};

export default Home;