import Bg from "@/app/assets/bg/coffee_0001.png";
import ImageItem from "@/app/assets/marketing/happy.png";
import ImageItem2 from "@/app/assets/marketing/award_1.png";
import ImageItem3 from "@/app/assets/marketing/coffe.png";
import Image from "next/image";
import { fonts } from "../fonts/font";
export default function Marketing001() {
  return (
    <div className="h-[750px] bg-white w-full relative overflow-hidden mt-5">
      <div className="w-full h-full absolute z-20  flex justify-around items-center">



        <div className="w-[300px] bg-white mx-20  relative mt-5 overflow-hidden ">
          <div className="w-full relative h-[300px] flex justify-center items-center  translate-x-4">
            <Image src={ImageItem} alt="" />
          </div>
          <div
            className={`text-center text-3xl mt-8 mb-8 ${fonts.font_3.className} `}
          >
            Exceptional Customer Service
          </div>
          <div className={`text-center text-sm mt-6 ${fonts.font_1.className}`}
          
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            similique excepturi corrupti quo porro moium esse earum laborum
            facilis, mollitia officiis ex commodi similique non repudiandae
            cumque omnis!
          </div>
        </div>



        <div className="w-[300px]  mx-20  relative mt-5 overflow-hidden ">
          <div className="w-full relative h-[300px] flex justify-center items-center  translate-x-4 p-10 pt-14">
            <Image src={ImageItem3} alt="" />
          </div>
          <div
            className={`text-center text-3xl mt-8 mb-8 ${fonts.font_3.className} `}
          >
            Exceptional Customer Service
          </div>
          <div className={`text-center text-sm mt-6 ${fonts.font_1.className}`}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            similique excepturi corrupti quo porro moium esse earum laborum
            facilis, mollitia officiis ex commodi similique non repudiandae
            cumque omnis!
          </div>
        </div>


        <div className="w-[300px]  mx-20  relative mt-5 overflow-hidden  ">
          <div className="w-full relative h-[300px] flex justify-center items-center  translate-x-4 p-[62px] pt-20">
            <Image src={ImageItem2} alt="" />
          </div>
          <div
            className={`text-center text-3xl mt-8 mb-8 ${fonts.font_3.className} `}
          >
            Exceptional Customer Service
          </div>
          <div className={`text-center text-sm mt-6 ${fonts.font_1.className}`}
          
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            similique excepturi corrupti quo porro moium esse earum laborum
            facilis, mollitia officiis ex commodi similique non repudiandae
            cumque omnis!
          </div>
        </div>












      </div>
      <div className="w-full opacity-5">
        <Image
          src={Bg}
          alt=""
          className="w-full"
          objectFit="cover"
          layout="fill"
        />
      </div>
    </div>
  );
}
