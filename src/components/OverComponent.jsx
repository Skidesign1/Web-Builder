<<<<<<< HEAD
import React, {useRef} from 'react'
import {myImage} from "../assets/assets"
import {NavLink, Link} from "react-router-dom"
import "../../node_modules/font-awesome/css/font-awesome.min.css"

const OverComponent = ({name}) => {

     const navbarDiv=useRef(null)

     const removeLayout=()=>{

        navbarDiv.current.remove()    
 


     }    
   




    if (name === "navbar-1"){

         return <div ref={navbarDiv}      style={{position:"absolute", top:"0px", height:"80px" , backgroundColor:"darkblue", color:"white"  }}
         
          className="overstyle"   >    

               <Link to="/">
                    <img  src={myImage}  className='rounded-full w-20 h-20'     alt="redeem-logo"   />
               </Link> 
              
    
              <ul className='flex items-center gap-2'>
                   
                 <NavLink  to="navbar-home"     className={(isActive)=>   isActive? "get": null }  >
                    
                        <div>
                            Home 
                        </div>   
                </NavLink>     
                      
                <NavLink  to="navbar-about"     className={(isActive)=>   isActive? "get": null }  >
                    
                        <div>
                            About
                        </div>   
                </NavLink>  

                <NavLink  to="navbar-services"     className={(isActive)=>   isActive? "get": null }  >
                    
                        <div>
                            Services
                        </div>   
                </NavLink>      
                     
             </ul>          
            
            <div className='sub-over'>
                  <i   onClick={()=> removeLayout()}     className='fa fa-times cursor-pointer '></i>
            </div> 
             
         </div>

    }else if(name === "mainbody"){
         
          return <div style={{position:"absolute", top:"83px", height:"435px", backgroundColor:"darkblue" , color:"white" }} 
             className='overstyle'>


               <h1>{name}</h1>

=======
import React from 'react';
import { myImage } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
>>>>>>> 7a3848e7241b547e10c9a021b3d71b7b9e6eebb7

const OverComponent = ({ name }) => {
  if (name === "navbar") {
    return (
      <div className="bg-gray-800 text-white" style={{ position: "absolute", top: "0px", width: "100%", zIndex: 1 }}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Brand Logo */}
          <div className="text-2xl font-bold">
            <Link to="/">MyWebsite</Link>
          </div>

<<<<<<< HEAD
    }else if(name === "navbar-2"){

 
             return <div ref={navbarDiv}      style={{position:"absolute", top:"0px", height:"80px" , backgroundColor:"darkblue", color:"white"  }}
         
          className="overstyle"   >    

              
              <ul className='flex items-center gap-2'>
                   
                 <NavLink  to="navbar-home"     className={(isActive)=>   isActive? "get": null }  >
                    
                        <div>
                            Home 
                        </div>   
                </NavLink>     
                      
                <NavLink  to="navbar-about"     className={(isActive)=>   isActive? "get": null }  >
                    
                        <div>
                            About
                        </div>   
                </NavLink>  

                <NavLink  to="navbar-services"     className={(isActive)=>   isActive? "get": null }  >
                    
                        <div>
                            Services
                        </div>   
                </NavLink>      
                     
             </ul>    
            <Link to="/">
                <img  src={myImage}  className='rounded-full w-20 h-20'     alt="redeem-logo"   />
            </Link>       
            
            <div className='sub-over'>
                  <i   onClick={()=> removeLayout()}     className='fa fa-times cursor-pointer '></i>
            </div> 
             
         </div>


    }
=======
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <NavLink to="navbar-home" className={(isActive) => (isActive ? "get" : null)}>Home</NavLink>
            <NavLink to="navbar-about" className={(isActive) => (isActive ? "get" : null)}>About</NavLink>
            <NavLink to="navbar-services" className={(isActive) => (isActive ? "get" : null)}>Services</NavLink>
            <NavLink to="navbar-contact" className={(isActive) => (isActive ? "get" : null)}>Contact</NavLink>
          </div>
>>>>>>> 7a3848e7241b547e10c9a021b3d71b7b9e6eebb7

          {/* Mobile Menu Toggle Button */}
          <button className="md:hidden text-white focus:outline-none" aria-label="Toggle menu">
            <i className="fas fa-bars w-6 h-6"></i>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden bg-gray-700">
          <ul className="space-y-2 py-4">
            <li><NavLink to="navbar-home" className="block px-4 py-2 hover:bg-gray-600">Home</NavLink></li>
            <li><NavLink to="navbar-about" className="block px-4 py-2 hover:bg-gray-600">About</NavLink></li>
            <li><NavLink to="navbar-services" className="block px-4 py-2 hover:bg-gray-600">Services</NavLink></li>
            <li><NavLink to="navbar-contact" className="block px-4 py-2 hover:bg-gray-600">Contact</NavLink></li>
          </ul>
        </div>
      </div>
    );
  } else if (name === "mainbody") {
    return (
      <div style={{ position: "absolute", top: "83px", height: "435px", backgroundColor: "darkblue", color: "white" }} className='overstyle'>
        <h1>{name}</h1>
      </div>
    );
  }

  return (
    <div style={{ position: "absolute", top: "520px", height: "63px", backgroundColor: "darkblue", color: "white" }} className='overstyle'>
      <h1>{name}</h1>
    </div>
  );
};

export default OverComponent;
