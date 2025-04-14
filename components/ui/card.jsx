
// Goal:
//Replace all set values (images) with props values to be filled with whatever animal is needed at the time (from database) basically, make this dynamic and reusable for all characters
//Idea:
//Set char id
//get char id (to find in database
//Char. images, name, stats, etc
//populate card with this data

function Card() {
    return (
        <>
            {/* Card Front (Maybe whole component rn) */}
                <div className="relative flex h-[360px] w-[260px] bg-[#72E8C9] rounded-3xl overflow:hidden ">

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

                {/* Card Back (maybe need to fit within larger component) */}
                    <div className="">
                        Card Back
                    </div>

                </div>

        </>
    );

}

export default Card

