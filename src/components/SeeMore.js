
// import { useLocation, useParams } from 'react-router-dom';
// import {React ,useState,useEffect} from 'react';
// import Sidebar from './Sidebar';
// import SongsUser from './SongsUser';
// import axios from 'axios';
// import SongSection from './SongSection';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// import BottomBar from './BottomBar';

// const SeeMore = (props) => {
    

//     console.log(useLocation().state.sectionTitle)

// // get pop tracks
//     const [popTracks , setPopTracks] = useState([])
//   const getPopTracks = ()=>{
//     axios.get("http://localhost:8080/api/v1/trend?genre=Pop&pageNumber=1&pageSize=20",
//     {
//         headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
//     }
//     ).then((response)=>{
//         // console.log(response)
//         setPopTracks(response.data) 
//     }).catch((error)=>{
//         console.log(error) ; 
//     })

//   } 
//   useEffect(()=>{
//     getPopTracks()
//     },[])  

//     // console.log(popTracks)

// // get pop tracks
//     return (
//         <div className='main_div' >
//         <header >
//         <Sidebar/>
//         <div className="song_side" >
//         <nav>
//             <SongsUser/>
//         <div className="song_search" >
//           <FontAwesomeIcon icon={faMagnifyingGlass} />
//           <input type="text" placeholder="Search..."/>
//         </div>

//         </nav>
            
//         <SongSection  tracks={popTracks} /> 

//         </div>
//         <BottomBar/>
//         </header>
//         </div>
//     );
// };

// export default SeeMore;