import React, { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';

import { Resizable } from 'react-resizable';
import { MagnifyingGlassIcon, HomeIcon, Squares2X2Icon, Cog6ToothIcon, QuestionMarkCircleIcon, WrenchScrewdriverIcon, ChartBarIcon, DocumentTextIcon } from '@heroicons/react/24/solid';
import 'react-resizable/css/styles.css';
import "../../node_modules/font-awesome/css/font-awesome.min.css"
// Draggable component to make elements draggable
// const Draggable = ({ id, name, icon }) => {



//   const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id });

import { 
  MagnifyingGlassIcon, XCircleIcon, HomeIcon, Squares2X2Icon, Cog6ToothIcon, 
  QuestionMarkCircleIcon, WrenchScrewdriverIcon, ChartBarIcon, DocumentTextIcon 
} from '@heroicons/react/24/solid';
import ResponsiveNavbar from '../components/ResponsiveNavbar'; // Import ResponsiveNavbar

// Draggable component
const Draggable = ({ id, name, icon, component }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
  };

    
      if (name === "Navbar-1" || name === "Navbar-2" ){

        
        return (
          <div ref={setNodeRef} style={style} {...listeners} {...attributes} className={`cursor-move flex items-center hover:bg-blue-600 ${isDragging? "hover:bg-gray-50": "hover:bg-blue-600"  }   `}   >
            {icon}
            <span className="ml-2">{name}</span>
          </div>
        );          


      }

 


  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="cursor-move flex items-center">
      {icon}
      <span className="ml-2">{name}</span>
      {component && <div className="hidden">{component}</div>}
    </div>
  );
};

const Sidebar = () => {
  // Components list
  const [toggle,setToggle]=React.useState(false)

  const [searchTerm, setSearchTerm] = useState("");

  // Component lists

  const coreItems = [
    { id: 'navbar', text: 'Navbar', icon: <HomeIcon className="w-4 h-4" />, component: <ResponsiveNavbar /> },
    { id: 'header', text: 'Header', icon: <ChartBarIcon className="w-4 h-4" /> },
    { id: 'sidebar', text: 'Side Bar', icon: <QuestionMarkCircleIcon className="w-4 h-4" /> },
    { id: 'mainbody', text: 'Main body', icon: <Cog6ToothIcon className="w-4 h-4" /> },
    { id: 'footer', text: 'Footer', icon: <DocumentTextIcon className="w-4 h-4" /> },
  ];

  const presentsItems = [
    { id: 'buttons', text: 'Buttons', icon: <WrenchScrewdriverIcon className="w-4 h-4" /> },
    { id: 'labels', text: 'Labels', icon: <Squares2X2Icon className="w-4 h-4" /> },
    { id: 'icon', text: 'Icon', icon: <Cog6ToothIcon className="w-4 h-4" /> },
  ];


  const lastItem=[
        
      {id:"navbar-1", text:"Navbar-1", icon:<HomeIcon  className='w-5' />  },
      {id:"navbar-2", text:"Navbar-2", icon:<HomeIcon  className='w-5' />  } 

  ]



//   // State to manage sidebar width
//   const [width, setWidth] = React.useState(240);
//   // Filtered lists based on search input
//   const filteredCoreItems = coreItems.filter(item =>
//     item.text.toLowerCase().includes(searchTerm.toLowerCase())
//   );


//   const filteredPresentsItems = presentsItems.filter(item =>
//     item.text.toLowerCase().includes(searchTerm.toLowerCase())
//   );

  return (
    // <aside className="bg-gray-100 h-full w-full p-4">
    //   {/* Sidebar Header */}
    //   <div className="flex flex-col gap-2 items-center mt-4">
    //     <h6><strong>dnd kit</strong></h6>


    //      {/* Search bar */}
    //      <div className="flex-shrink-0 flex items-center bg-white rounded-lg shadow-sm mx-4 mb-4 px-2 py-1" style={{ width: 'calc(100% - 2rem)' }}>
    //        <MagnifyingGlassIcon className="text-gray-600 w-4 h-4 mr-2" />
    //        <input
    //          type="text"
    //          placeholder="Find component"
    //          className="text-sm flex-grow text-gray-800"
    //          style={{ width: '100%' }}
    //       />
    //      </div>
    //    </div>
    //      {/* Scrollable section for components */}
    //      <div className="flex-grow overflow-auto">
    //        {/* components section */}
    //        <div>
    //          <h6 className="font-bold text-sm px-4 py-1">Components</h6>
    //          <ul>
    //            {coreItems.map((item) => (
    //              <li key={item.id} className="flex items-center hover:bg-gray-200 px-4 py-1 text-sm">
    //                <Draggable id={item.id} name={item.text} icon={item.icon} />
    //              </li>
    //            ))}
    //        </ul>
    //        </div>

    //        {/* Example components section */}
    //        <div>
    //          <h6 className="font-bold text-sm px-4 py-1">Examples</h6>
    //          <ul>
    //            {presentsItems.map((item) => (
    // //             <li key={item.id} className="flex items-center hover:bg-gray-200 px-4 py-1 text-sm">
    // //               <Draggable id={item.id} name={item.text} icon={item.icon} />
    // //             </li>
    // //           ))}
    // //         </ul>
    // //       </div>
    // //     </div>
    // //   </div>
    // // </Resizable>

        <aside   className='bg-gray-100 h-full w-full ' >

             <div  className='flex flex-col items-center gap-8 '  >
                  {/* sidebar header*/}
                   <div className='flex flex-col gap-2 items-center justify-center mt-6' >
                        <h6><strong>dnd kit</strong></h6>
                       <div className='flex items-center gap-2 px-1'  >
                           <MagnifyingGlassIcon  className='w-4  cursor-pointer'    />
                           <input className='w-3/4'   type="text" placeholder='search component'   /> 
                       </div>  

                  </div>  

                  {/*scrollable section for component */}
                   
                   <div className='fleex flex-col items-center gap-1'>
                           
                         <h2 ><strong>Components</strong> </h2>
                         <ul>
                          
                             {
                                coreItems.map(items=>{

                                    return      <li key={items.id}  className='flex items-center gap-2 relative  ' >
                                           <Draggable  id={items.id} icon={items.icon} name={items.text}   />
                                             </li>
     

                                }

                                  //  <li key={items.id}  className='flex items-center gap-2 relative  ' >
                                  //      <Draggable  id={items.id} icon={items.icon} name={items.text}   />
                                  //  </li>
                                )

                             }

                         </ul>    

                          <div   className='mt-7'  >
                    
                              <h2><strong>Examples</strong></h2>     
                              <ul>
                                  {
                                      
                                      presentsItems.map(items=>(
                                        <li key={items.id} className='flex items-center gap-2 relative'   >
                                            <Draggable  id={items.id}  name={items.text} icon={items.icon}   /> 
                                        </li>
                                      ))

                                  } 
                              </ul>  

                              <div className='mt-7  group cursor-pointer relative '>
                                  <div className='flex items-center gap-2'>
                                      <h2><strong>Navbars</strong></h2>
                                      <i  onClick={()=> setToggle(!toggle)} title="drop-down"  className={`fa fa-angle-right ${toggle? "rotate-90":null}`}  ></i>
                                  </div>
                                  <div className={ `${toggle? "block" :  "hidden" } ` }  >
                                       
                                       {
                                        
                                         lastItem.map(item=>(
                                          

                                                 <Draggable    id={item.id} name={item.text} icon={item.icon}  />
                                                                 
                                          
                              
                                         ))

                                       }

                                  </div>
                              </div>
                         </div>                         
                                      

                        </div>

             
               
             </div>                 

        </aside>
  )

}
        // {/* Search Input */}
    //     <div className="flex items-center gap-2 px-1 w-full border rounded focus-within:ring-2 focus-within:ring-blue-400">
    //       <MagnifyingGlassIcon className="w-4 cursor-pointer text-gray-500 ml-2" />
    //       <input
    //         type="text"
    //         placeholder="Search component"
    //         className="w-full px-2 py-1 outline-none"
    //         value={searchTerm}
    //         onChange={(e) => setSearchTerm(e.target.value)}
    //       />
    //       {searchTerm && (
    //         <XCircleIcon 
    //           className="w-4 cursor-pointer text-gray-500 hover:text-red-500 mr-2"
    //           onClick={() => setSearchTerm("")}
    //         />
    //       )}
    //     </div>
    //   </div>


    //   {/* Scrollable section for components */}
    //   <div className="flex flex-col items-center gap-3 overflow-y-auto max-h-[70vh] mt-4">
    //     {/* Core Components */}
    //     <h2><strong>Components</strong></h2>
    //     <ul className="w-full">
    //       {filteredCoreItems.length > 0 ? (
    //         filteredCoreItems.map(item => (
    //           <li key={item.id} className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded">
    //             <Draggable id={item.id} icon={item.icon} name={item.text} component={item.component} />
    //           </li>
    //         ))
    //       ) : (
    //         <p className="text-gray-500">No components found</p>
    //       )}
    //     </ul>

    //     {/* Example Components */}
    //     <h2><strong>Examples</strong></h2>
    //     <ul className="w-full">
    //       {filteredPresentsItems.length > 0 ? (
    //         filteredPresentsItems.map(item => (
    //           <li key={item.id} className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded">
    //             <Draggable id={item.id} icon={item.icon} name={item.text} />
    //           </li>
    //         ))
    //       ) : (
    //         <p className="text-gray-500">No examples found</p>
    //       )}
    //     </ul>
    //   </div>
    // </aside>
//   // );
// };

export default Sidebar
