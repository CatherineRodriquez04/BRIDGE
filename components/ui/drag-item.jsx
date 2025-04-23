//DragItem.js

"use client";

import React from "react";
import { useDrag } from "react-dnd";
import Card from "/components/ui/card.jsx";

const DragItem = ({ cardId }) => {
    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: "item",
        item: { cardId }, // this is what DropZone will receive
        collect: (monitor) => ({
        isDragging: monitor.isDragging(),
        }),
    }), [cardId]);

    return (
        <div
        ref={dragRef}
        className={`cursor-grab z-20 ${isDragging ? "opacity-50" : "opacity-100"}`}
        >
        <Card cardId={cardId} />
        </div>
    );
};

export default DragItem;
