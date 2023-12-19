import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Outlet } from 'react-router-dom';
import Navbar1 from './Navbar1';
//above outlet is used to get the children of brand or anything
const Brand=()=>{

   const navigate=useNavigate();

   
    return(
        <div>
            
            <h1>Brand heading</h1>
           <p>Something about the Brand</p>
         
           <button onClick={()=>navigate("apple")}>Apple</button>
           <button onClick={()=>navigate("samsung")}>Samsung</button>
           <button onClick={()=>navigate("nokia")}>Nokia</button>
           {/* <Outlet/> */}


           
        </div>
    )
}

export default Brand;