import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import { Outlet } from 'react-router-dom';

const Navbar=()=>{

    // <a href='/About'>About</a>
    // <a href='/Context'>Context</a>
    // <a href='/Blog'>Blog</a>
     //by using this link tag we can avoid referesh for every time we click on the link

     //<Link to='/blog'>Blog</Link>
     //above does not which component is active 
     //to know which component is active we use the Navlink and this will show which one is active

    return(
        <div className='navbar'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/context'>Context</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
        <Outlet/>
        {/* outlet is uset get the childrem of navbar */}
           
           
        </div>
    )
}

export default Navbar;