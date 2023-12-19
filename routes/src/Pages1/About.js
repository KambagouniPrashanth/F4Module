import React from 'react'

import { useNavigate } from 'react-router-dom';

const About=()=>{
    const navigate=useNavigate()
    return(
        <div>
            <h1>About heading</h1>
            <p></p>


            <h3>About body content</h3>
            <button onClick={()=>navigate("/")}>Go to Home</button>
            

        </div>
    )
}

export default About;