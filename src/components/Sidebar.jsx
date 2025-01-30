
// import React from 'react';
// import { Resizable } from 'react-resizable';
// import { MagnifyingGlassIcon, HomeIcon, Squares2X2Icon, Cog6ToothIcon, QuestionMarkCircleIcon, WrenchScrewdriverIcon, ChartBarIcon, DocumentTextIcon } from '@heroicons/react/24/solid';
// import 'react-resizable/css/styles.css'; 
// import Draggable from './Draggable'; 

// const Sidebar = () => {
//   const coreItems = [
//     { text: 'Navbar', icon: <HomeIcon className="w-4 h-4" /> },
//     { text: 'Header', icon: <ChartBarIcon className="w-4 h-4" /> },
//     { text: 'Side Bar', icon: <QuestionMarkCircleIcon className="w-4 h-4" /> },
//     { text: 'Main body', icon: <Cog6ToothIcon className="w-4 h-4" /> },
//     { text: 'Footer', icon: <DocumentTextIcon className="w-4 h-4" /> },
//   ];

//   const presentsItems = [
//     { text: 'Buttons', icon: <WrenchScrewdriverIcon className="w-4 h-4" /> },
//     { text: 'Labels', icon: <Squares2X2Icon className="w-4 h-4" /> },
//     { text: 'Icon', icon: <Cog6ToothIcon className="w-4 h-4" /> },
//   ];


//   const [width, setWidth] = React.useState(240);

//   const handleResize = (e, { size }) => {
//     setWidth(size.width);
//   };

//   return (
//     <Resizable
//       width={width}
//       height={0} 
//       onResize={handleResize}
//       minConstraints={[200, 0]} 
//       maxConstraints={[400, 0]} 
//     >
//       <div style={{ width }} className="flex flex-col bg-gray-100 text-gray-800 h-full overflow-auto">
//         <div className="flex-shrink-0 text-center mb-4 pt-5">
//           <h6 className="text-gray-800 font-bold text-base">dnd kit</h6>
//         </div>

//         {/* Search Bar */}
//         <div className="flex-shrink-0 flex items-center bg-white rounded-lg shadow-sm mx-4 mb-4 px-2 py-1" style={{ width: 'calc(100% - 2rem)' }}>
//           <MagnifyingGlassIcon className="text-gray-600 w-4 h-4 mr-2" />
//           <input
//             type="text"
//             placeholder="Find component"
//             className="text-sm flex-grow text-gray-800"
//             style={{ width: '100%' }}
//           />
//         </div>

//         {/* Scrollable Section */}
//         <div className="flex-grow overflow-auto">
//           {/* Core Section */}
//           <div>
//             <h6 className="font-bold text-sm px-4 py-1">Components</h6>
//             <ul>
//               {coreItems.map((item, idx) => (
//                 <li key={idx} className="flex items-center hover:bg-gray-200 px-4 py-1 text-sm">
//                   <Draggable name={item.text} icon={item.icon} />
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Presents Section */}
//           <div>
//             <h6 className="font-bold text-sm px-4 py-1">Examples</h6>
//             <ul>
//               {presentsItems.map((item, idx) => (
//                 <li key={idx} className="flex items-center hover:bg-gray-200 px-4 py-1 text-sm">
//                   <Draggable name={item.text} icon={item.icon} />
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Examples Section */}
//           {/* <div>
//             <h6 className="font-bold text-sm px-4 py-1">EXAMPLES</h6>
//             <ul>
//               {examplesItems.map((item, idx) => (
//                 <li key={idx} className="flex items-center hover:bg-gray-200 px-4 py-1 text-sm">
//                   <Draggable name={item.text} icon={item.icon} />
//                 </li>
//               ))}
//             </ul>
//           </div> */}
//         </div>
//       </div>
//     </Resizable>
//   );
// };

// export default Sidebar;


// import React from 'react';
// import { Resizable } from 'react-resizable';
// import { MagnifyingGlassIcon, HomeIcon, Squares2X2Icon, Cog6ToothIcon, QuestionMarkCircleIcon, WrenchScrewdriverIcon, ChartBarIcon, DocumentTextIcon } from '@heroicons/react/24/solid';
// import 'react-resizable/css/styles.css'; 
// import Draggable from './Draggable';

// const Sidebar = () => {
//   const coreItems = [
//     { text: 'Draggable', icon: <HomeIcon className="w-4 h-4" /> },
//     { text: 'Navbar', icon: <ChartBarIcon className="w-4 h-4" /> },
//   ];

//   const presentsItems = [
//     { text: 'Suitable', icon: <Cog6ToothIcon className="w-4 h-4" /> },
//   ];

//   const examplesItems = [
//     { text: 'Pages', icon: <DocumentTextIcon className="w-4 h-4" /> },
//     { text: 'Drawer', icon: <WrenchScrewdriverIcon className="w-4 h-4" /> },
//     { text: 'Form Elements', icon: <Squares2X2Icon className="w-4 h-4" /> },
//     { text: '2D Games', icon: <Cog6ToothIcon className="w-4 h-4" /> },
//     { text: 'Trees', icon: <QuestionMarkCircleIcon className="w-4 h-4" /> },
//   ];

//   const [width, setWidth] = React.useState(240);

//   const handleResize = (e, { size }) => {
//     setWidth(size.width);
//   };

//   return (
//     <Resizable
//       width={width}
//       height={0} 
//       onResize={handleResize}
//       minConstraints={[200, 0]} 
//       maxConstraints={[400, 0]} 
//     >
//       <div style={{ width }} className="flex flex-col bg-gray-100 text-gray-800 h-full overflow-auto">
//         <div className="flex-shrink-0 text-center mb-4 pt-5">
//           <h6 className="text-gray-800 font-bold text-base">dnd kit</h6>
//         </div>

//         {/* Search Bar */}
//         <div className="flex-shrink-0 flex items-center bg-white rounded-lg shadow-sm mx-4 mb-4 px-2 py-1" style={{ width: 'calc(100% - 2rem)' }}>
//           <MagnifyingGlassIcon className="text-gray-600 w-4 h-4 mr-2" />
//           <input
//             type="text"
//             placeholder="Find component"
//             className="text-sm flex-grow text-gray-800"
//             style={{ width: '100%' }}
//           />
//         </div>

//         {/* Scrollable Section */}
//         <div className="flex-grow overflow-auto">
//           {/* Core Section */}
//           <div>
//             <h6 className="font-bold text-sm px-4 py-1">CORE</h6>
//             <ul>
//               {coreItems.map((item, idx) => (
//                 <li key={idx} className="flex items-center hover:bg-gray-200 px-4 py-1 text-sm">
//                   <Draggable name={item.text} icon={item.icon} />
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Presents Section */}
//           <div>
//             <h6 className="font-bold text-sm px-4 py-1">PRESENTS</h6>
//             <ul>
//               {presentsItems.map((item, idx) => (
//                 <li key={idx} className="flex items-center hover:bg-gray-200 px-4 py-1 text-sm">
//                   <Draggable name={item.text} icon={item.icon} />
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Examples Section */}
//           <div>
//             <h6 className="font-bold text-sm px-4 py-1">EXAMPLES</h6>
//             <ul>
//               {examplesItems.map((item, idx) => (
//                 <li key={idx} className="flex items-center hover:bg-gray-200 px-4 py-1 text-sm">
//                   <Draggable name={item.text} icon={item.icon} />
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </Resizable>
//   );
// };

// export default Sidebar;


import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Resizable } from 'react-resizable';
import { MagnifyingGlassIcon, HomeIcon, Squares2X2Icon, Cog6ToothIcon, QuestionMarkCircleIcon, WrenchScrewdriverIcon, ChartBarIcon, DocumentTextIcon } from '@heroicons/react/24/solid';
import 'react-resizable/css/styles.css';

const Draggable = ({ id, name, icon }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="cursor-move flex items-center">
      {icon}
      <span className="ml-2">{name}</span>
    </div>
  );
};

const Sidebar = () => {
  const coreItems = [
    { id: 'navbar', text: 'Navbar', icon: <HomeIcon className="w-4 h-4" /> },
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

  const [width, setWidth] = React.useState(240);

  const handleResize = (e, { size }) => {
    setWidth(size.width);
  };

  return (
    <Resizable
      width={width}
      height={0} 
      onResize={handleResize}
      minConstraints={[200, 0]} 
      maxConstraints={[400, 0]} 
    >
      <div style={{ width }} className="flex flex-col bg-gray-100 text-gray-800 h-full overflow-auto">
        <div className="flex-shrink-0 text-center mb-4 pt-5">
          <h6 className="text-gray-800 font-bold text-base">dnd kit</h6>
        </div>

        {/* Search Bar */}
        <div className="flex-shrink-0 flex items-center bg-white rounded-lg shadow-sm mx-4 mb-4 px-2 py-1" style={{ width: 'calc(100% - 2rem)' }}>
          <MagnifyingGlassIcon className="text-gray-600 w-4 h-4 mr-2" />
          <input
            type="text"
            placeholder="Find component"
            className="text-sm flex-grow text-gray-800"
            style={{ width: '100%' }}
          />
        </div>

        {/* Scrollable Section */}
        <div className="flex-grow overflow-auto">
          {/* Core Section */}
          <div>
            <h6 className="font-bold text-sm px-4 py-1">Components</h6>
            <ul>
              {coreItems.map((item, idx) => (
                <li key={item.id} className="flex items-center hover:bg-gray-200 px-4 py-1 text-sm">
                  <Draggable id={item.id} name={item.text} icon={item.icon} />
                </li>
              ))}
            </ul>
          </div>

          {/* Presents Section */}
          <div>
            <h6 className="font-bold text-sm px-4 py-1">Examples</h6>
            <ul>
              {presentsItems.map((item, idx) => (
                <li key={item.id} className="flex items-center hover:bg-gray-200 px-4 py-1 text-sm">
                  <Draggable id={item.id} name={item.text} icon={item.icon} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Resizable>
  );
};

export default Sidebar;
