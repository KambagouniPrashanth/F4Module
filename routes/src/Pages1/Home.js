import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home=()=>{

    const navigate=useNavigate()
    return(
        <div>
            <h1>Home heading</h1>
            <h3>Something about the Home</h3>
            <button onClick={()=>navigate("/about")}>Go to About</button>
            {/* <button onClick={()=>setCount(0)}>Rest Count</button> */}
        </div>
    )
}

export default Home;