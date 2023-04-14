import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import TopNavBtn from '../../components/TopNavBtn/TopNavBtn'
function ServicePage() {
  return (
    <div>
    <Navbar floatingNav />
    <div className='pt-24 flex justify-center grid lg:grid-cols-6 md: grid-cols-3  snap-mandatory'>
        <button className='rounded-full border-2 border-[#312e81] px-4 py-2 hover:bg-[#312e81] text-[#312e81] font-semibold hover:text-white md:m-6 m-2'>Car Audios</button>
        <button className='rounded-full border-2 border-[#312e81] px-4 py-2 hover:bg-[#312e81] text-[#312e81] font-semibold hover:text-white md:m-6 m-2'>Car Accessories</button>
        <button className='rounded-full border-2 border-[#312e81] px-4 py-2 hover:bg-[#312e81] text-[#312e81] font-semibold hover:text-white md:m-6 m-2'>Home Audios</button>
        <button className='rounded-full border-2 border-[#312e81] px-4 py-2 hover:bg-[#312e81] text-[#312e81] font-semibold hover:text-white md:m-6 m-2'>Van/Bus Audios</button>
        <button className='rounded-full border-2 border-[#312e81] px-4 py-2 hover:bg-[#312e81] text-[#312e81] font-semibold hover:text-white md:m-6 m-2'>Van/Bus Lighting</button>
        <button className='rounded-full border-2 border-[#312e81] px-4 py-2 hover:bg-[#312e81] text-[#312e81] font-semibold hover:text-white md:m-6 m-2'>Other Service</button>
    </div>
    <div className=''>
    <div className='text-xl leading-10 text-center md:px-52 px-10 py-10'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque laboriosam mollitia cumque. Accusamus, dignissimos libero soluta enim repellat adipisci exercitationem perferendis consequuntur maiores delectus aperiam obcaecati, eius dolorum error molestias!
    </div>
    </div>
    <TopNavBtn />
    </div>
  )
}

export default ServicePage