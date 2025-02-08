import React, { useState, useEffect } from 'react';  
import { useDroppable } from '@dnd-kit/core'; 
import ResponsiveNavbar from './ResponsiveNavbar';
import {HomeIcon, WrenchScrewdriverIcon, ChartBarIcon, QuestionMarkCircleIcon,Cog8ToothIcon, DocumentCheckIcon} from "@heroicons/react/24/solid"  

// const Canvas = ({ components, setComponents, isMobileView }) => {
//   // This component is used to drop conponent in the canvas
//   const { isOver, setNodeRef } = useDroppable({ id: 'canvas' });
//   const [renderedComponents, setRenderedComponents] = useState([]);  

//   useEffect(() => {
    
//     const newRenderedComponents = components.map((component, idx) => {
//       if (component.type === 'NAVBAR') {
//         return (
//           <div key={idx} className="w-full">
//             <ResponsiveNavbar isMobileView={isMobileView} />  {/* This run the ResponsiveNavbar component */}
//           </div>
//         );
//       } else {
//         return (
//           <div key={idx} className="p-2 m-2 bg-white shadow rounded">
//             {component.name}  
//           </div>
//         );
//       }
//     });
//     setRenderedComponents(newRenderedComponents);  // Update the state with the new rendered components
//   }, [components, isMobileView]);  // Dependencies array to re-run the effect when components or isMobileView changes

//   return (
//     <div ref={setNodeRef} className="flex-1 bg-gray-100 p-2 h-full border-2 border-dashed border-gray-300 flex flex-col items-center justify-start">
//       {renderedComponents.length === 0 ? (  // This Checks if there are no rendered components
//         <span className="text-gray-500 text-lg">Canvas Area</span>  // This will Show a placeholder if there are no rendered components
//       ) : (
//         renderedComponents  
//       )}
//       {isOver && <div className="overlay">Drop Here</div>}   {/* Show a drop indicator when an item is dragged over the canvas */}
//     </div>
//   );
// };

// export default Canvas;




const Canvas=()=>{





   return <div  className='h-full  bg-white  '  >

              <div  className='flex h-20 items-center bg-gray-100  justify-center border-2 border-black'>
                   <div  className='flex items-center gap-2' >
                           
                           <ChartBarIcon className='w-10 opacity-50'  />
                           <h1 className='font-bold    text-2xl opacity-50'  >
                              Header
                           </h1>  

                   </div>
                                           
              </div>                
              
              <div  className='flex  height   items-center bg-gray-100  justify-center border-b-2 border-r-2 border-l-2 border-black'>

                    <div  className='flex items-center gap-2' >
                           
                           <Cog8ToothIcon className='w-10 opacity-50'  />
                           <h1 className='font-bold text-2xl opacity-50'  >
                              Main-body
                           </h1>  

                   </div>

              </div>


               <div  className='flex h-16  items-center bg-gray-100  justify-center border-b-2 border-r-2 border-l-2 border-black'>

                    <div  className='flex items-center gap-2' >
                           
                           <DocumentCheckIcon className='w-10 opacity-50'  />
                           <h1 className='font-bold text-2xl opacity-50'  >
                              Footer
                           </h1>  

                   </div>

              </div>


      </div>

}

export default Canvas