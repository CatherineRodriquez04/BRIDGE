
function TaskResults() {
    return (
        <>
            <div className="absolute w-full h-full bg-[#0B0C2A]">
                {/* Left Page */}
                <div className="absolute h-full w-[50%] left-0 bg-[#0B0C2A] rounded-l-lg overflow-hidden">
                    <div className="relative flex flex-col items-center top-[9%] h-[1%] text-4xl">
                        Results
                    </div>
                    {/* Scores(progressbars) */}
                    <div className="relative flex flex-col items-center top-[30%] h-[30%] w-full text-2xl bg-purple-800">
                        Progress
                    </div>
                    {/* Overall Score: */}
                    <div className="relative flex flex-col items-center top-[30%] h-[20%] w-full text-4xl bg-purple-300">
                        Overall Score:
                        <div className="pt-8 text-2xl">
                            96% Survivability
                        </div>
                    </div>
                </div>
                {/* Right Page */}
                <div className="absolute h-full w-[50%] right-0 bg-[#1E1F33] rounded-r-lg flex flex-col justify-center">
                    <div className="relative flex flex-col items-center top-[9%] h-[1%] text-4xl">
                        Right
                    </div>

                </div>
            </div>
        </>
    );

}

export default TaskResults