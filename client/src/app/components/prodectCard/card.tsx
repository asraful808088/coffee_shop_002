"use client";
import DemoImage from "@/app/assets/coffeeImage/view-3d-coffee-cup.jpg";
import FullSTR from "@/app/assets/icon/Group 4.svg";
import HelfSTR from "@/app/assets/icon/Group 5.svg";
import Tag001 from "@/app/assets/tag/offer/tag001.svg";
import Image from "next/image";
import { useState } from "react";
import { fonts } from "../fonts/font";
interface ProdectProps {
  header: string;
  des: string;
  image: string;
  onDisplay: any;
  id: string;
  widthFull: boolean;
  marginOff:boolean
}
export default function ProdectCard(props: ProdectProps) {
  const [activeImage, setActiveImage] = useState(false);
  return (
    <div
      className={`${props.widthFull? "w-full":"w-[350px]" } h-auto ${props.marginOff?"":"m-5"} cursor-pointer relative`}
      onClick={() => {
        if (props.onDisplay) {
          props.onDisplay({ prodectId: props.id });
        }
      }}
    >
      <div className="absolute w-full animate-pulse h-[350px] bg-gray-800"></div>
      <div
        className={`w-full relative h-[350px]  ${
          !activeImage ? "opacity-0" : "opacity-100"
        } `}
      >
        <div className="absolute h-full w-full overflow-hidden group">
          <div className="h-full w-full absolute bg-black bg-opacity-30 z-20"></div>
          <Image
            src={props.image ?? DemoImage}
            alt=""
            className="h-full w-full group-hover:scale-110 transition-all"
            objectFit="cover"
            layout="fill"
            onLoadingComplete={() => {
              setActiveImage(true);
            }}
          />
        </div>
        <div className="relative flex justify-end z-50">
          <div className=" h-[60px] w-[60px] translate-x-3 -translate-y-4">
            <Tag001 />
          </div>
        </div>
      </div>
      <div className="w-full relative text-white ">
        <div className="my-8 flex items-center">
          {" "}
          <div className="w-4 h-4 relative mx-2">
            <FullSTR />
          </div>
          <div className="w-4 h-4 relative mx-2">
            <FullSTR />
          </div>
          <div className="w-4 h-4 relative mx-2">
            <FullSTR />
          </div>
          <div className="w-4 h-4 relative mx-2">
            <FullSTR />
          </div>
          <div className="w-4 h-4 relative mx-2">
            <HelfSTR />
          </div>
        </div>
        <div className={`text-3xl ${fonts.font_4.className} mt-6`}>
          {props.header ?? "header"}
        </div>
        <div className={`${fonts.font_4.className} my-2`}>
          {props.des ??
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugit
          nostrum quas temporibus alias`}
        </div>
        <div className={`w-full relative flex ${fonts.font_7.className}`}>
          <spam className="mr-2 text-gray-500">
            <strike>880$</strike>
          </spam>
          <spam className="text-white">700$</spam>
        </div>
      </div>
    </div>
  );
}
