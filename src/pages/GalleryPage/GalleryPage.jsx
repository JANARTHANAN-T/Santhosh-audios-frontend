import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import TopNavBtn from "../../components/TopNavBtn/TopNavBtn";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";


function GalleryPage() {
  const [images, setImages] = useState();
  const [category, setCategory] = useState();

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 p-10">
        {category?.map((ele, index) => {
          return (
            <LazyLoadImage
              src={`https://drive.google.com/uc?id=${ele}`}
              // PlaceholderSrc={logo}
              alt="Image Alt"
              key={index}
              // effect="blur"
            />
          );
        })}
      </div>

      <TopNavBtn />
    </div>
  );
}

export default GalleryPage;
