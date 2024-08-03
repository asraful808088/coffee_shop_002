"use client";
import bg3 from "@/app/assets/bg/bg3.png";
import PersonImage from "@/app/assets/demo/pngwing.com.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { fonts } from "../fonts/font";
import "./style.css";

export default function ReviewBox() {
  return (
    <div className="w-full h-auto mt-20  m-auto relative bg-slate-50 overflow-hidden">
      <Image src={bg3} alt="" className="absolute opacity-10" />
      <div
        className={`mt-20 text-7xl ${fonts.font_7.className} text-center text-black`}
      >
        Client Review
      </div>
      <div className="m-auto relative h-[600px] w-[1600px] left-0 top-0  mt-10 mb-10 flex items-center justify-center">
        <Swiper
          spaceBetween={100}
          slidesPerView={3}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pag
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }} // Autoplay settings
          loop={true}
          className="w-full"
        >
          {[1, 2, 3, 4].map((element, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="w-[500px] h-auto py-20">
                  <div className="w-full">
                    <div className="w-full h-[250px] relative m-auto flex justify-center">
                      <div className="absolute w-[120px] h-[220px] flex items-end rounded-full1 rounded-full translate-y-[10%] ">
                        <div className="absolute w-[120px] h-[120px]  group rounded-full1 rounded-full bg-cover ">
                          <Image
                            src={PersonImage}
                            alt=""
                            className=" w-[120px] h-[120px]  -translate-y-[10%] transition-all scale-125 "
                          />
                        </div>
                      </div>
                      {/* <div  className="absolute w-[120px] h-[120px] bg-red-400 rounded-full1 overflow-hidden rounded-full z-30" >
                  <Image src={PersonImage} alt="" className=" w-[120px] h-[120px]  -translate-y-[10%] scale-125"/>
                  </div> */}
                    </div>
                  </div>
                  <div className="w-full ">
                    <div
                      className={`text-3xl ${fonts.font_3.className} text-center p-5`}
                    >
                      Header
                    </div>
                    <div
                      className={`text-center px-10 pb-10 ${fonts.font_1.className}`}
                    >
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Perferendis, voluptatibus et maiores voluptas fugit ea
                      odit beatae suscipit veniam asperiores accusamus quae
                      laudantium ipsum illo corrupti quo cumque recusandae
                      voluptatum!
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

          <div className="swiper-button-next h-10 w-10 text-yellow-300  "></div>
          <div className="swiper-button-prev h-10 w-10 text-yellow-300  "></div>
        </Swiper>
      </div>
    </div>
  );
}
