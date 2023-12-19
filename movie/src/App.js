import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
// import moviesData from './Components/MoviesData';
import Movietitle from './Components/Movietitle';
import Moviedetails from './Components/Moviedetails';


function App() {

  const [selectedMovie, setSelectedMovie] = useState("")
  console.log(selectedMovie)

  return (
   <div>
          <Moviedetails selectedmovie={selectedMovie}/>

      <Movietitle setSelectedMovie={setSelectedMovie}/>
    {/* <Movietitle addSelectedMovie={selectedMovie}/>
    <Moviedetails selectedmovie={selectedMovie}/> */}
  

   
  


   </div>
  );
}

export default App;
