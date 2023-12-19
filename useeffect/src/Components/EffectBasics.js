import React,{useState,useEffect} from 'react';

const EffectBasics=()=>{

//    let [value,setValue]=useState(0)
   let[gold,setGold]=useState(0)
   let[silver,setSilver]=useState(0)

   let[bronze,setBronze]=useState(0)

  useEffect(()=>{
    document.title=`Gold:${gold} | Silver:${silver} | Bronze:${bronze}`

    console.log("rendered")

  },[gold,silver])

//   useEffect prevent the redering the eniter component
  

    return(
        <div>
            {/* <h1>Effect Basics</h1>
            <h2>Value:{value}</h2> */}
            <h1>Gold:{gold} | Silver:{silver} | Bronze:{bronze} </h1>

            <button onClick={()=>setGold(gold+1)}>Gold</button>
            <button onClick={()=>setSilver(silver+1)}>Silver</button>

            <button onClick={()=>setBronze(bronze+1)}>Bronze</button>

        </div>
    )

}

export default EffectBasics;