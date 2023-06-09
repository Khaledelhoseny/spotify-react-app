import { NavLink } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faFire } from '@fortawesome/free-solid-svg-icons'

// import { NavLink } from 'react-router-dom';
// import logo from '../images/beat.jpeg'
function handleRemove(){
    localStorage.removeItem("accessToken")
  }
const Sidebar = () => {
    return (
        <div className="menu_side" >
              <NavLink  to='/home' > <img src= "./images/beat.png"  alt=""/> </NavLink>
            <div className="menu_item" >      
                <span><FontAwesomeIcon icon={faHouse} /></span>
                <NavLink to='/home' >Home</NavLink>
            </div>
            <div className="menu_item" > 
                <span><FontAwesomeIcon icon={faHeart} /></span>
                <NavLink to='/favourits' >Favourites</NavLink>
            </div> 
            <div className="menu_item" > 
            
                <span><FontAwesomeIcon icon={faFire} /></span>
                <NavLink to='/trend' >Trend</NavLink>
            </div> 
            <div className="menu_item last_item" >  
            <NavLink onClick={handleRemove} to='/' >Log Out</NavLink>

            </div>
        </div>
    );
};

export default Sidebar;

