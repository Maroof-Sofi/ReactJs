import React from "react";

import ReactDOM from "react-dom/client";
import logo from "./logo.png";
import userIcon from "./user icon.png";

// create a Nested Header Element usinng React,createElement(h1,h2,h3 inside a div with a class title);
/** 
 * const container = React.createElement( 
  "div", 
  {
  className: "title",
},
 [

  React.createElement(
    "h1",
    {
    id:'first',
  },"this is an h1 tag"),
  React.createElement("h2",
  {
    id:"second",
  },"this is an h2 tag"),
  React.createElement("h3",
  {
    id:"third",
  },"this is an h3 tag" )

]
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(container);
*/
// 2. Creating the same Element using JSX

/**
 * const HeaderComponent = ()=>{
    return (
      <div>
        <h1>This is an heading1</h1>
        <h2>This is an heading2</h2>
        <h3>This is an heading3</h3>
      </div>
    );
    };
  
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  
  root.render(<HeaderComponent/>); */

//   3. create a functional component of the same with jsx
/**
  
const Header = ()=>{
    return (
        <div className= "Title" id="title" >
        <h1 id="first" key ="h1">This is an h1 tag</h1>
        <h2 id="second" key ="h2">This is an h2 tag</h2>
        <h3 id="third" key ="h3">This is an h3 tag</h3>
        </div>
        );
    };
    
    const root = ReactDOM.createRoot(document.getElementById('root'));   
    root.render(<Header/>);
    */

//4.  Pass atrribute into the tag in jsx
 
 /* const Header = ()=>{
    return (
        <div className="Title" id="title">
            <h1 style={{color:"blue"}}  key = "h1">This is an h1 tag</h1>
            <h2  style = {{color: "red"}} key = "h2">This is an h1 tag</h2>
            <h3  style={{color:"crimson"}} key = "h3">This is an h1 tag</h3>
        </div>
    )
  }
    const root = ReactDOM.createRoot(document.getElementById('root'));   
    root.render(<Header/>);
    */


  /*   const Keyboard = ()=>{
       return <h2>Hey Bro Howa u</h2>   
    }

    const HeaderComponent = ()=>{
        return(
            <div className="Title" id="title">
                <Keyboard/>
                <h1 style = {{color:"blue"}} key = "h1">This is an h1 tag</h1>
                <h2 style = {{color:"red"}} key = "h1">This is an h2 tag</h2>
                <h3 style = {{color:"green"}} key = "h1">This is an h tag</h3>
            </div>
        );
    };

    const root = ReactDOM.createRoot(document.getElementById('root'));   
    root.render(<HeaderComponent/>);
*/
// `{TitleComponent}` vs {<TitleComponent/>} vs {<TitleComponent><TitleComponent/> } in JSX
/**
 * 
const element = <h1>This is an React Element</h1>;

const TitleElement = ()=>{
    return <h2 style= {{color:"red"}} >This is an TitleElement</h2>;
};

const HeaderElement = ()=>{
    return (
        <div className="Title" id="title">
        {element}
        <TitleElement/>
        <h1 style={{color: "palegreen"}}>This is an h1 tag</h1>
        <h2 style={{color: "palegreen"}}>This is an h2 tag</h2>
        <h3 style={{color: "palegreen"}}>This is an h3 tag</h3>
        </div>
        )
    }
    
    
    const root = ReactDOM.createRoot(document.getElementById('root'));   
    root.render(<HeaderElement/>);
    */

const Hedaer = () => {
    return(
    <>
        <header className="header">
            <div className="left">
                <img src={logo} alt = "Logo"  />
            </div>
            <div className="center">
                <input 
                className="input"
                type="text"
                placeholder="Search anything you want.."/>
            <button type="submit">
                <i class="fa fa-search"></i>
            </button>
            </div>
            <div className="right">
                <img src= {userIcon} alt = "User-Icon"/>
            </div>
        </header>
      </>
    );
};

    const root = ReactDOM.createRoot(document.getElementById('root'));   
    root.render(<Hedaer/>);