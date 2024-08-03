import DemoImage from "@/app/assets/coffeeImage/view-3d-coffee-cup.jpg";
import FullSTR from "@/app/assets/icon/Group 4.svg";
import HelfSTR from "@/app/assets/icon/Group 5.svg";
import Tag001 from "@/app/assets/tag/offer/tag001.svg";
import Image from "next/image";
import { fonts } from "../fonts/font";
import ProdectCard from "../prodectCard/card";
export default function PopulerItems() {
  return (
    <div className="w-[1600px] relative mt-10 h-auto   m-auto">
      <div
        className={`text-3xl text-center ${fonts.font_8.className} mt-20 text-white`}
      >
        High Rate & Discount Prodect !!!
      </div>
      <div
        className={`text-7xl text-center ${fonts.font_7.className} mt-20 text-white`}
      >
        Our Popular Products
      </div>
      <div className="w-full relative mt-20 flex flex-wrap justify-around h-auto">
        {[1, 2, 3, 4, 5, 1].map((element, index) => {
          return (
            <ProdectCard key={index} />
          );
        })}
      </div>
      <div className="my-8 w-full relative flex justify-center items-center mb-10">
        <div
          className={`py-2 px-6 relative border border-white ${fonts.font_1.className} text-white text-sm cursor-pointer transition-all hover:scale-105`}
        >
          View More
        </div>
      </div>
    </div>
  );
}
