import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

const Profile=()=>{
    const {user}=useContext(UserContext)
    console.log(user)
    
    if(!user)return(<p>Not Logged in</p>)
    return(
        <div>
            <p>{user.userName}</p>
            <p>{user.userPassword}</p>

        </div>
    )
    
}
export default Profile