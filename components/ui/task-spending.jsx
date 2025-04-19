
function TaskSpending() {
    return (
        <>
            <div className="absolute w-full h-full bg-[#0B0C2A]">
                <div className="relative flex flex-col items-center top-[9%] h-[1%] text-4xl">
                    Spending
                </div>
                {/* Scores(progressbars) */}
                <div className="relative flex flex-col items-center top-[30%] h-[30%] w-full text-2xl bg-purple-800">
                    By Currency
                </div>
                {/* Overall Score: */}
                <div className="relative flex flex-col items-center top-[30%] h-[20%] w-full text-4xl bg-purple-300">
                    Overall Score:
                    <div className="pt-8 text-2xl">
                        84% Survivability
                    </div>
                </div>

            </div>
        </>
    );

}

export default TaskSpending