//crate that displays once a shop item(card) is sold

function ShopSold() {
  return (
      <>
      <div className="relative flex h-[370px] w-[270px] rounded-sm bg-[#A77B51] top-[300px] left-[40%] rounded-lg">
        <div className="absolute h-[350px] w-[250px] top-[3%] left-[9px] bg-[#C9B080]">
          {/* Top board */}
          <div className="absolute h-[30px] w-[285px] bg-[#A77B51] -top-[9%] -left-[17px] rounded-lg"></div>
            {/* inner crate */}
            <div className="absolute h-[350px] w-[8px] left-[13%] bg-[#A77B51]"></div>
            <div className="absolute h-[350px] w-[8px] left-[30%] bg-[#A77B51]"></div>
            <div className="absolute h-[350px] w-[8px] left-[47%] bg-[#A77B51]"></div>
            <div className="absolute h-[350px] w-[8px] left-[64%] bg-[#A77B51]"></div>
            <div className="absolute h-[350px] w-[8px] left-[81%] bg-[#A77B51]"></div>
            {/*diagonal board */}
            <div className="absolute h-[432px] w-[22px] left-[46%] -top-[12%] bg-[#A77B51] rotate-[35deg]">

            {/*Sign outer*/}
            <div className="absolute h-[95px] w-[235px] rotate[35deg] bg-[#A77B51] -left-[110px] top-[170px] z-20 rounded-lg">
            </div>
            {/* Sign inner */}
            <div className="absolute h-[80px] w-[220px] rotate[35deg] bg-[#C9B080] -left-[102px] top-[177px] z-30 text-center flex justify-center items-center text-[#830608] text-8xl rounded-lg">
              SOLD
            </div>          
          </div>
        </div>
          {/* Bottom board */}
          <div className="absolute h-[30px] w-[285px] bg-[#A77B51] -bottom-[5%] -left-[7px] rounded-lg"></div>
      </div>

      </>
  );

}

export default ShopSold

//60 size
// relative flex h-[360px] w-[260px] rounded-3xl bg-white

//colors:

//#C9B080
//#A77B51
//#5E4112