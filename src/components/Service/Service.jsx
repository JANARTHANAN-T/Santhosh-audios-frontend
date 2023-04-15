import React from 'react'



function Service() {
  return (
    <div className=''>
    <div className='text-center text-4xl font-semibold text-[#312e81] mb-10 '>Sales & Services</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
        <div className='p-10 text border text-center text-xl font-semibold hover:drop-shadow-lg hover:bg-[#91D8E4] hover:scale-105 transition-transform duration-300'>Car Audios</div>
        <div className='p-10 text border text-center text-xl font-semibold hover:drop-shadow-lg hover:bg-[#91D8E4] hover:scale-105 transition-transform duration-300'>Car Accessories</div>
        <div className='p-10 text border text-center text-xl font-semibold hover:drop-shadow-lg hover:bg-[#91D8E4] hover:scale-105 transition-transform duration-300'>Home Audios</div>
        <div className='p-10 text border text-center text-xl font-semibold hover:drop-shadow-lg hover:bg-[#91D8E4] hover:scale-105 transition-transform duration-300'>Van/Bus Audios</div>
        <div className='p-10 text border text-center text-xl font-semibold hover:drop-shadow-lg hover:bg-[#91D8E4] hover:scale-105 transition-transform duration-300'>Van/Bus Tour Lighting</div>
        <div className='p-10 text border text-center text-xl font-semibold hover:drop-shadow-lg hover:bg-[#91D8E4] hover:scale-105 transition-transform duration-300'>All other audio system services</div>
      </div>
    </div>
  )
}

export default Service