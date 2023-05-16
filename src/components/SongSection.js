import React from 'react';
import SongCard from './SongCard';
import { Link } from 'react-router-dom';
const SongSection = ({ addToHistory,tracks,sectionTitle}) => {
    
    const handleClick=(trackId)=>{
        addToHistory(trackId)
      }
    return (
        <div className='song_section' >

        
        <div>
                <h3>{sectionTitle}</h3>
                {
                       sectionTitle? <Link  to={`/seeMore${sectionTitle}`}>seemore</Link> :<></>
                }
                
                
        </div>
                {tracks.length>=1 ? tracks.map((track,index)=>(  
                        <SongCard handleClick={handleClick} key={index} track={track} />
                )) : <h2>Loading...</h2>}   



    </div>
    );
};

export default SongSection;