// import React from 'react';
// import { useDrag } from 'react-dnd';

// const Draggable = ({ name, icon }) => {
//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: 'COMPONENT',
//     item: { name },
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   }));

//   return (
//     <div ref={drag} className={`flex items-center p-2 m-2 bg-white shadow rounded ${isDragging ? 'opacity-50' : 'opacity-100'}`}>
//       {icon}
//       <span className="ml-3">{name}</span>
//     </div>
//   );
// };

// export default Draggable;


import React from 'react';
import { useDraggable } from '@dnd-kit/core';

const Draggable = ({ id, name, icon }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id });
  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="flex items-center p-2 m-2 bg-white shadow rounded">
      {icon}
      <span className="ml-3">{name}</span>
    </div>
  );
};

export default Draggable;
