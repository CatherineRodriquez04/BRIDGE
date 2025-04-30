import { useMemo, useState } from "react";
import { usePlayer } from "@/components/ui/PlayerContent";

// firebase
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

function ExchangeDisplay() {

    const { coins, gems, setCoins, setGems, cash, setCash, userId } = usePlayer();
    const [showNotEnoughModal, setShowNotEnoughModal] = useState(false);
    const [showPurchasedModal, setPurchasedModal] = useState(false);

//maybe add in exchangeId for special animation?
    const handlePurchase = async (cost, currency) => {
        if (userId === null) return;
     
        if (currency === "cash") {
          if (cash >= cost) {
            const newCash = cash - cost;
            setCash(newCash);
            await updateDoc(doc(db, "players", userId), { cash: newCash });
            // Do animation / function
            //give gems
            setPurchasedModal(true); //not enough money modal
          } else {
            setShowNotEnoughModal(true); //not enough money modal
          }
        } else if (currency === "gems") {
          if (gems >= cost) {
            const newGems = gems - cost;
            setGems(newGems);
            await updateDoc(doc(db, "players", userId), { gems: newGems });
            //facilitate currendy exchange
            setPurchasedModal(true); //not enough money modal
            //give coins

          } else {
            setShowNotEnoughModal(true); //not enough for conversion
          }
        }
      };

// either do animation or show purchase popup
    //   const openPackAnimation = (packId) => {
    //     setAnimatingPack(packId);
    //     setTimeout(() => setAnimatingPack(null), 800);
    //     setTimeout(() => setIsCarouselOpen(true), 900);
    //   };
     

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
                <button 
                onClick={() => handlePurchase(2, "cash")}
                className="z-10 h-[65px] w-[160px] bg-[#13122A] border-[7px] border-[#86CEBC] relative flex items-center justify-center top-[55px] m-auto rounded-lg text-3xl text-bold hover:bg-[#86CEBC] hover:text-[#13122A] active:border-8 active:ring-4 active: ring-[#9CF7E1]">
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
                <button 
                onClick={() => handlePurchase(5, "cash")}
                className="z-10 h-[65px] w-[160px] bg-[#13122A] border-[7px] border-[#86CEBC] relative flex items-center justify-center top-[55px] m-auto rounded-lg text-3xl text-bold hover:bg-[#86CEBC] hover:text-[#13122A] active:border-8 active:ring-4 active: ring-[#9CF7E1]">
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
                <button 
                onClick={() => handlePurchase(10, "cash")}
                className="z-10 h-[65px] w-[160px] bg-[#13122A] border-[7px] border-[#86CEBC] relative flex items-center justify-center top-[55px] m-auto rounded-lg text-3xl text-bold hover:bg-[#86CEBC] hover:text-[#13122A] active:border-8 active:ring-4 active: ring-[#9CF7E1]">
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
                <button 
                onClick={() => handlePurchase(25, "cash")}
                className="z-10 h-[65px] w-[160px] bg-[#13122A] border-[7px] border-[#86CEBC] relative flex items-center justify-center top-[60px] m-auto rounded-lg text-3xl text-bold hover:bg-[#86CEBC] hover:text-[#13122A] active:border-8 active:ring-4 active: ring-[#9CF7E1]">
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
                <button 
                onClick={() => handlePurchase(50, "cash")}
                className="z-10 h-[65px] w-[160px] bg-[#13122A] border-[7px] border-[#86CEBC] relative flex items-center justify-center top-[60px] m-auto rounded-lg text-3xl text-bold hover:bg-[#86CEBC] hover:text-[#13122A] active:border-8 active:ring-4 active: ring-[#9CF7E1]">
                    $49.99
                </button>
            </div>
    </div>
                {/* Convert button (transfer ## gold -> gems (CHange amount each day (advertise)) */}
              {/* Convert Currency Button */}
              <div className="relative top-[2rem] left-[82%]">
                    <button 
                    onClick={() => handlePurchase(100, "gems")}
                    className="absolute h-[60px] w-[160px] flex items-center justify-center  bg-[#A67C4E] border-[#5E4112] font-medium rounded-lg text-3xl px-5 py-4 border-[5px] text-black transition active:scale-95 z-50">
                        Convert
                    </button>
              </div>
                
                {/* Not Enough Money Modal */}
                {showNotEnoughModal && (
                    <div className="fixed inset-0 bg-opacity-70 flex justify-center items-center z-50">
                        <div className="bg-[#0B0C2A] border-4 border-[#C4F7BC] p-8 rounded-lg relative w-[40%] h-[30%] flex items-center justify-center">
                            {/* Close button */}
                        <button className="absolute top-1 right-6
                         text-white text-7xl hover:text-red-500" onClick={() => setShowNotEnoughModal(false)}>
                            ×
                        </button>
                        <p className=" text-7xl text-white text-center ">Insufficient Funds!</p>
                        {/* Designated Large close button */}
                            <button 
                            onClick={() => setShowNotEnoughModal(false)}
                            className="z-10 h-[25%] w-[35%] bg-[#13122A] border-[7px] border-[#86CEBC] absolute top-[70%] flex items-center justify-center top-[60px] m-auto rounded-lg text-3xl text-bold hover:bg-[#86CEBC] hover:text-[#13122A] active:border-8 active:ring-4 active: ring-[#9CF7E1]">
                                Close
                            </button>
                        </div>
                    </div>
                    )}

                {/* Purchased (succcessful) Modal */}
                {showPurchasedModal && (
                    <div className="fixed inset-0 bg-opacity-70 flex justify-center items-center z-50">
                    <div className="bg-[#0B0C2A] border-4 border-[#C4F7BC] p-8 rounded-lg relative w-[40%] h-[30%] flex items-center justify-center">
                        {/* Close button */}
                    <button className="absolute top-1 right-6
                     text-white text-7xl hover:text-red-500" onClick={() => setPurchasedModal(false)}>
                        ×
                    </button>
                    <p className=" text-7xl text-white text-center ">Purchase Successful!</p>
                    {/* Designated Large close button */}
                    <button 
                    onClick={() => setPurchasedModal(false)}
                    className="z-10 h-[25%] w-[35%] bg-[#13122A] border-[7px] border-[#86CEBC] absolute top-[70%] flex items-center justify-center top-[60px] m-auto rounded-lg text-3xl text-bold hover:bg-[#86CEBC] hover:text-[#13122A] active:border-8 active:ring-4 active: ring-[#9CF7E1]">
                    Close
                    </button>
                    </div>
                </div>
                    )}
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