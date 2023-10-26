import { useState, useEffect } from "react";

const useOnline = ()=>{
    const [isOnline, setIsOnline] = useState(true);

    useEffect(()=>{
        const handleOnline = ()=>{
            setIsOnline(true);
        };
        const handleOffline = ()=>{
            setIsOnline(false);
        };
    //  Javascript provides a functionality 'online'
    //window.addeventlistener will keep track whtjer u are online or offline

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    
    return ()=>{
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('online', handleOffline);
    };
    },[]);
    return isOnline;  //return true or false
   
};

export default useOnline;