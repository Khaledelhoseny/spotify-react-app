import React from 'react';
import SongCard from './SongCard';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
const SongSection = ({ addToHistory,tracks,sectionTitle,setFavTracks}) => {
    
    const handleClick=(trackId)=>{
        if(sectionTitle!=="History"){
                addToHistory(trackId)
        }else{
                console.log(trackId)
        }
       
      }
      const navigate = useNavigate()
     function goToSeeMore(){
        navigate("/SeeMore",{state:{sectionTitle:sectionTitle}})
     }
    return (
        <div className='song_section' >

        
        <div>
                {
                sectionTitle==="Pop"||sectionTitle==="Rock"||sectionTitle==="HipHop"?  
                <h3>Your favorite genre {sectionTitle}</h3>
                :
                <h3>{sectionTitle}</h3>
                }

                {
                       sectionTitle&&sectionTitle!=="Your Favorites"&&sectionTitle!=="Most Trending Tracks"? 
                       <Link to={`/SeeMore${sectionTitle}`} >see more</Link>
                       :
                       <></>
                }
                
                
        </div>
                {tracks.length>=1 ? tracks.map((track,index)=>(  
                        <SongCard  setFavTracks={setFavTracks} handleClick={handleClick} key={index} track={track} />
                )) : <h4 className='loading' >There is no tracks ...</h4>}   

        </div>
    );
};

export default SongSection;