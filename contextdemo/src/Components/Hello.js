import React, { useContext } from 'react'
import CricketContext from '../Context/CricketContext';

const Hello=(props)=>{
    const{crickter,setCrickter}=useContext(CricketContext)

    return(
    <div className='hello'>
        <h3>MackBook</h3>
        <p>16inch</p>
        <p>1TB</p>
        <p>16GB RAM</p>
       
        {props.children}
    <div>
    {
                 crickter.map((cric,index)=>(
                    <div>
                      <h1>{index}</h1>
                    <p>Name:{cric.name}</p>
                    <p>Age:{cric.age}</p>
                    <p>Country:{cric.country}</p>
                    </div>
                   



                ))


            }

    </div>


    </div>)
    


}
export default Hello;