import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import TopNavBtn from "../../components/TopNavBtn/TopNavBtn";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";


function GalleryPage() {
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState([]);
  const [showImage, setShowImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const getImage = async () => {
      await axios
        .get(
          `https://script.google.com/macros/s/AKfycbzlqWK52qdKLZ1C1XOq5GXbvGYA5Dj99XRpwza8n6E6-gf80bgQoWqPzeaAdhpqMnh_/exec`
        )
        .then((response) => {
          setImages(response.data.ids);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getImage();
  });

  return (
    <div>
      <Navbar floatingNav />
    {(images?.length===0 || images===undefined) &&
      <div className="flex justify-center items-center h-[40vh]">
      <div role="status">
    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
    </div>
</div>    }
      <div className="pt-24 justify-center grid lg:grid-cols-6 md: grid-cols-3  snap-mandatory">
        {images?.filter(e=>e.category_name!=='General').map((ele, index) => {
            return (
              <button
                key={index}
                className="rounded-full border-2 border-[#312e81] px-4 py-2 hover:bg-[#312e81] text-[#312e81] font-semibold hover:text-white md:m-6 m-2"
                onClick={() => setCategory(ele.data)}
              >
                {ele.category_name}
              </button>
            );
        })}
      </div>
      {(category.length===0 && images?.length!==0) &&
      <div className="flex justify-center items-center m-10 mb-0 h-52 border-2 rounded-md border-slate-400">Select the Category</div>
      }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-10">
        {category?.map((ele, index) => {
          return (
            <LazyLoadImage
              src={`https://drive.google.com/uc?id=${ele}`}
              // PlaceholderSrc={logo}
              alt="Image Alt"
              key={index}
              // effect="blur"
              className="cursor-pointer"
              onClick={()=>{
                setSelectedImage(`https://drive.google.com/uc?id=${ele}`)
                setShowImage(true)
                }
              }
            />
          );
        })}
      </div>
      {showImage &&
      <div className="h-screen w-full fixed top-0 z-10 flex justify-center items-center bg-[rgba(0,0,0,0.7)]">
      <div className="absolute top-2 right-2 bg-red-500 px-2 py-1 text-white cursor-pointer" onClick={()=>setShowImage(false)}>x</div>
      <img src={selectedImage} className="h-[90vh]" alt="preview" />      
      </div>
      }
      

      <TopNavBtn />
    </div>
  );
}

export default GalleryPage;
