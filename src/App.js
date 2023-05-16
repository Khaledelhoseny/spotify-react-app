import React from "react";
import Home from "./components/Home";
import { Route , Routes } from "react-router-dom";
import Favourites from "./components/Favourites";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import ResetPassword from "./components/ResetPassword";
import MainPage from "./MainPageComponents/MainPage";
import PrivateRoutes from "./components/PrivateRoutes";
import SeeMoreHistory from "./components/SeeMoreHistory";
import SeeMorePop from "./components/SeeMorePop";
import SeeMoreRock from "./components/SeeMoreRock";
class App extends React.Component{
    render(){
        return(
            <>
                
            <Routes>
                {/* <Route  path="/" element={<MainPage/>} /> */}
                <Route path="/" element={<MainPage/>} />
                <Route element={<PrivateRoutes/>} >
                    <Route path="/home" element={<Home/>} />
                    <Route path="/favourits" element={<Favourites/>} />
                    <Route  path="/profile" element={<Profile/>} /> 
                    <Route  path="/resetPassword" element={<ResetPassword/>} /> 
                    <Route  path="/seeMoreHistory" element={<SeeMoreHistory/>} /> 
                    <Route  path="/seeMorePop" element={<SeeMorePop/>} /> 
                    <Route  path="/seeMoreRock" element={<SeeMoreRock/>} /> 

                </Route>
                <Route  path="/login" element={<Login/>} /> 
                <Route  path="/register" element={<Register/>} /> 

            </Routes>
            </>
            
        )
    }
} 
export default App 

