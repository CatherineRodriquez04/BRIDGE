//Packs Page

"use client"


//import Poster from "/assets/poster.png";

import GameNavbar from "@/components/ui/game-navbar.jsx";
import CardSelectDisplay from "@/components/ui/card-select-display.jsx"
import CardSelectGrid from "@/components/ui/card-select-grid.jsx"

import Link from "next/link"
import { useState } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import DragItem from "/components/ui/drag-item.jsx"
import DropZone from "/components/ui/drop-zone.jsx"
import CollectionFilter from "/components/ui/collection-filter.jsx"

const ChooseDeck = () => {
  // Create a more structured state to track items by dropzone ID
  const [dropzones, setDropzones] = useState({
    dropzone1: { items: [], name: "Position 1", color: "blue" },
    dropzone2: { items: [], name: "Position 2", color: "green" },
    dropzone3: { items: [], name: "Position 3", color: "purple" },
  })

  // Generic handler for any dropzone
  const handleDrop = (dropzoneId, item) => {
    setDropzones((prev) => ({
      ...prev,
      [dropzoneId]: {
        ...prev[dropzoneId],
        items: [...prev[dropzoneId].items, item],
      },
    }))
  }

  // Generic handler to remove items from any dropzone
  const handleRemoveItem = (dropzoneId, index) => {
    setDropzones((prev) => {
      const newItems = [...prev[dropzoneId].items]
      newItems.splice(index, 1)
      return {
        ...prev,
        [dropzoneId]: {
          ...prev[dropzoneId],
          items: newItems,
        },
      }
    })
  }

  // Positions for the dropzones
  const positions = {
    dropzone1: "top-[220px] left-[70px]",
    dropzone2: "top-[220px] left-[360px]",
    dropzone3: "top-[220px] left-[650px]",
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="h-screen w-screen flex fade-in bg-gradient-to-b from-accent to-accent2 relative overscroll-y-none">
        <div className="">
          {/* Render all dropzones */}
          {Object.entries(dropzones).map(([id, { items, name, color }]) => (
            <div key={id} className={`absolute ${positions[id]}`}>
              <div className="relative flex top-20" >
                {/* <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 text-white font-medium">
                  
                </div> */}
                <DropZone onDrop={(item) => handleDrop(id, item)} />
                {items.map((item, index) => (
                  <div key={index} className="absolute">
                    <DragItem/>
                    <button
                      onClick={() => handleRemoveItem(id, index)}
                      className="bg-red-500 text-white px-2 py-1 rounded text-xs mt-1"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Add buttons below */}
          <div className="absolute top-[77%] left-[12%] w-[40%]">
            <Link href="/battle">
              <button
                type="button"
                className="absolute w-[30%]  left-[31%] flex items-center justify-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-4xl px-5 py-1.5 mt-2 border-4"
              >
                Ready
              </button>
            </Link>
          </div>
        </div>
        {/* Collection On Right */}
        <div className="absolute w-[48%] h-[1000px] left-[50%] top-[5%] relative border-4 border-[#86CEBC] bg-[#221B48] rounded-lg overflow-y-scroll z-20">
          <CollectionFilter />
          <div className="absolute top-24 grid gap-8 left-8 grid-cols-3 ">
            {/* Each div is individual card slot, 5 per row */}
            <DragItem />
            <DragItem />
            <DragItem />
            <DragItem />
            <DragItem />
            <DragItem />
            <DragItem />
            <DragItem />
            <DragItem />
            <DragItem />
            <DragItem />
            <DragItem />
            <DragItem />
            <DragItem />
            <DragItem />
            <DragItem />
            <DragItem />
            <DragItem />
          </div>
        </div>
      </div>
    </DndProvider>
  )
}

export default ChooseDeck