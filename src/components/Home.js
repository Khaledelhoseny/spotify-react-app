import React from 'react';
import Searchbar from './Searchbar';
import SongSection from './SongSection';
import Sidebar from './Sidebar';

const Home = () => {
    return (
        
        <body>
        <header >
            
        <Sidebar/>

        <div className="song_side" >
            <Searchbar/>
            <SongSection/>
            
        </div>
        </header>
        </body>
       
    );
};

export default Home;