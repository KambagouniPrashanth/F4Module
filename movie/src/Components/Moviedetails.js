import React from 'react'

const Moviedetails=({selectedmovie})=>{
  console.log("movieDetails")
  console.log(selectedmovie)
    
  return(
        <div className='movieDetails'>
        {
          selectedmovie?(
            <div>
            <h2>{selectedmovie.title}</h2>
            <p>{selectedmovie.genre}</p>
            <p>{selectedmovie.releaseDate}</p>
            <img src={selectedmovie.poster}></img>
  
            </div>
           
          ):("")

         
  
        }
        
  
  
      </div>
    )

}

export default Moviedetails;