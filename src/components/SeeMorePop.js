import React from 'react';
import Sidebar from './Sidebar';
import SongsUser from './SongsUser';

const SeeMorePop = () => {
    return (
                
        <div className='main_div' >
        <header >
        <Sidebar/>
        <div className="song_side" >
        <nav>
            <SongsUser/>
        </nav>
            
        pop
            
        </div>
        </header>
        </div>
    );
};

export default SeeMorePop;