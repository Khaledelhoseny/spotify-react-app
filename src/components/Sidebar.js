import { Link } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

// import { Link } from 'react-router-dom';
// import logo from '../images/beat.jpeg'
const Sidebar = () => {
    return (
        <div className="menu_side" >
               <a href=""> <img src= "./images/beat.jpeg" alt=""/> </a>
            <div className="menu_item" >      
                <span><FontAwesomeIcon icon={faHouse} /></span>
                <Link to='/' >Home</Link>
            </div>
            <div className="menu_item" > 
                <span><FontAwesomeIcon icon={faHeart} /></span>
                <Link to='/favourits' >Favourites</Link>
            </div> 
            <div className="menu_item last_item" >  
            <Link to='/login' >Login</Link>

            </div>
        </div>
    );
};

export default Sidebar;

