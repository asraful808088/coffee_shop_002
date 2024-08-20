"use client";
import CartIcon from "@/app/assets/icon/cart-large-minimalistic-svgrepo-com.svg";
import FavoIcon from "@/app/assets/icon/favorite-svgrepo-com (1).svg";
import CoffeeLogo from "@/app/assets/icon/logo.svg";
import LoginIcon from "@/app/assets/icon/noun-login-6292758.svg";
import SearchIcon from "@/app/assets/icon/search-icon.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { fonts } from "../fonts/font";
interface NavheaderProps {
  bgTransparent: boolean;
  hidddenLink: boolean;
}
export default function Navheader(props: NavheaderProps) {
  const p = usePathname();

  return (
    <div className="w-full">
      <div
        className={` h-28  w-full left-0 top-0 absolute  ${
          props.bgTransparent ? "" : "bg-black"
        } bg-opacity-50`}
      ></div>
      <div className={`w-full   h-28 px-20 flex bg-transparent z-20 relative`}>
        <div className="w-[33.333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333%]   flex p-2">
          <div className=" h-16 w-16 ">
            <CoffeeLogo fill="white" />
          </div>
        </div>
        <div
          className={`${
            props.hidddenLink ? "flex" : "hidden"
          } w-[33.333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333%]`}
        ></div>
        <div
          className={`w-[33.333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333%] h-full  ${
            !props.hidddenLink ? "lg:flex hidden" : "hidden"
          }  justify-center items-center coffee-font ${
            fonts.font_1.className
          } `}
        >
          <Link
            href="/"
            className={`mx-3 text-xs cursor-pointer ${
              p == "/" ? "text-orange-400" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`mx-3 text-xs cursor-pointer whitespace-nowrap ${
              p == "/about" ? "text-orange-400" : ""
            }`}
          >
            ABOUT US
          </Link>
          <Link
            href="/service"
            className={`mx-3 text-xs cursor-pointer ${
              p == "/service" ? "text-orange-400" : ""
            }`}
          >
            SERVICES
          </Link>
          <div
            className={`mx-3 text-xs cursor-pointer flex justify-center group ${
              p == "/items/tea" || p == "/items/coffee" ? "text-orange-400" : ""
            }`}
          >
            <div className="absolute hidden group-hover:flex -bottom-10 bg-white  w-40 h-20 flex-col justify-center items-center">
              <Link
                href="/items/tea"
                className={`text-black w-full py-2 text-center uppercase ${
                  p == "/items/tea" ? "text-orange-400" : ""
                }`}
              >
                tea
              </Link>
              <hr className="w-full" />
              <Link
                href="/items/coffee"
                className={`text-black w-full py-2 text-center uppercase ${
                  p == "/items/coffee" ? "text-orange-400" : ""
                }`}
              >
                coffee
              </Link>
            </div>
            <div>items</div>
          </div>
          <Link
            href="/blog"
            className={`mx-3 text-xs cursor-pointer ${
              p == "/blog" ? "text-orange-400" : ""
            }`}
          >
            BLOG
          </Link>
          <Link
            href="/contact"
            className={`mx-3 text-xs cursor-pointer ${
              p == "/contact" ? "text-orange-400" : ""
            }`}
          >
            CONTACTS
          </Link>
        </div>
        <div className="w-[33.333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333%] h-full  flex items-center justify-end">
          <div className="h-7 w-7  mx-2 cursor-pointer p-[4px]">
            <SearchIcon fill="white" stroke="white" />
          </div>
          <div className="h-7 w-7  mx-2 cursor-pointer relative">
            <div className="h-5 w-5 flex items-center justify-center bg-gray-600 absolute text-[9px] rounded-full text-white -right-2 -top-1 ">
              99+
            </div>
            <CartIcon />
          </div>
          <div className="h-7 w-7  mx-2 cursor-pointer p-[4px] relative">
            <div className="h-5 w-5 flex items-center justify-center bg-gray-600 absolute text-[9px] rounded-full text-white -right-2 -top-1 ">
              99+
            </div>
            <FavoIcon stroke="white" />
          </div>
          <div className="h-7 w-7   cursor-pointer scale-125 mx-3">
            <LoginIcon fill="white" stroke="white" />
          </div>
        </div>
      </div>
    </div>
  );
}
