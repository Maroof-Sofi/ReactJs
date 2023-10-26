import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";  
import  { Component } from "react";
import UserContext from "../utils/UserContext";
class About extends Component{
    constructor(props){
    super(props);
    console.log("Parent-constrcutor");
}
componentDidMount(){
    console.log("Parent-ComponentDidMount");
}
render(){
    console.log("parent-render");
    return(
        <div>
             <h1>This is an about page</h1>
             <div>
                loggedInUser
                <UserContext.Consumer>
                    {({loggedInUser})=>
                    <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
             </div>
             <p>This is a Namaste React Live Course</p>
             <ProfileFunctionalComponent name ={"Maroof"}/>
          <Profile name = {"chileOne"} surname={"sofi"}/>
        </div>
    );
    }
}
export default About;