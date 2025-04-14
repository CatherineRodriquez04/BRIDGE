import Card from "@/components/ui/card.jsx";

function ShopDisplay() {
  return (
      <>
      
          <div className="max-w-[100%] mx-auto fixed top-[115px] left-48 right-0 z-10">
            {/* Grid using Tailwind CSS */}
            <div className="grid grid-cols-12 gap-3 auto-rows-[325px]">

{/* Updated Version */}
              {/* 1st column /card (top left) */}
              <div className="relative col-start-3 col-span-4  h-[300px] w-[300px]">
                <div className="absolute h-full w-full flex  justify-center mx-auto z-10">
                  <Card/>
                </div>
                {/* Shelf */}
                <div className="relative h-[40px] w-[100] top-[330px] rounded-md bg-[#A67C4E] m-auto z-40 "></div>
                <button type="button" className="absolute w-[45%] flex items-center justify-center left-[80px] top-[390px] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-xl px-5 py-1.5 mt-2 mx-auto border-4">300 coins</button>
              </div>

              {/* 2nd column/ card(top right) */}
              <div className="relative col-start-7 col-span-4  h-[300px] w-[300px]">
                <div className="absolute h-full w-full flex justify-center mx-auto z-10">
                    <Card/>
                </div>
                <div className="relative h-[40px] w-[100] top-[330px] rounded-md bg-[#A67C4E] m-auto z-40 "></div>
                <button type="button" className="absolute w-[45%] flex items-center justify-center left-[80px] top-[390px] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-xl px-5 py-1.5 mt-2 mx-auto border-4">300 coins</button>
              </div>

              {/* Bottom row */}

              {/* new size causing errors here / need to adapt */}
              <div className="relative col-span-4 h-[300px] w-[300px] row-start-2">
              <div className="absolute h-full w-full flex justify-center mx-auto z-10">
                    <Card/>
                </div>
                <div className="relative h-[40px] w-[100] top-[330px] rounded-md bg-[#A67C4E] m-auto z-40 "></div>
                <button type="button" className="absolute w-[45%] flex items-center justify-center left-[80px] top-[390px] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-xl px-5 py-1.5 mt-2 mx-auto border-4">300 coins</button>
              </div>
              
              <div className="relative col-span-4 h-[300px] w-[300px] row-start-2">
                <div className="absolute h-full w-full flex justify-center mx-auto z-10">
                    <Card/>
                </div>
                <div className="relative h-[40px] w-[100] top-[330px] rounded-md bg-[#A67C4E] m-auto z-40 "></div>
                <button type="button" className="absolute w-[45%] flex items-center justify-center left-[80px] top-[390px] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-xl px-5 py-1.5 mt-2 mx-auto border-4">300 coins</button>
                </div>

              <div className="relative col-span-4 h-[300px] w-[300px] row-start-2">
              <div className="absolute h-full w-full flex justify-center mx-auto z-10">
                    <Card/>
                </div>
                <div className="relative h-[40px] w-[100] top-[330px] rounded-md bg-[#A67C4E] m-auto z-40 "></div>
                <button type="button" className="absolute w-[45%] flex items-center justify-center left-[80px] top-[390px] text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-xl px-5 py-1.5 mt-2 mx-auto border-4">300 coins</button>
              </div>

            </div>
          </div>
      </>
  );

}

export default ShopDisplay

              // {/* Second-to-last column - starts at row 2, spans from column 3 to 7 / larger */}
              // <div className="col-start-3 col-span-4 row-start-2 h-[300px] w-[300px]">
              //   <div className="flex h-[400px] w-[260px] bg-[#0B0C2A] border-4 border-[#C4F7BC] rounded-lg p-4">
              //         Gold Pack
              //   </div>
              // </div>

              // {/* Last column - starts at row 2, spans from column 7 to 11 */}
              // <div className="col-start-7 col-span-4 row-start-2 h-[300px] w-[300px]">
              //   <div className="flex h-[400px] w-[260px] bg-[#0B0C2A] border-4 border-[#C4F7BC] rounded-lg p-4">
              //          Gold Pack
              //   </div>
              // </div>

              {/* <div className=" mx-auto flex justify-center h-[110%] w-[80%] overflow-hidden rounded-lg p-4 -z-1">
                  <Card/>
                </div> */}