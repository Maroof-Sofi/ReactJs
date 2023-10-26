import React from "react";
class Profile extends React.Component {

  constructor(props){
   super(props)
  //Create State
  this.state ={
   userInfo :{
    name : "Dummy Name",
    location: "Dummy Location",
   },
  };
  console.log("child constructor" );
}
async componentDidMount(){
     // API CALLS
    // const data = await fetch("https://api.github.com/users/Maroof-Sofi");
    // const json = await data.json();
    // console.log(json);
    // this.setState({
    //   userInfo:json,
    // });
    this.timer = setInterval(()=>{
      console.log("Namaste React OP");
    },1000);
    
    console.log("child-ComponenetDidMount");
}
componentDidUpdate(prevProps, prevState){
console.log("componenet Did Upadate");
  if(this.state.count!== prevState.count){
    
    //CODE  
  }
  if(this.state.count2!== prevState.count){
    // CODE
  }
} 
 componentWillUnmount(){
 console.log("ComponentWillUnmount");
   clearInterval(this.timer); 
 }
    render(){
        const {count} = this.state;
         console.log('child-render' + this.props.name);
        return(
            <div>
                <h1>Profile Class Component</h1>
                <img src = {this.state.userInfo.avatar_url}/>
                <h2>Name : {this.state.userInfo.name}</h2>
               <h2>surname: {this.state.userInfo.location}</h2>
              {/* <h2>count: {this.state.count}</h2> 
                we can de-structure this
              */}
               <h2>count : {count}</h2>
               {/* <button onClick={()=>{
                // We CANNOT MODIFY VARIABLE DIRECTLY
                //NEVER DO this.state = something
                this.setState({
                    count:1,
                    count2:2,
                });
               }}>setCount</button> */}

            </div>
        );
    }
}
export default Profile;

/* 
order 
* parent Constructor
*   parent render
* First Child   Constructor
* * First Child   render
* second Child   Constructor
* second Child render
** First Child   componentDidMount
** second Child   componentDidMount
*parent componentidMount


*/