import React,{useContext, useState} from "react";
import UserContext from "../Context/UserContext";

const Login=()=>{
    const[userName,setUserName]=useState("")
    const[userPassword,setUserPassword]=useState("")
    const{setUser}=useContext(UserContext)
    //here updating seuset by using usercontext 
    function handleLogin(){
        
        setUser({userName,userPassword})


    }

    return(
        <div>
            <input type="text" onChange={(e)=>setUserName(e.target.value)}/>
            <input type="password" onChange={(e)=>setUserPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>


        </div>
    )
}
export default Login