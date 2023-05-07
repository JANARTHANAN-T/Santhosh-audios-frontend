import React, {useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import TopNavBtn from '../../components/TopNavBtn/TopNavBtn'
function ServicePage({data}) {
  const [selectedService, setSelectedService]=useState(data[0].Title)
  const [selectedServiceArray, setSelectedServiceArray]=useState(data[0].Description)
  
  return (
    <div>
    <Navbar floatingNav />
    <div className='pt-24 justify-center grid lg:grid-cols-6 md: grid-cols-3 snap-mandatory'>
      {data.map((ele,index)=>{
        if(selectedService!==ele.Title){
        return(
        <button key={index} className='rounded-full border-2 border-[#312e81] px-4 py-2 hover:bg-[#312e81] text-[#312e81] font-semibold hover:text-white md:m-6 m-2' onClick={()=>{setSelectedService(ele.Title); setSelectedServiceArray(ele.Description);}}>{ele.Title}</button>
        )}else{
          return(
        <button key={index} className='rounded-full border-2 border-[#312e81] px-4 py-2 bg-[#312e81]  font-semibold text-white md:m-6 m-2' onClick={()=>{setSelectedService(ele.Title); setSelectedServiceArray(ele.Description);}}>{ele.Title}</button>
       ) }
      })} </div>
      <hr />
    <div className=''>
        {selectedServiceArray.map((ele,index)=>{
          return(
    <div className='text-xl leading-10 text-left md:px-52 px-10 py-10' key={index}>
    {ele}
    </div>
            
          )
        })}
    </div>
    <TopNavBtn />
    </div>
  )
}

export default ServicePage