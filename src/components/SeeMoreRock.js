import React from 'react';
import Sidebar from './Sidebar';
import SongsUser from './SongsUser';

const SeeMoreRock = () => {
    return (
                
        <div className='main_div' >
        <header >
        <Sidebar/>
        <div className="song_side" >
        <nav>
            <SongsUser/>
        </nav>
            
        Rock
            
        </div>
        </header>
        </div>
    );
};

export default SeeMoreRock;