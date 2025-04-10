

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
        </div>
        {/*  */}
        </>
    );

}

export default CardSelectDisplay