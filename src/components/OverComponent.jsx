import React from 'react'

const OverComponent = ({name}) => {
      

    if (name === "navbar"){

         return <div  style={{position:"absolute", top:"0px", height:"80px" , backgroundColor:"darkblue", color:"white"  }}
         
          className="overstyle"   >    

               
               <h1>{name}</h1>
 

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