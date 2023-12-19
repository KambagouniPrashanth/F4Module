import React,{useContext} from 'react';
import CricketContext from '../Context/CricketContext';
//step1
const Display=()=>{
    const {crickter,setCrickter}=useContext(CricketContext)
    
    // let{a,b}=useContext(CricketContext)
    console.log(useContext(CricketContext))
    return(
        <div>
            <h1>Accessing global variable</h1>
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
               
            
            {/* <h1>A:{a}</h1>
            <h1>A:{b}</h1> 
            accesing variables*/}
            {/* {
                crickter.map((cric)=>(
                    return{
                        <div>
                        <p>Name Of Crickter:{cric.name}</p>
                        <p>Age:{cric.age}</p>
                        <p>Country:{cric.country}</p>
                        <button onClick={()=>setCrickter({...cric,age:cric.age+1})}>updateAge</button>
                        </div>
                    }
                  
        
                ))
            } */}
            {
                //  crickter.forEach((element) => {

                //     <p>Name Of Crickter:{element.name}</p>,
                //     <p>Age:{element.age}</p>,
                //     <p>Country:{element.country}</p>,
                //     <button onClick={()=>setCrickter([{...element,age:element.age+1}])}>updateAge</button>
                   
                  
                //  })

            }
           
          

            
           
        </div>
    )
    

}

export default Display;

{/* only for one object
<p>Name Of Crickter:{crickter.name}</p>
            <p>Age:{crickter.age}</p>
            <p>Country:{crickter.country}</p>
            <button onClick={()=>setCrickter({...crickter,age:crickter.age+1})}>updateAge</button> *
            /}

//instead of below lines we simply write above  type
{/* <CricketContext.Consumer>
{
    (info)=>(
        <h1>Line13:{info}</h1>
    )
}
</CricketContext.Consumer> */}