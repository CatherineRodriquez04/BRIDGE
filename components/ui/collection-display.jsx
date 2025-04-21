
import PackSlot from "@/components/ui/pack-slot.jsx"
import CollectionFilter from "@/components/ui/collection-filter.jsx"

import Card from "@/components/ui/card.jsx";

function CollectionDisplay() {
  return (
      <>
      {/* Collection Background Box */}
        <div className="relative flex h-[1000px] w-[80%] left-[10%] top-[280px] border-4 border-[#86CEBC] bg-[#221B48] rounded-lg overflow-y-scroll z-20 ">
          {/* Collection Filter */}
          <CollectionFilter/>
      
            {/* Grid */}
           <div className="absolute top-24 grid gap-8 left-8 grid-cols-5">
            {/* Each div is individual card slot, 5 per row */}
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
          </div>
      </>
  );

}

export default CollectionDisplay

//Pack
{/* <div className="flex h-[400px] w-[260px] bg-[#0B0C2A] border-4 border-[#C4F7BC] rounded-lg p-4">
  Gold Pack
</div> */}