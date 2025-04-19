
function CollectionFilter() {
    return (
        <>
        {/* <select className=" h-[50px] w-[150px] bg-[#0B0C2A] border-2 border-[#86CEBC] absolute top-4 right-4 flex items-center gap-2">
            <option className="hidden">Sort By</option>
            <option className="h-[50px] w-[150px] bg-[#0B0C2A] border-2 border-[#86CEBC] absolute flex items-center gap-2">Rarity</option>
            <option className="">Rank</option>
            <option className="">Class</option>
            <option className="">Type</option>

        </select> */}

            <div className="dropdown dropdown-bottom dropdown-center right-4">
                <div tabIndex={0} role="button" className="btn h-full w-full bg-[#0B0C2A] text-xl bg-[#0B0C2A] border-2 border-[#86CEBC]">Sort By:</div>
                    <ul tabIndex={0} className="dropdown-content menu w-[150px] bg-[#C4F7BC] border-2 border-[#86CEBC] absolute flex items-center gap-2 text-[#0B0C2A] text-xl">
                        <li><a>Rank</a></li>
                        <li><a>Class</a></li>
                        <li><a>Type</a></li>

                    </ul>
            </div>
        </>
    );

}

export default CollectionFilter