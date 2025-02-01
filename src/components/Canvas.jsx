import React, { useState, useEffect } from 'react';  
import { useDroppable } from '@dnd-kit/core'; 
import ResponsiveNavbar from './ResponsiveNavbar';  

const Canvas = ({ components, setComponents, isMobileView }) => {
  // This component is used to drop conponent in the canvas
  const { isOver, setNodeRef } = useDroppable({ id: 'canvas' });
  const [renderedComponents, setRenderedComponents] = useState([]);  

  useEffect(() => {
    
    const newRenderedComponents = components.map((component, idx) => {
      if (component.type === 'NAVBAR') {
        return (
          <div key={idx} className="w-full">
            <ResponsiveNavbar isMobileView={isMobileView} />  {/* This run the ResponsiveNavbar component */}
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
    setRenderedComponents(newRenderedComponents);  // Update the state with the new rendered components
  }, [components, isMobileView]);  // Dependencies array to re-run the effect when components or isMobileView changes

  return (
    <div ref={setNodeRef} className="flex-1 bg-gray-100 p-2 h-full border-2 border-dashed border-gray-300 flex flex-col items-center justify-start">
      {renderedComponents.length === 0 ? (  // This Checks if there are no rendered components
        <span className="text-gray-500 text-lg">Canvas Area</span>  // This will Show a placeholder if there are no rendered components
      ) : (
        renderedComponents  
      )}
      {isOver && <div className="overlay">Drop Here</div>}   {/* Show a drop indicator when an item is dragged over the canvas */}
    </div>
  );
};

export default Canvas;
