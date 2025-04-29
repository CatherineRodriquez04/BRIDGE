

function ExchangeDisplay() {
    return (
        <>
      <div className="max-w-8xl mx-auto fixed top-[160px] left-48 right-0 z-10">
        {/* Grid using Tailwind CSS */}
        <div className="grid grid-cols-12 gap-2.5 auto-rows-[325px]">
          {/* First 3 columns span 4 grid columns each */}
          <div className="col-span-4 h-[300px] w-[300px]">
          <img src={'/assets/mini-poster.svg'} width={300} height={300} alt="Exchange Sign" className=" absolute -z-1">
                </img>
                <div className="bg-[#13122A] h-[53px] w-[160px]  border-4 border-[#86CEBC]  top-8 m-auto z-10 text-center relative flex justify-center items-center text-2xl ">
                    Pile of Gems
                </div>
                <p className="z-10 text-[20px] top-[40px] relative flex justify-center text-xl ">
                    100 Gems
                </p>
                <div className=" h-[130px] w-[200px] bg-[#181030] m-auto border-[5px] border-[#86CEBC] top-11 relative z-10 text-center flex justify-center items-center text-xl rounded-sm">
                    <img src="/assets/gem-pile.svg" height={130} width={200} alt="Gem-Pile-Image" className="z-10"></img>
                </div>
                <button className="z-10 h-[65px] w-[160px] bg-[#13122A] border-[7px] border-[#86CEBC] relative flex items-center justify-center top-[55px] m-auto rounded-lg text-3xl text-bold hover:bg-[#86CEBC] hover:text-[#13122A] active:border-8 active:ring-4 active: ring-[#9CF7E1]">
                    $1.99
                </button>
          </div>
          <div className="col-span-4 h-[300px] w-[300px]">
                <img src={'/assets/mini-poster.svg'} width={300} height={300} alt="Exchange Sign" className=" absolute -z-1">
                </img>
                <div className="bg-[#13122A] h-[53px] w-[160px]  border-4 border-[#86CEBC]  top-8 m-auto z-10 text-center relative flex justify-center items-center text-2xl ">
                    Sack of Gems
                </div>
                <p className="z-10 text-[20px] top-[40px] relative flex justify-center text-xl ">
                    250 Gems
                </p>
                <div className=" h-[130px] w-[200px] bg-[#181030] m-auto border-[5px] border-[#86CEBC] top-11 relative z-10 text-center flex justify-center items-center text-xl rounded-sm">
                    <img src="/assets/gem-sack.svg" height={130} width={200} alt="Gem-Sack-Image" className="z-10"></img>
                </div>
                <button className="z-10 h-[65px] w-[160px] bg-[#13122A] border-[7px] border-[#86CEBC] relative flex items-center justify-center top-[55px] m-auto rounded-lg text-3xl text-bold hover:bg-[#86CEBC] hover:text-[#13122A] active:border-8 active:ring-4 active: ring-[#9CF7E1]">
                    $4.99
                </button>
          </div>
          <div className="col-span-4 h-[320px] w-[300px]">
                <img src={'/assets/mini-poster.svg'} width={300} height={300} alt="Exchange Sign" className="absolute -z-1">
                </img>
                <div className="bg-[#13122A] h-[53px] w-[160px] m-auto border-4 border-[#86CEBC] top-8  z-10 text-center relative flex justify-center items-center text-2xl ">
                    Chest of Gems
                </div>
                <p className="z-10  text-[20px] top-[40px] relative flex justify-center text-xl ">
                    500 Gems
                </p>
                <div className=" h-[130px] w-[200px] bg-[#181030] m-auto border-[5px] border-[#86CEBC] top-11 relative z-10 text-center flex justify-center items-center text-2xl rounded-sm">
                    <img src="/assets/gem-chest.svg" height={130} width={200} alt="Gem-Chest-Image" className="z-10"></img>
                </div>
                <button className="z-10 h-[65px] w-[160px] bg-[#13122A] border-[7px] border-[#86CEBC] relative flex items-center justify-center top-[55px] m-auto rounded-lg text-3xl text-bold hover:bg-[#86CEBC] hover:text-[#13122A] active:border-8 active:ring-4 active: ring-[#9CF7E1]">
                    $9.99
                </button>
          </div>

          {/* Second-to-last column - starts at row 2, spans from column 3 to 7 / larger */}
          <div className="col-start-3 col-span-4 row-start-2 h-[350px] w-[350px]">
          <img src={'/assets/mini-poster.svg'} width={350} height={350} alt="Exchange Box" className="absolute -z-1"></img>
          <div className="relative top-[320px] left-[180px] flex justify-center items-center">
            <img src={'/assets/250-gem-bonus.svg'} width={250} height={250} alt="250-gem-bonus" className="absolute z-30 rotate-[10deg]"></img>
          </div>
          <div className="bg-[#13122A] h-[60px] w-[200px] m-auto border-4 border-[#86CEBC] top-8 z-10 text-center relative flex justify-center items-center text-2xl ">
                    Crate of Gems
                </div>
                <p className="z-10  text-[20px] top-[40px] relative flex justify-center text-2xl ">
                    1250 Gems
                </p>
                <div className=" h-[155px] w-[200px] bg-[#181030] m-auto border-[5px] border-[#86CEBC] top-11 relative z-10 text-center flex justify-center items-center text-2xl rounded-sm">
                    <img src="/assets/gem-crate.svg" height={155} width={200} alt="Gem-Crate-Image" className="z-10"></img>
                </div>
                <button className="z-10 h-[65px] w-[160px] bg-[#13122A] border-[7px] border-[#86CEBC] relative flex items-center justify-center top-[60px] m-auto rounded-lg text-3xl text-bold hover:bg-[#86CEBC] hover:text-[#13122A] active:border-8 active:ring-4 active: ring-[#9CF7E1]">
                    $24.99
                </button>
          </div>

          {/* Last column - starts at row 2, spans from column 7 to 11 */}
          <div className="col-start-7 col-span-4 row-start-2 h-[350px] w-[350px]">
            <img src={'/assets/mini-poster.svg'} width={350} height={350} alt="Exchange Bix" className="absolute -z-1"></img>
            <div className="relative top-[310px] left-[180px] flex justify-center items-center rotate-[10deg]">
                <img src={'/assets/500-gem-bonus.svg'} width={250} height={250} alt="500-gem-bonus" className="absolute z-30"></img>
            </div>
            <div className="bg-[#13122A] h-[60px] w-[200px] m-auto border-4 border-[#86CEBC] top-8 z-10 text-center relative flex justify-center items-center text-2xl ">
                    Stockpile of Gems
                </div>
                <p className="z-10  text-[20px] top-[40px] relative flex justify-center text-2xl ">
                    3000 Gems
                </p>
                <div className=" h-[155px] w-[200px] bg-[#181030] m-auto border-[5px] border-[#86CEBC] top-11 relative z-10 text-center flex justify-center items-center text-2xl rounded-sm">
                    <img src="/assets/gem-stockpile.svg" height={155} width={200} alt="Gem-Stockpile-Image" className="z-10"></img>
                </div>
                <button className="z-10 h-[65px] w-[160px] bg-[#13122A] border-[7px] border-[#86CEBC] relative flex items-center justify-center top-[60px] m-auto rounded-lg text-3xl text-bold hover:bg-[#86CEBC] hover:text-[#13122A] active:border-8 active:ring-4 active: ring-[#9CF7E1]">
                    $49.99
                </button>
          </div>
        </div>
      </div>
        </>
    );

}

export default ExchangeDisplay

{/* <div className="col-span-4 h-[280px] w-[280px]">
<img src={'/assets/mini-poster.svg'} width={300} height={300} alt="Exchange Sign" className="absolute -z-1">
</img>
<div className="bg-red-500 h-25 w-25 absolute z-10 rounded-lg">
    text
</div>
</div> */}

// Limited Poster Option
// <div className="fixed w-[28%] h-full -z-1 left-[6%] top-[15%]">
// <img src={'/assets/limited-paper-poster.svg'} width={8000} height={800} alt="Poster"></img>
// </div>

//paper (tan) variant
{/* <img src={'/assets/paper-mini-poster.svg'} width={300} height={300} alt="Exchange Sign" className=" absolute -z-1">
</img>
<div className="bg-[#C9B080] h-[53px] w-[160px] m-auto border-4 border-[#5E4112] text-black top-8 relative z-10 text-center flex justify-center items-center text-2xl ">
    Pile of Gems
</div>
<p className="z-10 text-[20px] top-[40px] relative flex justify-center text-[#5E4112] text-xl ">
    100 Gems
</p>
<div className=" h-[110px] w-[200px] m-auto border-4 border-[#5E4112] top-12 relative z-10 text-[#5E4112] text-center flex justify-center items-center text-xl">
    Image Location
</div>
<button className="z-10 h-[65px] w-[160px] bg-[#C9B080] border-[7px] border-[#5E4112] text-black relative flex items-center justify-center top-[70px] m-auto rounded-lg text-3xl text-bold hover:bg-[#5E4112] hover:text-[#C9B080] active:border-8 active:ring-4 active:ring-[#5E4112]">
    $1.99
</button> */}