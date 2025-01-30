import React from 'react';
import { useDrag } from 'react-dnd';

const Draggable = ({ name, icon }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'COMPONENT',
    item: { name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} className={`flex items-center p-2 m-2 bg-white shadow rounded ${isDragging ? 'opacity-50' : 'opacity-100'}`}>
      {icon}
      <span className="ml-3">{name}</span>
    </div>
  );
};

export default Draggable;
