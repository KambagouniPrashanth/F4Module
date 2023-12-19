import React,{useState} from "react";
import UserContext from "./UserContext";

const UserProvider=(props)=>{
    const[user,setUser]=useState(null)
  return(
    <UserContext.Provider value={{user,setUser}}>//it is useful update and access the data
            {props.children}

    </UserContext.Provider>

  )
   
}
export default UserProvider