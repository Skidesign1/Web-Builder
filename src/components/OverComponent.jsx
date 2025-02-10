import React from 'react'
import {myImage} from "../assets/assets"
import {NavLink, Link} from "react-router-dom"

const OverComponent = ({name}) => {
      
     







    if (name === "navbar"){

         return <div  style={{position:"absolute", top:"0px", height:"80px" , backgroundColor:"darkblue", color:"white"  }}
         
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


         </div>

    }else if(name === "mainbody"){
         
          return <div style={{position:"absolute", top:"83px", height:"435px", backgroundColor:"darkblue" , color:"white" }} 
             className='overstyle'>


               <h1>{name}</h1>


          </div>

    }

    return <div   style={{position:"absolute", top:"520px", height:"63px", backgroundColor:"darkblue", color:"white"  }} 
    
     className='overstyle'>


           <h1>{name}</h1>


    </div>

}

export default OverComponent