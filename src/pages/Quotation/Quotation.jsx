import React, {useState} from 'react'
import Navbar from "../../components/Navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

function Quotation() {
  var fields=[
    {title:"Car Player",check:false},
    {title:"Rear Speaker",check:false},
    {title:"Front Speaker",check:false},
    {title:"Tweeter",check:false},
    {title:"Box/Pad",check:false},
    {title:"Monitor",check:false},
    {title:"Antenna",check:false},
    {title:"Camera",check:false},
    {title:"AMP",check:false},
    {title:"Woofer",check:false},
    {title:"Head Light",check:false},
    {title:"Head Light Wiring",check:false},
    {title:"Horn",check:false},
    {title:"Horn Wiring",check:false},
    {title:"Reverse Horn",check:false},
    {title:"Remote Lock",check:false},
    {title:"Parking Sensor",check:false},
    {title:"Fog Lamp",check:false},
    {title:"Sun Film",check:false},
    {title:"Full Mat",check:false},
    {title:"Seat Cover",check:false},
    {title:"Bumper",check:false},
    {title:"Carrier",check:false},
    {title:"Side Foot Step",check:false},
    {title:"Foot Patti Silver",check:false},
    {title:"Door Visor",check:false},
    {title:"Door Beeding",check:false},
    {title:"Front Film Whinsheld",check:false},
    {title:"Mobile Holder",check:false},
    {title:"Charger",check:false},
    {title:"Cigar Lighter",check:false},
    {title:"Body Cover",check:false},
    {title:"Show Pipe",check:false},
    {title:"Mat Flap",check:false},
    {title:"Wheel Cup",check:false},
    {title:"Neck Rest",check:false},
    {title:"Door Guard",check:false},
    {title:"Perfume",check:false},
    {title:"Crome Kit",check:false},
    {title:"Seat Beats",check:false},
    {title:"Number Plate",check:false},
    {title:"Pendrive",check:false},
    {title:"Ex Seat",check:false},
    {title:"Spoiler",check:false},
    {title:"God Idol",check:false},
    {title:"Teflan Coating",check:false},
    {title:"Under Chase Paint",check:false},
    {title:"Extra Light",check:false},
    {title:"Wire",check:false},
    {title:"Cut Mat/Noodule",check:false},
    {title:"Stearing Grip",check:false},
  ]
  const checked=[]

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [mobile,setMobile]=useState('')
  const [totalBudget,setTotalBudget]=useState('')

  const handleChecks =(title)=>{
    if(checked.includes(title)){
      const index=checked.indexOf(title)
      checked.splice(index,1)
    }else{
      checked.push(title)
    }
  }
  const submit=async(e)=>{
    e.preventDefault()
    if(email===''&& name==="" && mobile==='' && totalBudget===''){
      toast('All fields are mandatory')
      return ;
    }
    await axios({
        method: 'post',
        url: 'http://192.168.29.207:5000/message',
        data:{name,email,phonenumber:mobile,materials:checked,totalBudget,isquotation:true},
      }).then(async(response) => {
        if(response.data.status){
          try {
            toast('Your message sent successfully...')
            setEmail('')
            setName('')
            setTotalBudget('')
            setMobile('')
          } catch (error) {
            toast("Something went wrong, please try again!")
          }
        }else{
          toast(response.data.msg)
        }
      });
  }
  return (
    <div>
         <Navbar floatingNav />
         <div className='py-24'>
          <div className='mx-24 text-center my-10 font-bold text-3xl text-[#312e81]'>Quotation</div>
          <div className='grid md:grid-cols-2 grid-cols-1 mx-24 my-10 '>
          <div className='flex flex-wrap items-center justify-center'>
          <div className='m-10 font-bold'>Name:</div>
          <div>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="rounded-md py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
          </div>
          <div className='flex flex-wrap items-center justify-center'>
          <div className='m-10 font-bold'>Email:</div>
          <div>
          <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="rounded-md py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
          </div>
          <div className='flex flex-wrap items-center justify-center'>
          <div className='m-10 font-bold'>Mobile:</div>
          <div>
          <input type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)} className="rounded-md py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
          </div>
          <div className='flex flex-wrap items-center justify-center'>
          <div className='m-10 font-bold'>Total Budget:</div>
          <div>
          <input type="text" value={totalBudget} onChange={(e)=>setTotalBudget(e.target.value)} className="rounded-md py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
          </div>
          </div>
          <div className='font-semibold text-center text-xl my-10'>Select the category you want</div>
          <div className="mx-24 drop-shadow-lg  flex flex-wrap justify-center ">
          {fields.map((e,i)=>{
            return(
            <label className='flex m-5' onClick={()=>handleChecks(e.title)} key={i}>
            <input type="checkbox"/>
            <div className='m-2'>{e.title}</div>
            </label>

            )
          })}
          </div>
          <div className='mx-24 my-10 flex justify-center'>
          <button onClick={submit} className="rounded-full bg-gradient-to-r from-[#6b78b1] to-blue-500 px-8 py-3 text-white font-bold text-md flex gap-4 hover:animate-pulse">Submit</button>
          </div>
          </div>
          <ToastContainer className="mt-20"/>
    </div>
  )
}

export default Quotation