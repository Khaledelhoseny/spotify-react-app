import React from 'react';
import Player from './Player';
import FavIcon from './FavIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
const ProfileCard = ({addToHistory,track,setFavTracks}) => {
    // get random pic
    function randomPic(){
        return Math.floor((Math.random() * 2) + 1);
    }
// get random pic

const click = (tackId)=>{
    addToHistory(tackId)
    document.getElementById("track_title").innerHTML=track.track.title ;
    document.getElementById("artist_name").innerHTML=track.track.artist.name ;
  
  }
    return (
        <div className="artist_songs">
         <div style={{display: "inline"}} onClick={()=>click(track.track.id)} >
          <Player />
        </div>
        <img className='ml-5' id='pic' src= {`./images/song_${randomPic()}.jpg`}   alt=""/>
        <div style={{display:"inline-block",marginLeft: 13}} >
        <p className=" fs-5" >{ track.track.title} </p>
        <p className=" fs-6"  >{track.track.artist.name}</p>
        </div>
        <div className="right_icons" >
        
                <FavIcon setFavTracks={setFavTracks}  trackId = {track.track.id} />
           
                <FontAwesomeIcon icon={faEllipsis} />
         
    </div>
    </div>
    );
};

export default ProfileCard;