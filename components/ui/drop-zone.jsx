// DropZone.js

import React from 'react';
import { useDrop } from 'react-dnd';

const DropZone = ({ onDrop }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'item',
        drop: (item) => onDrop(item),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    return (
        <>
            {/* <div ref={drop} className="-z-1"> */}
                <div ref={drop} className=" flex h-[360px] w-[260px] bg-[#0B0C2A] border-4 border-[#C4F7BC] rounded-3xl p-4 ${isOver ? 'bg-green-500' : bg-red-100'}`}">
                    <p className="flex m-auto items-center text-bold text-9xl text-[#C4F7BC]">
                        +
                    </p>
                </div>
            {/* </div>             */}
            {/* <div ref={drop} className={`border border-dashed p-2.5 ${isOver ? 'border-green-500' : 'border-black'}`}>
                Drop here
            </div> */}
        </>
    );
};

export default DropZone;