import React from 'react'
import { useNavigate } from 'react-router-dom';


const Blog=({setCount,count})=>{
    const navigate=useNavigate()

    return(
        <div>
            <h1>Blog heading</h1>
            <p></p>
            <h3>Something about the Blog</h3>
            <button onClick={()=>navigate(+1)}> Forward</button>
            <button onClick={()=>navigate(-1)}> Back</button>


            <button onClick={()=>setCount(count+1)}>Click Me</button>
        </div>
    )
}

export default Blog;