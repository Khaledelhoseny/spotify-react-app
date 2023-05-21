import { Link } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faFire } from '@fortawesome/free-solid-svg-icons'

// import { Link } from 'react-router-dom';
// import logo from '../images/beat.jpeg'
function handleRemove(){
    localStorage.removeItem("accessToken")
  }
const Sidebar = () => {
    return (
        <div className="menu_side" >
               <a href=""> <img src= "./images/beat.jpeg" alt=""/> </a>
            <div className="menu_item" >      
                <span><FontAwesomeIcon icon={faHouse} /></span>
                <Link className='active' to='/home' >Home</Link>
            </div>
            <div className="menu_item" > 
                <span><FontAwesomeIcon icon={faHeart} /></span>
                <Link to='/favourits' >Favourites</Link>
            </div> 
            <div className="menu_item" > 
            
                <span><FontAwesomeIcon icon={faFire} /></span>
                <Link to='/trend' >Trend</Link>
            </div> 
            <div className="menu_item last_item" >  
            <Link onClick={handleRemove} to='/login' >Login</Link>

            </div>
        </div>
    );
};

export default Sidebar;

