import DisplayImage from "@/app/assets/demo/New folder/vintage-teacups-second-hand-market.jpg";
import { fonts } from "@/app/components/fonts/font";
import Navheader from "@/app/components/nav-header/navHeader";
import Image from "next/image";
import Footer from "@/app/components/footer/footer";
import Feature from "@/app/components/features001/feature";
import FinalWords from "@/app/components/finalWordsOfAbout/about";
export default function Service() {
  return (
   <div className="w-full " >
 <div className="w-full relative">
      <div className="w-full relative h-[750px] bg-slate-400">
        <div className="w-full h-full absolute flex flex-col">
          <div className=" w-full h-28 z-10 relative "></div>
          <div className="bg-black bg-opacity-50 w-full flex-grow z-10 relative flex justify-center items-center flex-col">
            <div className={`${fonts.font_7.className} text-white text-7xl`}>
              Service
            </div>
            <div
              className={`w-[900px] text-center text-white ${fonts.font_11.className} text-2xl mt-2 mb-4`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              consequuntur cum, eos sequi minus voluptatibus quis iusto corrupti
              molestias odit minima itaque fuga nesciunt, neque in ab delectus.
              Rerum, ex?
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
        <div className="z-50">
          <Navheader />
        </div>
      </div>
      
    </div>
    <Feature />
    <FinalWords />
    <Footer />
   </div>
  );
}
