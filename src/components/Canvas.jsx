


// import React, { useState, useEffect } from 'react';
// import { useDrop } from 'react-dnd';
// import Navbar from './Navbar';

// const Canvas = ({ components, setComponents, isMobileView }) => {
//   const [renderedComponents, setRenderedComponents] = useState([]);

//   const [, drop] = useDrop(() => ({
//     accept: ['COMPONENT', 'NAVBAR'],
//     drop: (item) => {
//       if (item.type === 'NAVBAR') {
//         setComponents((prevComponents) => [...prevComponents, { type: 'NAVBAR' }]);
//       } else {
//         setComponents((prevComponents) => [...prevComponents, { type: 'COMPONENT', name: item.name }]);
//       }
//     },
//   }));

//   useEffect(() => {
//     const newRenderedComponents = components.map((component, idx) => {
//       if (component.type === 'NAVBAR') {
//         return (
//           <div key={idx} className="w-full">
//             <Navbar isMobileView={isMobileView} />
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
//     setRenderedComponents(newRenderedComponents);
//   }, [components, isMobileView]);

//   return (
//     <div ref={drop} className="flex-1 bg-gray-100 p-2 h-full border-2 border-dashed border-gray-300 flex flex-col items-center justify-start">
//       {renderedComponents.length === 0 ? (
//         <span className="text-gray-500 text-lg">Canvas Area</span>
//       ) : (
//         renderedComponents
//       )}
//     </div>
//   );
// };

// export default Canvas;


import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import ResponsiveNavbar from './ResponsiveNavbar';

const Canvas = ({ components, setComponents, isMobileView }) => {
  const [renderedComponents, setRenderedComponents] = useState([]);

  const [, drop] = useDrop(() => ({
    accept: ['COMPONENT', 'NAVBAR'],
    drop: (item) => {
      if (item.type === 'NAVBAR') {
        setComponents((prevComponents) => [...prevComponents, { type: 'NAVBAR' }]);
      } else {
        setComponents((prevComponents) => [...prevComponents, { type: 'COMPONENT', name: item.name }]);
      }
    },
  }));

  useEffect(() => {
    const newRenderedComponents = components.map((component, idx) => {
      if (component.type === 'NAVBAR') {
        return (
          <div key={idx} className="w-full">
            <ResponsiveNavbar isMobileView={isMobileView} />
          </div>
        );
      } else {
        return (
          <div key={idx} className="p-2 m-2 bg-white shadow rounded">
            {component.name}
          </div>
        );
      }
    });
    setRenderedComponents(newRenderedComponents);
  }, [components, isMobileView]);

  return (
    <div ref={drop} className="flex-1 bg-gray-100 p-2 h-full border-2 border-dashed border-gray-300 flex flex-col items-center justify-start">
      {renderedComponents.length === 0 ? (
        <span className="text-gray-500 text-lg">Canvas Area</span>
      ) : (
        renderedComponents
      )}
    </div>
  );
};

export default Canvas;
