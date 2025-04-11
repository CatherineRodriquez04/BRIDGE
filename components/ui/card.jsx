

function Card() {
    return (
        <>
                <div className="flex h-[360px] w-[260px] bg-[#72E8C9] rounded-3xl ">
                    {/* Character Image (middle layer) */}
                    <div className="absolute mx-0 top-0 left-0 h-full w-full">
                        <img src={'/assets/card-air-bg.svg'}  alt="Card-Front-Border"></img> Can Swap with sign.svg for bright version 
                    </div>
                {/* Front of card */}

                {/* <img src={'/assets/wood-sign.svg'} width={260} height={400} alt="Card-Front-Border" className="z-20 relative"></img> Can Swap with sign.svg for bright version  */}

                {/* Card border front (top layer)*/}
                    <div className=" z-30 absolute mx-0 top-0 left-0 h-full w-full">
                        <img src={'/assets/card-border-front.svg'}  alt="Card-Front-Border"></img> {/*Can Swap with sign.svg for bright version  */}
                    </div>
                </div>
        </>
    );

}

export default Card

