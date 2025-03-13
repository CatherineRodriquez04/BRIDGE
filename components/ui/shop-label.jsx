"use client"
//shop panel (need to center)
//doesn't interact porperly with the responiveness / rest of page, may need to remove temporarily

const ShopLabel = () => {
  return (
    <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 left-4 sm:left-8 md:left-16 transform -rotate-6 hidden sm:block">
      <div className="bg-white text-[#0e0e2c] p-2 sm:p-4 md:p-6 shadow-lg flex items-center justify-center">
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">SHOP</h2>
      </div>
    </div>
  )
}

export default ShopLabel