import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ITEM_DISTANCE = 200;
const ITEM_ANGLE = -45;
const CENTER_ITEM_POP = 500;
const CENTER_ITEM_DISTANCE = 100;

function Gallery() {
  const [images,setImage] = useState([])

  const [galleryImages, setGalleryImages] = useState();

  useEffect(() => {
    const getImage = async () => {
      await axios
        .get(
          `https://script.google.com/macros/s/AKfycbzlqWK52qdKLZ1C1XOq5GXbvGYA5Dj99XRpwza8n6E6-gf80bgQoWqPzeaAdhpqMnh_/exec`
        )
        .then((response) => {
          setGalleryImages(response.data.ids);
          setImage(
          galleryImages?.filter(e=>e.category_name==='General')[0].data
          )
          // console.log(galleryImages?.filter(e=>e.category_name==='General'));
          console.log(images);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getImage();
  },[galleryImages,images]);

  const el = useRef(null);

  const setTransform=(el, xpos, zpos, yAngle)=>{
    el.style.transform = `translateX(${xpos}px) translateZ(${zpos}px) rotateY(${yAngle}deg)`;
  }
  useEffect(() => {
    target(Math.floor(images?.length * 0.5));
  });

  const target=(index)=>{
    const items = el.current.children

    for (let i = 0; i < items.length; i++) {

      const item = items[i];

      // Center item position and angle
      if (i === index)
        setTransform(item, 0, CENTER_ITEM_POP, 0);
      // Left items position and angle
      else if (i < index) {
        setTransform(item, (i - index) * ITEM_DISTANCE - CENTER_ITEM_DISTANCE, 0, -ITEM_ANGLE);
      }
      // Right items position and angle
      else
        setTransform(item, (i - index) * ITEM_DISTANCE + CENTER_ITEM_DISTANCE, 0, ITEM_ANGLE);
    }
  }


  return (
    <div className="container hidden md:block">
    <div className='text-center text-4xl font-semibold text-[#312e81] mb-20 '>Our Gallery</div>
    <div className="flex justify-center items-center relative top-20">
    {(images?.length===0 || images===undefined) &&
      <div role="status">
    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>    }
    </div>
    <div className="coverflow" ref={el}>
      {images?.map((it,index)=>{
        return(
          <div 
            onClick={() => target(index)}
            key={index} 
            style={{backgroundImage:`url(https://drive.google.com/uc?id=${it})`}}
            className='coverflow-item'>
          </div>
        )
      })}
    </div>
    {(images?.length!==0 || images!==undefined) &&
    <div className="flex absolute bottom-20 left-[43vw]">
        <Link to='/gallery'
          className="animate-pulse  text-xl text-blue-600 font-bold my-5 rounded-md"
          onClick={()=>window.scrollTo({top: 0, behavior: 'smooth'})}
        >
        Explore {">"}
        </Link>
      </div>
    }
  </div>
  );
}

export default Gallery;
