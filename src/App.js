import React from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import { Route , Routes } from "react-router-dom";
import Favourites from "./components/Favourites";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import ResetPassword from "./components/ResetPassword";
class App extends React.Component{
    render(){
        return(
            <>
                
            <Routes>
                {/* <Route  path="/" element={<MainPage/>} /> */}
                <Route path="/" element={<Home/>} />
                <Route path="/favourits" element={<Favourites/>} />
                <Route  path="/login" element={<Login/>} /> 
                <Route  path="/register" element={<Register/>} /> 
                <Route  path="/profile" element={<Profile/>} /> 
                <Route  path="/resetPassword" element={<ResetPassword/>} /> 

            </Routes>
            </>
            
        )
    }
} 
export default App 

