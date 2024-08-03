import { fonts } from "../fonts/font";
import Image from "next/image";
import Demo1 from '@/app/assets/demo/jazmin-quaynor-9Y8vxVQN4o4-unsplash.jpg'
import Demo2 from '@/app/assets/demo/lily-banse--6OpD6mmI8M-unsplash.jpg'
import Demo3 from '@/app/assets/demo/simona-todorova-GFcKyOrSO4M-unsplash.jpg'
import Demo4 from '@/app/assets/demo/the-anchor-ACtEE_FcaRU-unsplash.jpg'
import Demo5 from '@/app/assets/demo/toa-heftiba-yfaEuuackFw-unsplash.jpg'
export default function Branch() {
  return (
    <div className="w-[1600px] h-[900px] bg-black m-auto ">
      <div
        className={`text-7xl capitalize mt-12 text-center text-white ${fonts.font_7.className}`}
      >
        our populer branch
      </div>
      <div className="w-full flex   h-[700px] mt-20">
        <div className="item w-[50%] h-full relative p-5">
          <div className="h-full w-full bg-slate-700 relative group overflow-hidden">
            <div className="h-full w-full absolute bg-black bg-opacity-60 z-20 cursor-pointer flex items-center justify-center" >
                    <div className={`border-2 border-white w-48 h-14 rounded-sm flex justify-center items-center text-3xl text-white ${fonts.font_8.className} transition-all hover:scale-110 bg-white bg-opacity-10`} >
                    read more
                    </div>
            </div>
          <Image src={Demo1} alt="" objectFit="cover" layout="fill" className="group-hover:scale-110 transition-all" />
          </div>
        </div>
        <div className=" w-[50%] h-full relative p-5 flex flex-wrap items-end justify-around flex-col">
          <div className="w-full h-1/2  flex pb-1">
            <div className="w-1/2 bg-slate-500 relative h-full ml-2 group overflow-hidden">
            <div className="h-full w-full absolute bg-black bg-opacity-60 z-20 cursor-pointer flex items-center justify-center" >
                    <div className={`border-2 border-white w-32 h-12 rounded-sm flex justify-center items-center text-2xl text-white ${fonts.font_8.className} transition-all hover:scale-110`} >
                    read more
                    </div>
            </div>
            
                <Image src={Demo2} alt="" objectFit="cover" layout="fill"  className="group-hover:scale-110 transition-all"/></div>
            <div className="w-1/2 bg-slate-500 relative h-full ml-2 group overflow-hidden">
            <div className="h-full w-full absolute bg-black bg-opacity-60 z-20 cursor-pointer flex items-center justify-center" >
                    <div className={`border-2 border-white w-32 h-12 rounded-sm flex justify-center items-center text-2xl text-white ${fonts.font_8.className} transition-all hover:scale-110`} >
                    read more
                    </div>
            </div>
            
                <Image src={Demo3} alt="" objectFit="cover" layout="fill"  className="group-hover:scale-110 transition-all"/></div>
          </div>

          <div className="w-full h-1/2  flex pt-1">
            <div className="w-1/2 bg-slate-500 relative h-full ml-2 group overflow-hidden">
            
            <div className="h-full w-full absolute bg-black bg-opacity-60 z-20 cursor-pointer flex items-center justify-center" >
                    <div className={`border-2 border-white w-32 h-12 rounded-sm flex justify-center items-center text-2xl text-white ${fonts.font_8.className} transition-all hover:scale-110`} >
                    read more
                    </div>
            </div>
                <Image src={Demo4} alt="" objectFit="cover" layout="fill"  className="group-hover:scale-110 transition-all"/></div>
            <div className="w-1/2 bg-slate-500 relative h-full ml-2 group overflow-hidden">
            
            <div className="h-full w-full absolute bg-black bg-opacity-60 z-20 cursor-pointer flex items-center justify-center" >
                    <div className={`border-2 border-white w-32 h-12 rounded-sm flex justify-center items-center text-2xl text-white ${fonts.font_8.className} transition-all hover:scale-110`} >
                    read more
                    </div>
            </div>
                <Image src={Demo5} alt="" objectFit="cover" layout="fill"   className="group-hover:scale-110 transition-all"/></div>
          </div>
        </div>
      </div>
    </div>
  );
}
