
import CollectionDisplay from "@/components/ui/collection-display.jsx"

function CardSelectDisplay() {
    return (
        <>
        {/* 2 parts */}
        {/* Show selected cards*/}

                {/* 1st pack */}
        {/* fixed h-[400px] w-[260px] bottom-80 right-[505px] */}
        <div className="flex space-x-8 top-[220px] absolute left-[160px]">
            <div className="">
                <div className="flex h-[400px] w-[260px] bg-[#0B0C2A] border-4 border-[#C4F7BC] rounded-lg p-4">
                    <p className="relative flex m-auto items-center text-bold text-9xl text-[#C4F7BC]">
                        +
                    </p>
                </div>
                {/* <but  ton className="justify-center place-items-center">Payment</button> */}
            </div>
            {/* Add buttons below */}
            {/* 2nd pack */}
            <div className="">
                <div className="flex h-[400px] w-[260px] bg-[#0B0C2A] border-4 border-[#C4F7BC] rounded-lg p-4">
                <p className="relative flex m-auto items-center text-bold text-9xl text-[#C4F7BC]">
                    +
                </p>
                </div>
                    </div>

            {/* 3rd pack */}
            <div className="">

                <div className="flex h-[400px] w-[260px] bg-[#0B0C2A] border-4 border-[#C4F7BC] rounded-lg p-4">
                    <p className="relative flex m-auto items-center text-bold text-9xl text-[#C4F7BC]">
                        +
                    </p>
                </div>
            </div>

            <button type="button" className=" absolute w-[25%] top-[115%] left-[33%] flex items-center justify-center bg-[#0B0C2A] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-4xl px-5 py-1.5 mt-2  border-4">Ready</button>
            
        </div>
        <div className="absolute  w-[1000px] left-[900px] ml-12">
        <CollectionDisplay/>
        </div>
        {/*  */}
        </>
    );

}

export default CardSelectDisplay