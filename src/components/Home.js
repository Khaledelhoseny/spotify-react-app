import React from 'react';
import SongSearch from './SongSearch';
import SongsUser from './SongsUser';
import Sidebar from './Sidebar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SongSection from './SongSection';
import SearchSection from './SearchSection';
import BottomBar from './BottomBar';
import RecommendSection from './RecommendSection';
const Home = () => {
 // get user info
const [userInfo , setUserInfo] = useState({})
const getUserInfo=()=>{
    axios.get("http://localhost:8080/api/v1/user/profile",
    {
        headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
    }
    
    ).then((response)=>{
        // console.log(response.data) 
        setUserInfo(response.data) ;
        localStorage.setItem('userInformation',response.data.favoriteGenre) 
        getFavGenreTracks()
    }).catch((error)=>{
        console.log(error) ; 
    })
}
  
useEffect(()=>{
    getUserInfo()
    },[])
// get user info

// get pop tracks
    const [favGenreTracks , setFavGenreTracks] = useState([])
  const getFavGenreTracks = ()=>{
    axios.get(`http://localhost:8080/api/v1/trend?genre=${localStorage.getItem('userInformation')}&pageNumber=2&pageSize=6`,
    {
        headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
    }
    ).then((response)=>{
        // console.log(response)
        setFavGenreTracks(response.data) 
    }).catch((error)=>{
        console.log(error) ; 
    })

  } 
  useEffect(()=>{
    getFavGenreTracks()
    },[])  

    // console.log(favGenreTracks)

// get pop tracks



// get rock tracks
const [rockTracks , setRockTracks] = useState([])
const getRockTracks = ()=>{
  axios.get("http://localhost:8080/api/v1/trend?genre=Rock&pageNumber=1&pageSize=6",
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
        // setHistoryTracks((prevArray)=>{
        //      return[...prevArray,response.data]
        // })
        getHistoryTracks()
        getRecommendTracks()
    }).catch((error)=>{
        console.log(error) ; 
    })

}

//add to history 

// get recommend tracks
const [recommendTracks , setRecommendTracks] = useState([])
const getRecommendTracks = ()=>{
  
        axios.get(`http://localhost:8080/api/v1/recommend `,
        {
            headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
        }
        ).then((response)=>{
            console.log(response)
            setRecommendTracks( response.data) 
        }).catch((error)=>{
            console.log(error) ; 
        })
    
 
}

useEffect(()=>{
    getRecommendTracks()
},[])  
// get recommend tracks
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
                  {recommendTracks.length>=1 ?
                 <RecommendSection sectionTitle="Recommend for you" tracks={recommendTracks} /> 
                 :
                 <></>
                }
                 {historyTracks.length>=1 ?
                 <SongSection addToHistory={addToHistory} sectionTitle="History" tracks={historyTracks} /> 
                 :
                 <></>
                }
                 <SongSection  sectionTitle={userInfo.favoriteGenre} addToHistory={addToHistory} tracks={favGenreTracks} /> 
                 
                 {/* <SongSection sectionTitle="Rock" addToHistory={addToHistory} tracks={rockTracks} />   */}
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