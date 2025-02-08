import React, { useState } from 'react';  
import { useNavigate } from 'react-router-dom';  
import Sidebar from './Sidebar';  
import Navbar from './Navbar';  
import Canvas from './Canvas';  
import { DndContext } from '@dnd-kit/core';  
import OverComponent from "./OverComponent"



const AppLayout = () => {
  //This manages the component on the canvas
  const [components, setComponents] = useState([]);
  
  // State to manage the view size (resolution)
  const [viewSize, setViewSize] = useState([1200, 800]);
  
  // Hook for navigation
  const navigate = useNavigate();

  // This function code resets the components
  const handleReset = () => {
    setComponents([]);
  };

  // This function duplicate the component
  const handleDuplicate = () => {
    setComponents((prevComponents) => [...prevComponents, ...prevComponents]);
  };

  // This function remove the last component from the canvas
  const handleRemove = () => {
    setComponents((prevComponents) => prevComponents.slice(0, -1));
  };

  // This Function is use to change the view size (resolution)
  const handleChangeView = (size) => {
    setViewSize(size);
  };


  const handleToggleEditor = () => {
    navigate('/code-editor');
  };

  //This Function is use to handle the end of the drag event
  const handleDragEnd = (event) => {
    const { active } = event;
    if (active.id) {
         setComponents((prev)=> [...prev, {name:active.id}   ]  )
    }
  };

  return (
    // <DndContext onDragEnd={handleDragEnd}>
    //   <div className="flex flex-col h-screen bg-gray-900">
    //     <Navbar
    //       onReset={handleReset}
    //       onDuplicate={handleDuplicate}
    //       onRemove={handleRemove}
    //       onChangeView={handleChangeView}
    //       onToggleEditor={handleToggleEditor}
    //     />

    //     <div className="flex flex-grow mt-16">
    //       <Sidebar />
    //       <div className="canvas-container flex-grow h-full overflow-auto flex justify-center items-center">
    //         <div style={{ width: viewSize[0], height: viewSize[1], border: '1px solid gray', maxHeight: 'calc(100vh - 4rem)' }}>
    //           <Canvas components={components} setComponents={setComponents} isMobileView={viewSize[0] <= 480} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </DndContext>

    
    <DndContext   onDragEnd={handleDragEnd}>

        <div className='maincont  bg-black  '>

             <Navbar
                  onReset={handleReset}
                  onDuplicate={handleDuplicate}
                onRemove={handleRemove}
                  onChangeView={handleChangeView}
                onToggleEditor={handleToggleEditor}
            /> 
         


           <div  className="mygrid relative" >

                 <div className='myborder'>

                      <Sidebar/>   
                 </div>

                 <div className='border-2 border-dashed bg-black '     >

                        <Canvas/>                                     
                        {
 
                            components.map(item=> (

                                <OverComponent name={item.name}    />


                            )  )                           

                        } 

                 </div> 

           </div>


        </div>

    </DndContext>



  );
};

export default AppLayout;




// const Draggable=({children})=>{

//    const {attributes, listeners, setNodRef, transform}=useDraggable({id:1})
 
//     const style={

//         transform:transform ? `translate3d(${transform.x}px, ${transform.y}px, 0 )` : undefined

//     }



//    return (

//           <div setNodRef={setNodRef}  {...attributes} {...listeners} style={style}   >

//                 {children}                

//           </div>



//    )


// }