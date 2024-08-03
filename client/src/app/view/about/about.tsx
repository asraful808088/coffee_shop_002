import DisplayImage from "@/app/assets/demo/New folder/close-up-hands-barista-make-latte-coffee-art-paint.jpg";
import { fonts } from "@/app/components/fonts/font";
import Navheader from "@/app/components/nav-header/navHeader";
import CookChefs from "@/app/components/aboutCookChef/cookChefs";
import Image from "next/image";
import Waiters from "@/app/components/waiters/waiter";
import Footer from "@/app/components/footer/footer";
import FinalWordsOfAbout from "@/app/components/finalWordsOfAbout/about";
export default function AboutUs() {
  return (
  <>
  
  <div className="w-full relative h-[750px] bg-slate-400">
      <div className="w-full h-full absolute flex flex-col">
        <div className=" w-full h-28 z-10 relative "></div>
        <div className="bg-black bg-opacity-50 w-full flex-grow z-10 relative flex justify-center items-center flex-col">
          <div className={`${fonts.font_7.className} text-white text-7xl`}>
            About Us
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
    <CookChefs />
    <br />
    <Waiters />
    <FinalWordsOfAbout />
    <Footer />
  </>
  );
}
