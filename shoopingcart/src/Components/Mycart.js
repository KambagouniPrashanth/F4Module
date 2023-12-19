import React from 'react'

const Mycart=(props)=>{
    let{id,title,thumbnail,price}=props;
    console.log(props)

    return(
     
       props && props.map((item)=>(
        console.log(item.id)
       ))
    )
     
    // return(
             
    //                   props &&props.map((item,index)=>(
                        
    //                     <div key={index}>
    //                        <img src={item.thumbnail} alt={item.title}/>
    //                        <h3>{item.title}</h3>
    //                        <p>Price: ${item.price}</p>

    //                     </div>
                            

    //                     ))
                    
                
               
                


        
       
    // )
}

export default Mycart;