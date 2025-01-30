
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import Navbar from './Navbar';
// import Canvas from './Canvas';
// import DndProviderWrapper from './DndProviderWrapper';

// const AppLayout = () => {
//   const [components, setComponents] = useState([]);
//   const [viewSize, setViewSize] = useState([1920, 1080]); 
//   const navigate = useNavigate(); 

//   const handleReset = () => {
//     setComponents([]);
//   };

//   const handleDuplicate = () => {
//     setComponents((prevComponents) => [...prevComponents, ...prevComponents]);
//   };

//   const handleRemove = () => {
//     setComponents((prevComponents) => prevComponents.slice(0, -1));
//   };

//   const handleChangeView = (size) => {
//     setViewSize(size);
//   };

//   const handleToggleEditor = () => {
//     navigate('/code-editor');
//   };

//   return (
//     <DndProviderWrapper>
//       <div className="flex flex-col h-screen bg-gray-900">
//         <Navbar
//           onReset={handleReset}
//           onDuplicate={handleDuplicate}
//           onRemove={handleRemove}
//           onChangeView={handleChangeView}
//           onToggleEditor={handleToggleEditor}
//         />

//         <div className="flex flex-grow mt-16">
//           <Sidebar />
//           <div className="canvas-container flex-grow h-full overflow-auto flex justify-center items-center">
//             <div style={{ width: viewSize[0], height: viewSize[1], border: '1px solid gray', maxHeight: 'calc(100vh - 4rem)' }}>
//               <Canvas components={components} setComponents={setComponents} isMobileView={viewSize[0] <= 480} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </DndProviderWrapper>
//   );
// };

// export default AppLayout;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import Navbar from './Navbar';
// import Canvas from './Canvas';
// import DndProviderWrapper from './DndProviderWrapper';

// const AppLayout = () => {
//   const [components, setComponents] = useState([]);
//   const [viewSize, setViewSize] = useState([1920, 1080]);
//   const navigate = useNavigate();

//   const handleReset = () => {
//     setComponents([]);
//   };

//   const handleDuplicate = () => {
//     setComponents((prevComponents) => [...prevComponents, ...prevComponents]);
//   };

//   const handleRemove = () => {
//     setComponents((prevComponents) => prevComponents.slice(0, -1));
//   };

//   const handleChangeView = (size) => {
//     setViewSize(size);
//   };

//   const handleToggleEditor = () => {
//     navigate('/code-editor');
//   };

//   return (
//     <DndProviderWrapper>
//       <div className="flex flex-col h-screen bg-gray-900">
//         <Navbar
//           onReset={handleReset}
//           onDuplicate={handleDuplicate}
//           onRemove={handleRemove}
//           onChangeView={handleChangeView}
//           onToggleEditor={handleToggleEditor}
//         />

//         <div className="flex flex-grow mt-16">
//           <Sidebar />
//           <div className="canvas-container flex-grow h-full overflow-auto flex justify-center items-center">
//             <div style={{ width: viewSize[0], height: viewSize[1], border: '1px solid gray', maxHeight: 'calc(100vh - 4rem)' }}>
//               <Canvas components={components} setComponents={setComponents} isMobileView={viewSize[0] <= 480} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </DndProviderWrapper>
//   );
// };

// export default AppLayout;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Canvas from './Canvas';
import { DndContext } from '@dnd-kit/core';

const AppLayout = () => {
  const [components, setComponents] = useState([]);
  const [viewSize, setViewSize] = useState([1920, 1080]);
  const navigate = useNavigate();

  const handleReset = () => {
    setComponents([]);
  };

  const handleDuplicate = () => {
    setComponents((prevComponents) => [...prevComponents, ...prevComponents]);
  };

  const handleRemove = () => {
    setComponents((prevComponents) => prevComponents.slice(0, -1));
  };

  const handleChangeView = (size) => {
    setViewSize(size);
  };

  const handleToggleEditor = () => {
    navigate('/code-editor');
  };

  const handleDragEnd = (event) => {
    const { active } = event;
    if (active.id === 'navbar') {
      setComponents((prevComponents) => [...prevComponents, { type: 'NAVBAR' }]);
    } else {
      setComponents((prevComponents) => [...prevComponents, { type: 'COMPONENT', name: active.id }]);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex flex-col h-screen bg-gray-900">
        <Navbar
          onReset={handleReset}
          onDuplicate={handleDuplicate}
          onRemove={handleRemove}
          onChangeView={handleChangeView}
          onToggleEditor={handleToggleEditor}
        />

        <div className="flex flex-grow mt-16">
          <Sidebar />
          <div className="canvas-container flex-grow h-full overflow-auto flex justify-center items-center">
            <div style={{ width: viewSize[0], height: viewSize[1], border: '1px solid gray', maxHeight: 'calc(100vh - 4rem)' }}>
              <Canvas components={components} setComponents={setComponents} isMobileView={viewSize[0] <= 480} />
            </div>
          </div>
        </div>
      </div>
    </DndContext>
  );
};

export default AppLayout;
