import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SongSearch from './SongSearch';
import SongsUser from './SongsUser';
const Searchbar = () => {

  
    return (
        <nav>
          <SongSearch/>
          <SongsUser/>
      </nav>
    );
};

export default Searchbar;