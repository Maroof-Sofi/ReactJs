import React, { useContext, useEffect } from "react";
import { useState } from "react";

const useAuth = ()=>{
 const [isLoggedIn , setIsLoggedIn] = useState(true);
   useEffect(()=>{
    const handleLogin = ()=>{
        setIsLoggedIn(true);
    };
    const handleLogout = ()=>{
        setIsLoggedIn(false);
    };

    
    return(
          <div>
            {isLoggedIn? (
                <button onClick={handleLogin}>Logout</button>
            ):(
                <button onClick={handleLogout}>Login</button>
            )}
          </div>
        )
    },[]); 

}


export default useAuth;