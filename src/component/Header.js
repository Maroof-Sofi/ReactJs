import { useState, useContext } from "react";
import { IMG_CDN_URL } from "../Config";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
// import { IMG_CDN_URL } from "../Config";
    // App Layout should be like this 
  //  1.{ <Header/>  }
  //   {
  //       1. Logo
  //       2. Nav-links
  //       3. Cart
  //   }
  // 2.  {<Body/> }
  //   {
  //   1.SearchBar
  //   2.RestaurantLists
  //      -RestaurantCards
  //         -Image
  //         -Name
  //         -Rating
  //         -Cuisines
    
  //   }
  // 3. {<Footer/> }
  //   {
  //     1.links
  //     2.Copyright
  //   }
    
  // export const Title = ()=>(
  //   <a href = "/">
  //     <img className="logo"
  //     src= {logo}
  //     alt="logo"/>
  //   </a>
  // ); 
  
  // const Header = () => {
  //   const [title , setTitle] = useState("FOOD VILLA"); 
  //   const [isLoggedIn, setIsLoggedin] = useState(false);
  //   const isOnline = useOnline();
  //   return (

  //     <div className = "header">
  //       <Title/>
  //       <h1>{title}</h1>
  //       {/* <button onClick={()=>setTitle("New Food App")}>Change Title
  //       </button> */}
  //      <div className="nav-items">
  //       <ul>
  //       <li>
  //         <Link to = "/">Home</Link>
  //       </li>
  //       <li>
  //       <Link to = "/about">About</Link>
  //       </li>
  //       <li>
  //       <Link to = "/contact">Contact</Link>
  //       </li>
  //       <li>
  //       <Link to = "/cart">Cart</Link>
  //       </li>
  //       <li>
  //       <Link to = "/instamart">InstaMart</Link>
  //       </li>
  //       <li>
  //       <Link to = "/ownmart">ownMart</Link>
  //       </li>
  //       </ul>
  //      </div>
  //      <h1>{isOnline ? "" : "" }</h1>
       
  //     </div>
  //   );
  // };
  
  const Header = () => {
    const [title , setTitle] = useState("FOOD VILLA"); 
    const [isLoggedIn, setIsLoggedin] = useState(false);
    const isOnline = useOnline();
     const [btnNameReact, setBtnNameReact] =  useState("Login");
     
     const {loggedInUser} = useContext(UserContext);
    //  Subscribing to the store using the UseSelector(Hook)
    // small portion cart portion we want to subscribe our items
     const cartItems = useSelector((store)=> store.cart.items);
  // const onlineStatus = useOnline();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg ">
      <div className="logo-container">
      <img className="w-56" src={logo} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {isOnline ? "✅" : "🔴"}</li>
          <li className="px-4">
          <Link to = "/">Home</Link>
        </li>
        <li className="px-4">
        <Link to = "/about">About</Link>
        </li>
        <li className="px-4">
        <Link to = "/contact">Contact</Link>
        </li>
        <li className="px-4">
        <Link to = "/cart">Cart({cartItems.length}items)</Link>
        </li>
        {/* <li>
        <Link to = "/instamart">InstaMart</Link>
        </li> */}
        <li className="px-4">
        <Link to = "/ownmart">ownMart</Link>
        </li>
        <button className="login"
        onClick={() => {
          btnNameReact === "Login"
          ? setBtnNameReact("Logout")
          : setBtnNameReact("Login");
        }}
        >{btnNameReact}
        </button>
        <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
  export default Header;