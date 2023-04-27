import React from 'react';
import { Link } from 'react-router-dom';

const SongCard = (props) => {
    return (
      <Link to={`https://www.youtube.com/results?search_query=${props.trackTitle}`} >
      
        <div className="song_card" >
        <img src="./images/mekky.jpg"  alt=""/>
        <div className="card-text" >
          <h2>{props.artistName}</h2>
          <span>{props.trackTitle}</span>
        </div>
        <div className="play-icon" >
          <i className="fa-solid fa-circle-play"></i>
        </div>
    </div>
    </Link>

    );
};

export default SongCard;