import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import TopNavBtn from '../../components/TopNavBtn/TopNavBtn'
import axios from 'axios'
function GalleryPage() {
  axios.get(`https://script.google.com/macros/s/AKfycbzlqWK52qdKLZ1C1XOq5GXbvGYA5Dj99XRpwza8n6E6-gf80bgQoWqPzeaAdhpqMnh_/exec`)
  .then(response=>{
    console.log(response.data);  
  })
  .catch(err => {
    console.log(err);
  })
  return (
    <div>
    <Navbar floatingNav />
    <img src='https://drive.google.com/uc?id=14_-T5oM74D9xSmKoULVC_daxEtE_88DX' alt='noimg'/>
    <div className='pt-24 flex justify-center grid lg:grid-cols-6 md: grid-cols-3  snap-mandatory'>
        <button className='rounded-full border-2 border-[#312e81] px-4 py-2 hover:bg-[#312e81] text-[#312e81] font-semibold hover:text-white md:m-6 m-2'>Car Audios</button>
        <button className='rounded-full border-2 border-[#312e81] px-4 py-2 hover:bg-[#312e81] text-[#312e81] font-semibold hover:text-white md:m-6 m-2'>Car Accessories</button>
        <button className='rounded-full border-2 border-[#312e81] px-4 py-2 hover:bg-[#312e81] text-[#312e81] font-semibold hover:text-white md:m-6 m-2'>Home Audios</button>
        <button className='rounded-full border-2 border-[#312e81] px-4 py-2 hover:bg-[#312e81] text-[#312e81] font-semibold hover:text-white md:m-6 m-2'>Van/Bus Audios</button>
        <button className='rounded-full border-2 border-[#312e81] px-4 py-2 hover:bg-[#312e81] text-[#312e81] font-semibold hover:text-white md:m-6 m-2'>Van/Bus Lighting</button>
        <button className='rounded-full border-2 border-[#312e81] px-4 py-2 hover:bg-[#312e81] text-[#312e81] font-semibold hover:text-white md:m-6 m-2'>Other Service</button>
    </div>

    <TopNavBtn />
    </div>
  )
}

export default GalleryPage