
import './App.css';
import React,{useState} from 'react';
import summer from './Images/summer.jpeg'
import rainy from './Images/Rainy.jpeg'

import winter from './Images/winter.jpeg'


function App() {

  const[lat,setLat]=useState(null)
  const[long,setLong]=useState(null)
  const[hemisphere,setHemisphere]=useState(null)
  const[month,setMonth]=useState(new Date().getMonth()+1)

  let imgStyle={
    width: "700px",
}





  function getCurrentLocation(){
     if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (position)=>{
          // console.log(position)
          console.log(position.coords.latitude)
          console.log(position.coords.longitude)
          setLat(position.coords.latitude)
          setLong(position.coords.longitude)

          if(position.coords.latitude>0){
            setHemisphere("Southern HemiSphere")
           


          }
          else if(position.coords.longitude<0){

            setHemisphere("Northen HemiSphere")


          }
          else{
            setHemisphere("Equator")

          }

      })
     }
  }
  // getCurrentLocation()
  
  return (
   <div>
    <h1>Whether App</h1>
    <h3>Latitude:-  {lat}</h3>
    <h3>Longitude:- {long}</h3>
    <h3>HemiSphere:- {hemisphere}</h3>
    <h3>Month:- {month}</h3>


    <button onClick={getCurrentLocation}>GetLocation</button>
    {
      <div>
      <h1>Summer</h1>
      <img style={imgStyle} src={summer} alt="Summer Season"/>
      </div>
      
    }
    
    {
      
      !hemisphere &&  (
        (hemisphere === "Northen HemiSphere"  && month>=5 && month<=7) || (hemisphere === "Southern HemiSphere"  && month>=6 && month<=8) )
        &&
        
          <div>
              <h1>Summer</h1>
              <img style={imgStyle} src={summer} alt="Summer Season"/>
        </div>
                 
      }
            
             {
           
                 !hemisphere &&  hemisphere === "Southern HemiSphere"  && month>=8 && month<=10 &&
                     <div>
                          <h1>Rainy Season</h1>
                          <img style={imgStyle} src={rainy} alt="Rainy Season"/>
                    </div>
                 
             }
   </div>
  
  );
}

export default App;
