"use client"
import Bg from "@/app/assets/bg/bg4.png";
import Image1 from "@/app/assets/coffee/andres-vera-BewKTZMv7V0-unsplash.jpg";
import { fonts } from "@/app/components/fonts/font";
import RatingComponent from "@/app/components/starbar/starbar";
import Image from "next/image";
import LikeIcon from '@/app/assets/icon/favorite-svgrepo-com (1).svg'
import ProductBox from "@/app/components/prodectBox/prodectBox";
import Footer from "@/app/components/footer/footer";
import ProdectCard from "@/app/components/prodectCard/card";
export default function ProdectReview() {
  return (
   <div className="w-full relative">
     <div className="w-full h-full flex justify-center items-center ">
      <div className="w-full h-[900px]  relative overflow-hidden ">
        <Image
          src={Bg}
          layout="fill"
          objectFit="cover"
          alt="cover"
          className="absolute h-full w-full opacity-30"
        />
        <div className="relative w-[1600px] mt-40 flex justify-center  m-auto ">
          <div className=" w-1/2 h-full relative flex justify-center items-center flex-col ">
            <div className="h-[600px] w-[600px]  relative">
              <Image
                src={Image1}
                layout="fill"
                objectFit="cover"
                alt="cover"
                className=" h-full w-full "
              />
            </div>
            <div className="h-40 w-full relative py-2 flex justify-center" >
               {[1,2,3,4].map((element,index)=>{
                return  <div key={index} className={`h-20 w-20 bg-slate-400 rounded-sm mx-2 cursor-pointer ${index==0?'border-2':''}`} >

                </div>
               })}
            </div>
          </div>
          <div className="h-full relative w-1/2 ">
            <div className={`${fonts.font_3.className} text-5xl text-white`}>
              Items name
            </div>
            <div
              className={`${fonts.font_11.className} text-white w-[80%] mt-5`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              veritatis, error facere commodi quisquam assumenda reprehenderit,
              optio voluptas voluptate quae similique corporis ab tempore
              tempora, est ea ullam officiis tenetur? Labore, et facilis
              laboriosam beatae eum culpa ducimus, voluptatibus ut quibusdam
              maiores natus, libero dicta unde dignissimos quos laudantium?
              Blanditiis quia doloribus aliquam ipsum cumque aperiam laudantium
              nihil corrupti id.
            </div>
            <br />
            <div className="w-[80%]">
              <span className={`${fonts.font_3.className} text-3xl text-white`}>
                price
              </span>{" "}
              <span className={`${fonts.font_11.className} text-white ml-2`}>
                900$
              </span>
            </div>
            <div className="w-[80%]">
              <span className={`${fonts.font_3.className} text-3xl text-white`}>
                status
              </span>{" "}
              <span className={`${fonts.font_11.className} text-white ml-2`}>
                In Stock
              </span>
            </div>
            <div className="w-[80%] flex items-center">
              <span className={`${fonts.font_3.className} text-3xl text-white`}>
                rate
              </span>{" "}
              <span className={`${fonts.font_11.className} text-white ml-2`}>
                <RatingComponent />
              </span>
            </div>

            <div className="w-[80%]">
              <span className={`${fonts.font_3.className} text-3xl text-white`}>
                review
              </span>{" "}
              <span className={`${fonts.font_11.className} text-white ml-2 cursor-pointer hover:underline`}>
                comment(12)
              </span>
            </div>

                <div className="w-fit relative flex mt-2" >
                    <div className="h-10 w-10 relative text-white cursor-pointer border-2 border-white flex justify-center items-center text-2xl hover:scale-[0.99] transition-all" >
                        +
                    </div>
                    <div className="w-14 h-10  " >
                            <input type="number" name="" id="" value={0} className="h-full w-full relative border-2 bg-transparent flex justify-center items-center text-white text-center outline-none" min={0}/>
                    </div>
                    <div className="h-10 w-10 relative text-white cursor-pointer border-2 border-white flex justify-center items-center text-2xl hover:scale-[0.99] transition-all" >
-
                    </div>
                </div>

                <div className="w-full mt-4 flex items-center " >
                    <div className={`h-10 w-36 bg-white mr-2 rounded-sm flex items-center justify-center ${fonts.font_7.className} cursor-pointer`} >
                        Buy
                    </div>
                    <div className={`h-10 w-36 bg-white mr-2 rounded-sm flex items-center justify-center ${fonts.font_7.className} cursor-pointer`} >
                        Add-Cart
                    </div>

                    <div className="h-6 w-6 ml-2 cursor-pointer" >
                    <LikeIcon fill="white"/>
                    </div>
                    
                </div>


          </div>
        </div>
      </div>
    </div>
    <div className="w-[1600px] relative m-auto mt-20" >
               <div className={`text-center capitalize text-7xl ${fonts.font_7.className} text-white`} >
               suggesting Prodect
               </div>
               <div className="w-full relative py-2 flex justify-center flex-wrap"  >
               <ProdectCard />
               <ProdectCard />
               <ProdectCard />
               <ProdectCard />
               <ProdectCard />
               </div>
    </div>
    <Footer />
   </div>
  );
}
