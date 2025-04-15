
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
                 <div className="relative flex h-[360px] w-[260px]  rounded-3xl flip-card"> {/* flip card */}
                {/* Inner card?  */}
                    <div className="relative w-full h-full transition-transform duration-[0.8s] transform-3d flip-card-inner">


                        {/* Front of card */}
                        <div className="flip-card-front">
                            
                             {/* Environment Background (element/ environment) (middle layer) */}
                            <div className="absolute mx-0 top-0 left-0 z-0">
                                <img src={'/assets/card-ground-bg.svg'}  alt="Card-Environment-Background"></img>
                            </div>
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
                                Capybara
                            </div>

                            {/* Type (Image) Bottom Left */}
                            <div className="absolute top-[303px] left-[30px] z-30 text-white text-2xl font-bold">
                                <img src="/assets/damage-icon.svg" alt="Card-Front-Type"></img>
                            </div>

                            {/* Health / HP (Text rn) Bottom Right */}
                            <div className="absolute  top-[300px] left-[205px] z-30 text-red-600 text-4xl font-bold">
                                HP
                            </div>
                            {/* End Front of Card */}
                        </div>
                        {/* Card Back */}
                        <div className="flip-card-back">
                            {/* Card Back Background(mini/ moved) */}
                            <div className="absolute mx-0 top-0 left-24 z-0">
                                <img src={'/assets/card-ground-bg.svg'}  alt="Card-Environment-Background"></img>
                            </div>
                             {/* Character image (mini) */}
                             <div className="absolute mx-auto top-[75px] left-[130px] z-10">
                                <img src={'/assets/animal-test.svg'} width={100} height={400} alt="Card-Back-Animal-Test"></img>  
                            </div>

                            {/* Card border front (top layer)*/}
                            <div className=" absolute mx-0 top-0 left-0 z-20">
                                <img src={'/assets/card-border-back.svg'}  alt="Card-Back-Border"></img> 
                            </div>

                            {/* Deadman's logo */}
                             <img src="/assets/dead-man-logo-2.svg" width={170} height={200} alt="Card-Deadman-Logo" className="absolute flex items-center left-[45px] top-0 z-30"></img>

                        {/* Card Back text */}
                            {/* Character Name */}
                            <div className="absolute mx-auto top-[55px] left-[130px] z-30 text-white text-2xl text-bold">
                                Anteater
                            </div>
                            {/* Card Back Rank  (Make custom fonts for each rank level) */}
                            <div className="absolute mx-auto top-[154px] left-[126px] z-30 text-2xl text-bold text-[#C4F7BC]">
                                SSR
                            </div>
                            {/* Stats Header (left 30px is centered) */}
                            <div className="absolute mx-auto top-[60px] left-[10px] z-30 text-white text-3xl text-bold underline underline-offset-2">
                                Stats
                            </div>
                            {/* Health Icon*/}
                                <img src="/assets/health-icon.svg" width={30} height={30} alt="Card-Health-Icon" className="absolute mx-auto top-[102px] left-[10px] z-30"></img>
                                {/* Health */}
                                <div className="absolute mx-auto top-[96px] left-[58px] z-30 text-white text-3xl text-bold ">
                                    4
                                </div>

                              {/* Damage Icon  */}
                              <img src="/assets/damage-icon.svg" width={25} height={25} alt="Card-Damage-Icon" className="absolute mx-auto top-[132px] left-[12px] z-30"></img>

                                {/*Damage*/}
                                <div className="absolute mx-auto top-[132px] left-[58px] z-30 text-white text-3xl text-bold ">
                                    5
                                </div>

                            {/* Ability Header */}
\                           <div className="absolute mx-auto top-[165px] left-[10px] z-30 text-white text-2xl text-bold underline underline-offset-4">
                                Ult. Ability
                            </div>
                            {/* Ability Icon  (can be one of 3)*/}
                            <img src="/assets/attack-ability-icon.svg" width={35} height={35} alt="Card-Abilty-Icon" className="absolute mx-auto top-[202px] left-[10px] z-30"></img>

                            {/* Ability Number/Stat */}
                            <div className="absolute mx-auto top-[198px] left-[58px] z-30  text-white text-3xl text-bold ">
                                5
                            </div>

                                {/* Ability Explanation Paragraph  */}
                                <p className="absolute top-[235px] left-[10px] z-30 text-white text-lg ">
                                    The attack class specializes in dealing damage to enemies.
                                </p>                           
                        </div>
                    </div>
                </div>
        </>
    );

}

export default Card

