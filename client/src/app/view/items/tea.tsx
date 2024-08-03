"use client";
import Tea1 from "@/app/assets/tea/alison-marras-vtntD9h1xBw-unsplash.jpg";
import Tea2 from "@/app/assets/tea/massimo-rinaldi-FmgZ5xzDG-s-unsplash.jpg";
import Tea3 from "@/app/assets/tea/nathan-dumlao-8yBQQqH3q8Q-unsplash.jpg";
import Tea4 from "@/app/assets/tea/sergey-n-0bSRG6z--6s-unsplash.jpg";
import Tea5 from "@/app/assets/tea/teacora-rooibos-FnTWsBohkdo-unsplash.jpg";
import Tea7 from "@/app/assets/tea/teacora-rooibos-RKDP3D-6G5E-unsplash.jpg";
import Tea6 from "@/app/assets/tea/tom-chen-NxkFLRNg8g0-unsplash.jpg";
import Navheader from "@/app/components/nav-header/navHeader";
import DisplayImage from "@/app/assets/bg/bg4.png";
import { fonts } from "@/app/components/fonts/font";
import Image from "next/image";
import "./style.css";
import ProdectBox from "@/app/components/prodectBox/prodectBox";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import SwiperCore from "swiper/core";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
SwiperCore.use([Autoplay, Pagination]);
function Slider() {
  return (
    <>
      <Swiper
      
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }} // Autoplay settings
        loop={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 10,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {[
          {
            image: Tea1,
          },
          {
            image: Tea2,
          },
          {
            image: Tea3,
          },
          {
            image: Tea4,
          },
          {
            image: Tea5,
          },
          {
            image: Tea6,
          },
          {
            image: Tea7,
          },
        ].map((element, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="h-[400px] w-[400px]  relative">
                <Image
                  src={element.image}
                  alt=""
                  className=" w-full"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default function TeaPage() {
  return (
   <div className="w-full relative" >
 <div className="w-full relative h-[900px] ">
      <div className="w-full h-full absolute flex flex-col">
        {/* <div className=" w-full h-28 z-10 relative "></div> */}
        <div className=" bg-opacity-50 w-full flex-grow z-10 relative flex justify-center items-center flex-col ">
          <div className={`w-full  text-white text-center text-7xl ${fonts.font_7.className} mb-20 z-40`} >Our Populer Items</div>
          <div className="h-auto w-full   flex justify-center items-center">
            <div className="w-[1200px] h-[400px]  relative">
              <Slider />
            </div>
          </div>
          <Image
          src={DisplayImage}
          alt=""
          className="w-full h-full relative "
          objectFit="cover"
          layout="fill"
        />
        </div>
      </div>
     <div className="z-20">
     <Navheader/>
     </div>
    </div>

    <ProdectBox />
   </div>
  );
}
