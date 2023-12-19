import React,{useEffect, useState} from 'react'

import axios from 'axios'



const Home=({setSelectedProduct,selectedproduct})=>{
    // const[fruit,setFruit]=useState("red")
    const [products,setProducts]=useState([])
    console.log(selectedproduct)



   async function displayData(){
        try{
            let response=await axios.get("https://dummyjson.com/products");
            console.log(response.data.products)
            setProducts(response.data.products)

        }
        catch(e){
            console.log(e.message)
        }


    }
    useEffect(()=>{
        displayData();
    },[])
   
    return(
       
       
        <div>
           
            
        <div className='allitems'>
            
            
                {products.map((product) => (
                <div key={product.id} className='iteminfo'>
                    <img src={product.thumbnail} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>Price: ${product.price}</p>
                    
                    <button onClick={()=>setSelectedProduct([...selectedproduct,product])}>AddToCart</button>
                    
                </div>
                ))}
            

           
           {/* <div className='iteminfo'>
               <img src='https://m.media-amazon.com/images/I/61P3v5fOwDL._AC_UL480_FMwebp_QL65_.jpg'/>
               <p>Title: shirt</p>
               <p>Price: $200</p>
               <button>AddToCart</button>
            </div>
            <div className='iteminfo'>
               <img src='https://m.media-amazon.com/images/I/61P3v5fOwDL._AC_UL480_FMwebp_QL65_.jpg'/>
               <p>Title: shirt</p>
               <p>Price: $200</p>
               <button>AddToCart</button>
            </div>
            <div className='iteminfo'>
               <img src='https://m.media-amazon.com/images/I/61P3v5fOwDL._AC_UL480_FMwebp_QL65_.jpg'/>
               <p>Title: shirt</p>
               <p>Price: $200</p>
               <button>AddToCart</button>
            </div>

            <div className='iteminfo'>
               <img src='https://m.media-amazon.com/images/I/61P3v5fOwDL._AC_UL480_FMwebp_QL65_.jpg'/>
               <p>Title: shirt</p>
               <p>Price: $200</p>
               <button>AddToCart</button>
            </div>
            */}

        </div>
           
            
        </div>
    )
}

export default Home;