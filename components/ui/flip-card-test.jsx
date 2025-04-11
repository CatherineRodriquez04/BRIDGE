
function CardFlipTest() {
    return (
        <>
                <div className="flex h-[360px] w-[260px] bg-[#72E8C9] rounded-3xl">

                    {/* Environment Background (element/ environment) (middle layer) */}
                    <div className="absolute mx-0 top-0 left-0 z-0">
                        <img src={'/assets/card-ground-bg.svg'}  alt="Card-Environment-Background"></img>
                    </div>

                    {/* Front of card */}

                    {/* Character image */}
                    <div className="absolute mx-auto top-24 left-[60px] z-10">
                        <img src={'/assets/animal-test.svg'} width={150} height={400} alt="Card-Animal-Test"></img>  
                    </div>

                    {/* Card border front (top layer)*/}
                    <div className=" absolute mx-0 top-0 left-0 z-20">
                        <img src={'/assets/card-border-front.svg'}  alt="Card-Front-Border"></img> 
                    </div>
                    

                    {/*Front of card text handling  */}

                    {/* Rank / Rating (Text for rn) (Top Right) */}
                    <div className="absolute mx-auto top-[35px] left-[12px] z-30 text-[#72E8C9] text-4xl font-bold">
                        SSR
                    </div>

                    <div className="absolute mx-auto top-[2px] left-[100px] z-30 text-white text-3xl ">
                        Anteater
                    </div>

                    {/* Type (Image) Bottom Left */}
                    <div className="absolute  mx-auto top-[303px] left-[30px] z-30 text-white text-2xl font-bold">
                        <img src="/assets/attack-icon.svg" alt="Card-Front-Type"></img>
                    </div>

                    {/* Health / HP (Text rn) Bottom Right */}
                    <div className="absolute mx-auto top-[300px] left-[205px] z-30 text-red-600 text-4xl font-bold">
                        HP
                    </div>


                </div>



        </>
    );

}

export default CardFlipTest

