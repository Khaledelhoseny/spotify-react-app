import React from "react";
import Home from "./components/Home";
import {Router , Route , Routes } from "react-router-dom";
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
import SeeMoreHipHop from "./components/SeeMoreHipHop";
import Trend from "./components/Trend";
import SeeMore from "./components/SeeMore";
import { BrowserRouter } from 'react-router-dom';
import BottomBar from "./components/BottomBar";

class App extends React.Component{
    render(){
        return(
            <>
            <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoutes/>} >
                    <Route path="/home" element={<Home/>} />
                    <Route path="/favourits" element={<Favourites/>} />
                    <Route path="/trend" element={<Trend/>} />
                    <Route  path="/profile" element={<Profile/>} /> 
                    <Route  path="/resetPassword" element={<ResetPassword/>} /> 
                    <Route exact  path="/SeeMore" element={<SeeMore/>} /> 
                    <Route  path="/seeMoreHistory" element={<SeeMoreHistory/>} /> 
                    <Route  path="/seeMorePop" element={<SeeMorePop/>} /> 
                    <Route  path="/seeMoreRock" element={<SeeMoreRock/>} /> 
                    <Route  path="/seeMoreHipHop" element={<SeeMoreHipHop/>} />  
                </Route>
            </Routes>
           
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route  path="/login" element={<Login/>} /> 
                <Route  path="/register" element={<Register/>} /> 
            </Routes>
            </BrowserRouter>
           
           
            </>
            
        )
    }
} 
export default App 

