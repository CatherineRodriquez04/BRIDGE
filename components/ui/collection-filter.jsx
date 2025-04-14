
function CollectionFilter() {
    return (
        <>
        <select className=" h-[50px] w-[150px] bg-[#0B0C2A] border-2 border-[#86CEBC] absolute top-4 right-4 flex items-center gap-2">
            <option className="hidden">Sort By</option>
            <option className="h-[50px] w-[150px] bg-[#0B0C2A] border-2 border-[#86CEBC] absolute flex items-center gap-2">Rarity</option>
            <option className="">Rank</option>
            <option className="">Class</option>
            <option className="">Type</option>

        </select>
        </>
    );

}

export default CollectionFilter