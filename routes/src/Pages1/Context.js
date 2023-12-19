import React from 'react'
import { useNavigate } from 'react-router-dom';

const Context=()=>{
    const navigate=useNavigate()

    return(
        <div>
            <h1>context heading</h1>
            <h3>Something about the Home</h3>
            <button onClick={()=>navigate(-1)}> Back</button>
            <button onClick={()=>navigate(+1)}> Forward</button>

        </div>
    )
}

export default Context;