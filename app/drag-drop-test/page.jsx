'use client';

import Link from "next/link";
import React, { useClient, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragItem from '/components/ui/drag-item.jsx';
import DropZone from '/components/ui/drop-zone.jsx';

import Card from '/components/ui/card.jsx'

// import Card from "/components/ui/card.jsx"
import CollectionFilter from "/components/ui/collection-filter.jsx"

const DragDropTest = () => {
    const [droppedItems, setDroppedItems] = useState([]);

    const handleDrop = (item) => {
        setDroppedItems((prevItems) => [...prevItems, item]);
    };

    const handleRemoveItem = (index) => {
        const updatedItems = [...droppedItems];
        updatedItems.splice(index, 1);
        setDroppedItems(updatedItems);
    };

    return (
        <DndProvider backend={HTML5Backend}>
      <div className="h-screen w-screen flex fade-in bg-gradient-to-b from-accent to-accent2 relative overscroll-y-none">{/*  (for some reason, breaks styling / placement of cards*/}
      {/* <div className="flex space-x-8 top-[220px] absolute left-[70px]"> */}
            {/* 1st dropzone */}
            <div className="-z-1">
                <div className="flex space-x-8 top-[220px] absolute left-[70px]">
                    <DropZone onDrop={handleDrop} />
                        {droppedItems.map((item, index) => (
                            <div key={index} className="">
                                <DragItem/>
                                    <button onClick={
                                    () => handleRemoveItem(index)}>
                                        Remove
                                    </button>
                            </div>
                        ))}

                    <DropZone onDrop={handleDrop} />

                    <DropZone onDrop={handleDrop} />

                </div>
            </div>

            {/* Add buttons below */}
            <Link href="/battle"> 
                <button type="button" className=" absolute w-[25%] top-[115%] left-[33%] flex items-center justify-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-4xl px-5 py-1.5 mt-2  border-4">Ready</button>
            </Link>            
        {/* </div> */}
        <div className="absolute w-[48%] h-[1000px] left-[50%] top-[5%] relative border-4 border-[#86CEBC] bg-[#221B48] rounded-lg overflow-y-scroll z-20">
        <CollectionFilter/>
        <div className="absolute top-24 grid gap-8 left-8 grid-cols-3 ">
            {/* Each div is individual card slot, 5 per row */}
            <DragItem/>
            <DragItem/>
            <DragItem/>
            <DragItem/>
            <DragItem/>
            <DragItem/>
            <DragItem/>
            <DragItem/>
            <DragItem/>
            <DragItem/>
            <DragItem/>
            <DragItem/>
            <DragItem/>
            <DragItem/>
            <DragItem/>
            <DragItem/>
            <DragItem/>
            <DragItem/>
          </div>
        </div>
                
                {/* 
                    <h1>Drag and Drop Example</h1>
                    <div className="flex justify-around">
                        <div className="border border-gray-300 p-2.5 rounded-[5px]">
                            <h2>Drag Items</h2>
                            <DragItem name="Item 1" />
                            
                            <DragItem name="Item 2" />
                            <DragItem name="Item 3" />
                        </div>
                        <div className="border border-gray-300 p-2.5 rounded-[5px]"> 
                            <h2>Drop Zone</h2>
                            <DropZone onDrop={handleDrop} />
                            {droppedItems.map((item, index) => (
                                <div key={index} className="border border-gray-300 p-2.5 rounded-[5px] mt-2.5 bg-blue-200 flex justify-between items-center">

                                    <p>{item.name}</p>
                                    <button onClick={
                                        () => handleRemoveItem(index)}>
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                 */}
            </div> 
        </DndProvider>
    );
};

export default DragDropTest;