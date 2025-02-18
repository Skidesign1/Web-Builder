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


          </div>

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

    return <div   style={{position:"absolute", top:"520px", height:"63px", backgroundColor:"darkblue", color:"white"  }} 
    
     className='overstyle'>


           <h1>{name}</h1>


    </div>

}

export default OverComponent