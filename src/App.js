import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
    
import Header from "./component/Header";
import Footer from "./component/Footer";
import Body from "./component/Body";
import RestaurantCard from "./component/RestaurantCard";
import { restaurantList } from "./Config";
// import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Contact from "./component/Contact";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";  
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./component/RestaurantMenu";
import Profile from "./component/Profile";
import Shimmer from "./component/Shimmer";
// import InstaMart from "./component/OwnMart";
import UserContext from "./utils/UserContext";
// import OwnMart from "./component/OwnMart";
// import InstaMart from "./component/InstaMart";
const OwnMart = lazy(()=>import('./component/OwnMart'));   //this is a kind of dynmaic import
const About = lazy(()=>import('./component/About')); 
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./component/Cart";
// import InstaMart from "./component/InstaMart";
/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side) 
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

const AppLayOut = ()=>{
  const [userName, setUserName] = useState();

  //  authentication
    
  useEffect(()=>{
    const data = {
      name: "Maroof Sofi",
    };
    setUserName(data.name)
  },[]);



  // const [userInfo, setUserInfo] = useState();
  return(
    <Provider store={appStore}>

    <UserContext.Provider value= {{loggedInUser : userName, setUserName}}>
      <div className="app">
  {/* The <Outlet /> component is used to render the child routes within a parent route.
  */}
  <Header/>
    <Outlet/>
    <Footer/>
    </div>
  </UserContext.Provider>
  </Provider>
  );
};

// const appRouter = createBrowserRouter([
//   {
//     path : "/",
//     element: <AppLayOut/>,
//     errorElement : <Error/>,
//   children:[
//     {
//     path : "/",
//     element: <Body/>,
//   },
//   {
//     path : "/about",
//     element : <About/>,
//   },
//   {
//     path : "/contact",
//     element : <Contact/>
//   },{
//     path: "restaurant/:resId",
//     element: <RestaurantMenu/>,
//   },
 
// ],
// },
// ]);
// call createBrowserRouter for routing different pages
const appRouter = createBrowserRouter([
  {
    path : "/",   // show path for routing
    element: <AppLayOut/>,  // show component for particular path
    errorElement : <Error/>,  // show error component for path is different
    children:[
     // show children component for routing
      {
       path : "/",
       element: <Body/>,
      },
      {
        path : "/about",
        element : <Suspense fallback ={<h1>This will take a moment wile loading</h1>}><About/></Suspense>,
        children:[
        {
            
            path : "profile",
            element : <Profile/>
          }
        ],
      },
      {
        path : "/contact",
        element: <Contact/>,
      },
            {
                path: "restaurant/:resId",
                element: <RestaurantMenu/>,
              },
              {
                path: "/ownmart",
                element:<Suspense fallback={<h1>loading,please wait</h1>}><OwnMart/></Suspense>, 
              },
              {
                path : "/cart",
                element: <Cart/>
              }
        ],
      
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(< RouterProvider router={appRouter}/>);






  //       PROPS DRILLING
/**
 * Applayout
 * (state=user)
 * -<Body user = {user}/>
 * -RestaurantCard user={user}
 *      -<h4>{user}</h4>
 * 
 */