import React from 'react'

import { NavLink } from 'react-router-dom';
import Brand from './Brand';
import Apple from './Apple';
import Samsung from './Samsung';
import Nokia from './Nokia';

import { Outlet } from 'react-router-dom';



const Navbar1=()=>{

   
    return(
        <div className='navbar1'>
            <NavLink to="" element={<Brand/>}>Brand</NavLink>
            <NavLink to="/brand/apple" element={<Apple/>}>Apple</NavLink>
            <NavLink to="/brand/samsung" element={<Samsung/>}>Samsung</NavLink>
            <NavLink to="/brand/nokia" element={<Nokia/>}>Nokia</NavLink>
            <Outlet/>



           
        </div>
    )
}

export default Navbar1;