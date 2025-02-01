import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Resizable } from 'react-resizable';
import { MagnifyingGlassIcon, HomeIcon, Squares2X2Icon, Cog6ToothIcon, QuestionMarkCircleIcon, WrenchScrewdriverIcon, ChartBarIcon, DocumentTextIcon } from '@heroicons/react/24/solid';
import 'react-resizable/css/styles.css';

// Draggable component to make elements draggable
const Draggable = ({ id, name, icon }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined, // Apply transform based on drag movement
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="cursor-move flex items-center">
      {icon}
      <span className="ml-2">{name}</span>
    </div>
  );
};

// Sidebar component with resizable functionality
const Sidebar = () => {
  // Components list
  const coreItems = [
    { id: 'navbar', text: 'Navbar', icon: <HomeIcon className="w-4 h-4" /> },
    { id: 'header', text: 'Header', icon: <ChartBarIcon className="w-4 h-4" /> },
    { id: 'sidebar', text: 'Side Bar', icon: <QuestionMarkCircleIcon className="w-4 h-4" /> },
    { id: 'mainbody', text: 'Main body', icon: <Cog6ToothIcon className="w-4 h-4" /> },
    { id: 'footer', text: 'Footer', icon: <DocumentTextIcon className="w-4 h-4" /> },
  ];

  // Example components list
  const presentsItems = [
    { id: 'buttons', text: 'Buttons', icon: <WrenchScrewdriverIcon className="w-4 h-4" /> },
    { id: 'labels', text: 'Labels', icon: <Squares2X2Icon className="w-4 h-4" /> },
    { id: 'icon', text: 'Icon', icon: <Cog6ToothIcon className="w-4 h-4" /> },
  ];

  // State to manage sidebar width
  const [width, setWidth] = React.useState(240);

  // Handler for resizing the sidebar
  const handleResize = (e, { size }) => {
    setWidth(size.width);
  };

  return (
    <Resizable
      width={width}
      height={0} // Height is not resizable
      onResize={handleResize}
      minConstraints={[200, 0]} // Minimum width constraint
      maxConstraints={[400, 0]} // Maximum width constraint
    >
      <div style={{ width }} className="flex flex-col bg-gray-100 text-gray-800 h-full overflow-auto">
        {/* Sidebar header */}
        <div className="flex-shrink-0 text-center mb-4 pt-5">
          <h6 className="text-gray-800 font-bold text-base">dnd kit</h6>
        </div>

        {/* Search bar */}
        <div className="flex-shrink-0 flex items-center bg-white rounded-lg shadow-sm mx-4 mb-4 px-2 py-1" style={{ width: 'calc(100% - 2rem)' }}>
          <MagnifyingGlassIcon className="text-gray-600 w-4 h-4 mr-2" />
          <input
            type="text"
            placeholder="Find component"
            className="text-sm flex-grow text-gray-800"
            style={{ width: '100%' }}
          />
        </div>

        {/* Scrollable section for components */}
        <div className="flex-grow overflow-auto">
          {/* components section */}
          <div>
            <h6 className="font-bold text-sm px-4 py-1">Components</h6>
            <ul>
              {coreItems.map((item) => (
                <li key={item.id} className="flex items-center hover:bg-gray-200 px-4 py-1 text-sm">
                  <Draggable id={item.id} name={item.text} icon={item.icon} />
                </li>
              ))}
            </ul>
          </div>

          {/* Example components section */}
          <div>
            <h6 className="font-bold text-sm px-4 py-1">Examples</h6>
            <ul>
              {presentsItems.map((item) => (
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