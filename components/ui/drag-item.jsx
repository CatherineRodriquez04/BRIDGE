//DragItem.js

import React from 'react';
import { useDrag } from 'react-dnd';
import Card from "/components/ui/card.jsx"

const DragItem = ({ name }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'item',
        item: { name },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <>
        <div ref={drag} className={`cursor-grab z-20 ${isDragging ? 'opacity-100' : 'opacity-100'}`}>
         <Card/>
        </div>
         {/* <div ref={drag} className={`h-64 w-32 cursor-move border border-gray-300 p-2.5 rounded-[5px] m-1.5 bg-blue-200 ${isDragging ? 'opacity-50' : 'opacity-100'}`}>
             {name}
         </div> */}
        </>
    );
};

export default DragItem;