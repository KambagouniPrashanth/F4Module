import React,{useState} from 'react'
import moviesData from './MoviesData'
import Moviedetails from './Moviedetails'
// import moviesData from './MoviesData'
// import Moviedetails from './Moviedetails'
const Movietitle=({setSelectedMovie})=>{
    // const [selectedMovie, setSelectedMovie] = useState("")
    // console.log(selectedMovie)

   
    return(
        <div className='movieName'>
            {
                moviesData.map((movie)=>{
                    return(
                    <p onClick={()=>setSelectedMovie(movie)}>{movie.title}</p>
                    )

                })
            }
            {/* <Moviedetails selectedmovie={selectedMovie}/> */}


    </div>
    )

}


export default Movietitle;