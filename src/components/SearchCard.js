import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import FavIcon from './FavIcon';
import Player from './Player';
// import { useState } from 'react';
import { useRef } from 'react';
// import axios from 'axios';

const SearchCard = ({handleClick,track}) => {
  function randomPic(){
    return Math.floor((Math.random() * 2) + 1);
  }
 
  const click = (tackId)=>{
    handleClick(tackId)
  }
  

    return (
      <>
      
      <div className="song_card" >
       {/* <Link onClick={()=>click(track.track.id)} target="_blank" to={`https://www.youtube.com/results?search_query=${track.track.title}`} > */}
        <img id='pic' src= {`./images/song_${randomPic()}.jpg`}   alt=""/>
        <div className="card-text" >
          <h2>{track.title}</h2>
          <span>{track.artist.name}</span>
        </div>
        {/* </Link> */}
       {/* <Link  target="_blank" to={`https://www.youtube.com/results?search_query=${track.track.title}`} > */}
        <div onClick={()=>click(track.id)} className='play_icon' >
          <Player  />
        </div>
        {/* </Link> */}

       <FavIcon trackId={track.id} />
      </div>
   
      
    </>
    );
};

export default SearchCard;