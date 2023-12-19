import React from "react";
import Home from "./Home";
import Mycart from "./Mycart";
import { NavLink,Outlet } from "react-router-dom";

const Navbar=()=>{
    return(
        <div className="navbar">
            <h1>Shopping</h1>
            <div className="pages">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/mycart">Mycart</NavLink>
            <Outlet/>

            </div>
          


            

        </div>
    )
}

export default Navbar