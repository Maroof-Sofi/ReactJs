// import React, { useEffect, useState } from "react";

import { useEffect, useState } from "react";

// const Profile = (props)=>{
//     const [count, setCount] = useState(0);
//     const [count2, setCount2] = useState(0);

//     // useEffect(()=>{
//     //     // API call
//     //  console.log('useEffect');
//     // });
//     // console.log('render');

//     // console.log(useState(count));
//     useEffect(()=>{
//         const timer = setInterval(()=>{
//             console.log('Hello Maroof');
//         },1000);
//       console.log('useEffect');  
//       return()=>{
//         console.log("useEffect Returns");  //this is a fucntion 
//       }
//     },[]);
//     console.log('render');
//         return (
//         <div>

//         <h1>Profile Component</h1>
//         {/* <p>About our Team Headed by Maroof Sofi</p> */}
//          <h2>Name: {props.name}</h2>
//          <h3>Count : {count}</h3>
//          {/* <h3>Count2 : {count2}</h3> */}
//          <button onClick={ ()=> setCount(1)}>count</button>
//         </div>
//     );
// };

// export default Profile;

const ProfileCompoenet = (props)=>{
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(()=>{
    // console.log("useEffect")
  });
  // console.log("render");
  return(
    <div>
      <h1>Hey This is a Profile Componenet</h1>
      <h2>Name: {props.name}</h2>
      <h2>count : {count}</h2>
      <button onClick={()=>{
        setCount(1)
      }}>count</button>
    </div>
  )
}
export default ProfileCompoenet;