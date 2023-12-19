import React,{useState} from 'react'
import CricketContext from './CricketContext'
//step1
const CricketProvider=(props)=>{
    const[crickter,setCrickter]=useState([{
        name:"Sachin Tendulkar",
        age:51,
        country:"india"
    },
    {
        name:"Dhoni",
        age:51,
        country:"india"
    }])
    
   return(
    <CricketContext.Provider value={
        {
            crickter:crickter,
            setCrickter:setCrickter
        }
    }>
        {props.children}
       
       

    </CricketContext.Provider>

   )
   

}

export default CricketProvider