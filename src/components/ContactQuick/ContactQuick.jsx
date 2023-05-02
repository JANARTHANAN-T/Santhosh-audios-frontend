import React,{useState} from "react";
import whatsapp from '../../asserts/images/whatsapp.png'
import instagram from '../../asserts/images/instagram.png'
import gmail from '../../asserts/images/gmail.png'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';


function ContactQuick() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [mobile,setMobile]=useState('')
  const [message,setMessage]=useState('')

  const onSubmit=async(e)=>{
    e.preventDefault()
    if(email===''&& name==="" && mobile==='' && message===''){
      toast('All fields are mandatory')
      return ;
    }

    await axios({
        method: 'post',
        url: 'http://192.168.163.146:5000/message',
        data:{name,email,phonenumber:mobile,message},
      }).then(async(response) => {
        if(response.data.status){
          try {
            toast('Your message sent successfully...')
            setEmail('')
            setName('')
            setMessage('')
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
    <div className="mt-12">
    <ToastContainer className="mt-20"/>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="drop-shadow-md">
          <div className=" bg-white p-6 m-6">
            <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
              <svg
                className="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
              >
                <path
                  fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                  fillOpacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9089FC" />
                    <stop offset="1" stopColor="#FF80B5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Contact Us
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Share your opinion with us.
              </p>
            </div>
            <form className="mx-auto mt-16 max-w-xl sm:mt-20">
              <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Phone number
                  </label>
                  <div className="relative mt-2.5">
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      value={mobile}
                      onChange={(e)=>setMobile(e.target.value)}
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      value={message}
                      onChange={(e)=>setMessage(e.target.value)}
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                   
                    </textarea>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                 onClick={onSubmit}

                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Let's talk
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="m-6 mb-0 p-6">
            <p className="font-semibold tracking-tight text-gray-900 sm:text-3xl mb-10">
              React us on
            </p>
            <div className="grid grid-cols-3 gap-10 items-center">
            <a href = "mailto: santhoshaudios@gmail.com" target="_blank" rel="noreferrer"  className="lg:p-6 border hover:drop-shadow-xl hover:scale-105 transition-transform duration-200 flex justify-center"><img src={gmail} alt="gmail" className="h-16" /></a>
            <a href="https://wa.me/+919976208183" target="_blank" rel="noopener noreferrer" className="lg:p-6 border hover:drop-shadow-xl hover:scale-105 transition-transform duration-200 flex justify-center"><img src={whatsapp} alt="whatsapp" className="h-16" /></a>
            <a href="https://www.instagram.com/santhosh_audios/" target="_blank" rel="noreferrer" className="lg:p-6 border hover:drop-shadow-xl hover:scale-105 transition-transform duration-200 flex justify-center"><img src={instagram} alt="instagram" className=" h-16 " /></a>
            </div>
          </div>
          <div className="m-6 mt-0 row-span-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.1265470796543!2d77.68657821428512!3d11.325459991950417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f529f11b96f%3A0xb31d9d7ff4ac1510!2sSanthosh%20audios!5e0!3m2!1sen!2sin!4v1679814813649!5m2!1sen!2sin"
              className="h-[100%] w-[100%]"
              loading="lazy"
              title="location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactQuick;
