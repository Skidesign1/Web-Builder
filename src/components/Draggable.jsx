
import React from 'react';
import { useDraggable } from '@dnd-kit/core';

const Draggable = ({ id, name, icon }) => {
  // Hook from @dnd-kit to enable draggable functionality
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id });

  // Style object to handle transform and opacity during dragging
  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined, // Apply translation based on drag movement
    opacity: isDragging ? 0.5 : 1,     // Reduce opacity when the item is being dragged
  };

  return (
    // Draggable element with ref, styles, and event listeners applied
    <div
      ref={setNodeRef} // Ref to attach the draggable element to the DOM
      style={style} // Apply dynamic styles for transform and opacity
      {...listeners} // Event listeners for drag interactions
      {...attributes} // Accessibility attributes for draggable elements
      className="flex items-center p-2 m-2 bg-white shadow rounded drag" // Styling classes for layout and appearance
    >
      {icon} {/* Render the icon passed as a prop */}
      <span className="ml-3 ">{name}</span> {/* Display the name of the draggable item */}
    </div>
  );
};

export default Draggable;