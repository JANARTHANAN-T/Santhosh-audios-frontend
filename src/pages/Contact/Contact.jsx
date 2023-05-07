import Navbar from "../../components/Navbar/Navbar";
import TopNavBtn from "../../components/TopNavBtn/TopNavBtn";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import React,{useState} from "react";

function Contact({data}) {
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
    <div>
      <Navbar floatingNav />
      <ToastContainer className="mt-20"/>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.1265470796543!2d77.68657821428512!3d11.325459991950417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f529f11b96f%3A0xb31d9d7ff4ac1510!2sSanthosh%20audios!5e0!3m2!1sen!2sin!4v1679814813649!5m2!1sen!2sin"
        className="w-[100%] h-96 pt-20"
        loading="lazy"
        title="location"
      ></iframe>
      <div className="grid grid-cols-1 md:grid-cols-4 justify-center md:m-20 m-5 ">
        <div className="text-2xl font-semibold my-5">Get In Touch </div>
        <div className="col-span-3  gap-10 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
          <div className=" shadow-lg p-5">
            <div className="text-lg font-medium my-2">Gmail (Primary)</div>
            <div className="text-blue-600 text-lg">{data.Email1}</div>
            <a href = "mailto: santhoshaudios@gmail.com" target="_blank" rel="noreferrer"><div className="text-lg my-2 decoration-1 underline hover:text-blue-600">Click to Mail</div></a>
          </div>
          <div className=" shadow-lg p-5">
            <div className="text-lg font-medium my-2">Gmail (Secondary)</div>
            <div className="text-blue-600 text-lg">{data.Email2}</div>
            <a href = "mailto: santhoshvg60@gmail.com" target="_blank" rel="noreferrer"><div className="text-lg my-2 decoration-1 underline hover:text-blue-600">Click to Mail</div></a>          
          </div>
          <div className=" shadow-lg p-5">
            <div className="text-lg font-medium my-2">Instagram</div>
            <div className="text-blue-600 text-lg">{data.Instagram}</div>
            <a href="https://www.instagram.com/santhosh_audios/" target="_blank" rel="noreferrer"><div className="text-lg my-2 decoration-1 underline hover:text-blue-600">Link</div></a>
          </div>
          <div className=" shadow-lg p-5">
            <div className="text-lg font-medium my-2">WhatsApp (Primary)</div>
            <div className="text-blue-600 text-lg">{data.WhatsApp1}</div>
            <a href="https://wa.me/+919976208183" target="_blank" rel="noopener noreferrer"><div className="text-lg my-2 decoration-1 underline hover:text-blue-600">Click to Chat</div></a>
          </div>
          <div className=" shadow-lg p-5">
            <div className="text-lg font-medium my-2">WhatsApp (Secondary)</div>
            <div className="text-blue-600 text-lg">{data.WhatsApp2}</div>
            <a href="https://wa.me/+918526108281" target="_blank" rel="noopener noreferrer"><div className="text-lg my-2 decoration-1 underline hover:text-blue-600">Click to Chat</div></a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 justify-center md:m-20 m-5 ">
        <div className="text-2xl font-semibold my-5">Location </div>
        <div className="col-span-3  gap-10 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
          <div className=" shadow-lg p-5">
            <div className="text-blue-600 text-lg">Santhosh Audios</div>
            <div className="text-lg my-2">
              {data.AddressStreet}<br/>
              {data.AddressArea}<br/>
              {data.AddressDistrict}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 justify-center md:m-20 m-5 ">
        <div className="text-2xl font-semibold my-5">Contact Us On </div>
        <div className="drop-shadow-lg col-span-3">
          <div className=" bg-white ">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Contact Us
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Share your opinion with us.
              </p>
            </div>
            <form className="mx-auto mt-16 max-w-xl sm:mt-20 pb-16">
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

                  className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Let's talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <TopNavBtn />
    </div>
  );
}

export default Contact;
