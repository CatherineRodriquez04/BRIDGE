import Card from "@/components/ui/card.jsx";

function ShopDisplay() {
  return (
      <>
          <div className="max-w-8xl mx-auto fixed top-[140px] left-48 right-0 z-10">
            {/* Grid using Tailwind CSS */}
            <div className="grid grid-cols-12 gap-2.5 auto-rows-[325px]">

              {/* Second-to-last column - starts at row 2, spans from column 3 to 7 / larger */}
              <div className="col-start-3 col-span-4  h-[300px] w-[300px]">
                {/* <div className="flex h-[110%] w-[80%] bg-[#0B0C2A] border-4 border-[#C4F7BC] rounded-lg p-4 m-auto -z-1">
                      Gold Pack
                </div> */}
                <div className=" mx-auto flex justify-center h-[110%] w-[80%] overflow-hidden rounded-lg p-4 -z-1">
                  <Card/>
                </div>

                <div className="relative h-[30px] w-[95%] bottom-5 rounded-md bg-[#A67C4E] m-auto z-40">
                </div>
                <button type="button" className="w-[45%] flex items-center justify-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-xl px-5 py-1.5 mt-2 mx-auto border-4">300 coins</button>
              </div>

              {/* Last column - starts at row 2, spans from column 7 to 11 */}
              <div className="col-start-7 col-span-4  h-[300px] w-[300px]">
              <div className="relative mx-auto flex justify-center h-[110%] w-[80%] overflow-hidden rounded-lg p-4  -z-1">
                  <Card/>
                </div>

                <div className="relative h-[30px] w-[95%] bottom-5 rounded-md bg-[#A67C4E] m-auto z-40">
                </div>
                <button type="button" className="w-[45%] flex items-center justify-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-xl px-5 py-1.5 mt-2 mx-auto border-4">300 coins</button>
              </div>

              {/* First 3 columns span 4 grid columns each */}
              <div className="col-span-4 h-[300px] w-[300px] row-start-2">
              <div className="relative mx-auto flex justify-center h-[110%] w-[80%] overflow-hidden rounded-lg p-4 m-auto -z-1">
                  <Card/>
                </div>
                <div className="relative h-[30px] w-[95%] bottom-5 rounded-md bg-[#A67C4E] m-auto z-40">
                </div>
                <button type="button" className="w-[45%] flex items-center justify-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-xl px-5 py-1.5 mt-2 mx-auto border-4">300 coins</button>
              </div>
              
              <div className="col-span-4 h-[300px] w-[300px] row-start-2">
              <div className="relative mx-auto flex justify-center h-[110%] w-[80%] overflow-hidden rounded-lg p-4 m-auto -z-1">
                  <Card/>
                </div>
                <div className="relative h-[30px] w-[95%] bottom-5 rounded-md bg-[#A67C4E] m-auto z-40">
                </div>
                <button type="button" className="w-[45%] flex items-center justify-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-xl px-5 py-1.5 mt-2 mx-auto border-4">300 coins</button>
              </div>

              <div className="col-span-4 h-[300px] w-[300px] row-start-2">
                <div className="flex h-[110%] w-[80%] bg-[#0B0C2A] border-4 border-[#C4F7BC] rounded-lg p-4 m-auto -z-1">
                      Gold Pack
                </div>
                <div className="relative h-[25px] w-[95%] bottom-5 rounded-md bg-[#A67C4E] m-auto z-10">
                </div>
                <button type="button" className="w-[45%] flex items-center justify-center text-white hover:text-[#0B0C2A] border-[#C4F7BC] hover:[#0B0C2A] hover:bg-[#C4F7BC] active:ring-4 active:ring-[#C4F7BC] active:outline-none font-medium rounded-lg text-xl px-5 py-1.5 mt-2 mx-auto border-4">300 coins</button>
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