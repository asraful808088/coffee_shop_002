import DisplayImage from "@/app/assets/demo/New folder/full-shot-people-sitting-together-table.jpg";
import AddressIcon from "@/app/assets/icon/address-svgrepo-com.svg";
import EmailIcon from "@/app/assets/icon/email-open-svgrepo-com.svg";
import PhoneIcon from "@/app/assets/icon/phone-call-svgrepo-com.svg";
import { fonts } from "@/app/components/fonts/font";
import Footer from "@/app/components/footer/footer";
import Navheader from "@/app/components/nav-header/navHeader";
import Image from "next/image";
export default function Contact() {
  return (
    <div className="w-full">
      <div className="w-full relative h-[750px] bg-slate-400">
        <div className="w-full h-full absolute flex flex-col">
          <div className=" w-full h-28 z-10 relative "></div>
          <div className="bg-black bg-opacity-50 w-full flex-grow z-10 relative flex justify-center items-center flex-col">
            <div className={`${fonts.font_7.className} text-white text-7xl`}>
              Contact Us
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
      <div className="w-[1600px]   m-auto relative mt-28">
        <div
          className={`relative capitalize text-7xl  ${fonts.font_7.className} text-center text-white`}
        >
          address & location
        </div>
        <div className="w-full h-[600px] bg-slate-100 mt-16 relative">
          <iframe
            className="w-full h-full relative"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.44027225791905!2d90.50320106104017!3d23.63858248553691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b10812a520a3%3A0x6d3af4457bec4c90!2sNarayanganj!5e0!3m2!1sen!2sbd!4v1718723243695!5m2!1sen!2sbd"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-full  mt-20 flex justify-center  ">
          <div className="w-[50%]">
            <div
              className={`text-5xl  capitalize pl-20 text-white  ${fonts.font_7.className}`}
            >
              Information
            </div>
            <div className="w-full   mb-20 mt-10 p-10 px-5 text-white flex flex-wrap ">
              <div className="w-fit h-[200px]  my-4 flex px-2 scale-[0.9]">
                <div className="h-[150px] w-[150px] flex justify-center items-center">
                  <div className="h-[150px] w-[150px]  ">
                    <AddressIcon />
                  </div>
                </div>
                <div className="w-full relative py-5 ml-2">
                  <div
                    className={`w-full font-extrabold text-2xl  ${fonts.font_7.className}`}
                  >
                    Address
                  </div>
                  <div className={`  w-[200px] ${fonts.font_11.className}`}>
                    Head Office: 28 Kazi Nazrul Islam Ave,Navana Zohura Square,
                    Dhaka 1000
                  </div>
                </div>
              </div>

              <div className="w-fit  h-[200px]  my-4 flex px-2 scale-[0.9]">
                <div className="h-[150px] w-[150px] flex justify-center items-center">
                  <div className="h-[150px] w-[150px]  p-10">
                    <PhoneIcon />
                  </div>
                </div>
                <div className="w-full relative py-5 ml-2">
                  <div
                    className={`w-full font-extrabold text-2xl  ${fonts.font_7.className}`}
                  >
                    Phone & Hot-Line
                  </div>
                  <div className={`w-[40%] ${fonts.font_11.className}`}>
                    <div className={` ${fonts.font_11.className} my-2`}>
                      +8801827334764
                    </div>
                    <div className={` ${fonts.font_11.className} my-2`}>
                      +8801827334762
                    </div>
                    <div className={` ${fonts.font_11.className} my-2`}>
                      +8801827334763
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-fit  h-[200px]  my-4 flex px-2 scale-[0.9]">
                <div className="h-[150px] w-[150px] flex justify-center items-center">
                  <div className="h-[150px] w-[150px]  p-5">
                    <EmailIcon />
                  </div>
                </div>
                <div className="w-full relative py-5 ml-2">
                  <div
                    className={`w-full font-extrabold text-2xl  ${fonts.font_7.className}`}
                  >
                    Email & Social Media
                  </div>
                  <div className={`w-[40%] ${fonts.font_11.className}`}>
                    <div className={` ${fonts.font_11.className} my-2`}>
                      info@gmail.com
                    </div>
                    <div className={` ${fonts.font_11.className} my-2`}>
                      info@hotmail.com
                    </div>
                    <div className={`${fonts.font_11.className} my-2`}>
                      facebook.com/coffees
                    </div>
                    <div className={` ${fonts.font_11.className} my-2`}>
                      instagram.com/coffees
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <div
              className={`text-5xl capitalize pl-8 text-white ${fonts.font_7.className}`}
            >
              Your Objection
            </div>
            <div className="w-full   mb-20 mt-10 p-10">
              <div className={`w-full my-4 flex ${fonts.font_7.className} `}>
                <div className="w-[50%] h-[40px]  mr-1 bg-white">
                  <input
                    className={`bg-transparent border-none outline-none h-full w-full px-1  ${fonts.font_4.className}`}
                    placeholder="name"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="w-[50%] h-[40px]  ml-1 bg-white">
                  <input
                    className={`bg-transparent border-none outline-none h-full w-full px-1  ${fonts.font_4.className}`}
                    placeholder="email"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="w-full my-4 h-[40px] bg-white ">
                <input
                  className={`bg-transparent border-none outline-none h-full w-full px-1  ${fonts.font_4.className}`}
                  placeholder="subject"
                  type="text"
                  name=""
                  id=""
                />
              </div>
              <div className="w-full my-4 h-[500px] bg-white ">
                <textarea
                  name=""
                  id=""
                  className={`h-full w-full p-2 border-none outline-none  resize-none ${fonts.font_4.className}`}
                  placeholder="text"
                ></textarea>
              </div>
              <div className="w-full flex justify-end">
                <div
                  role="button"
                  className={`px-8 py-2 w-full text-center bg-white text-black rounded-sm cursor-pointer text-xl transition-all ${fonts.font_4.className}`}
                >
                  Submit
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
