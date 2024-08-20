"use client";
import Bg from "@/app/assets/bg/bg4.png";
import Image1 from "@/app/assets/coffee/andres-vera-BewKTZMv7V0-unsplash.jpg";
import LikeIcon from "@/app/assets/icon/favorite-svgrepo-com (1).svg";
import { fonts } from "@/app/components/fonts/font";
import Footer from "@/app/components/footer/footer";
import Navheader from "@/app/components/nav-header/navHeader";
import ProdectCard from "@/app/components/prodectCard/card";
import RatingComponent from "@/app/components/starbar/starbar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
interface ProdectReviewProps {
  prodectDetails: Object;
  prodectItems: Array;
}
export default function ProdectReview(props: ProdectReviewProps) {
  console.log(props.prodectDetails);
  const navigate = useRouter();
  const [imageList, setImageList] = useState([]);
  const [activeImage, setActiveImage] = useState({});
  useEffect(() => {
    if (props.prodectDetails) {
      setImageList([
        { ...props?.prodectDetails?.mainImage },
        ...props.prodectDetails?.imageItems,
      ]);
      setActiveImage({ ...props?.prodectDetails?.mainImage })
    }
  }, [props.prodectDetails]);
  return (
    <div className="w-full relative">
      <Navheader hidddenLink />
      <div className="w-full h-full flex justify-center items-center ">
        <div className="w-full h-[900px]  relative overflow-hidden ">
          <Image
            src={Bg}
            layout="fill"
            objectFit="cover"
            alt="cover"
            className="absolute h-full w-full opacity-30"
          />
          <div className="relative w-[1600px] mt-20 flex justify-center  m-auto ">
            <div className=" w-1/2 h-full relative flex justify-center items-center flex-col ">
              <div className="h-[600px] w-[600px]  relative">
                <Image
                  src={
                    activeImage.webUrl
                      ? `${activeImage.host}${activeImage?.path}${activeImage.webUrl}`
                      : Image1
                  }
                  layout="fill"
                  objectFit="cover"
                  alt="cover"
                  className=" h-full w-full "
                />
              </div>
              <div className="h-40 w-full relative py-2 flex justify-center">
                {imageList.map((element, index) => {
                  return (
                    <div
                      key={index}
                      className={`h-20 w-20 bg-slate-400 rounded-sm mx-2 cursor-pointer relative ${
                        `${element?.host}${element?.path}${element?.webUrl}` == `${activeImage?.host}${activeImage?.path}${activeImage?.webUrl}` ? "border-2" : ""
                      }`}
                      onClick={()=>{
                        setActiveImage(element)
                      }}
                    >
                      <div className="absolute h-full w-full bg-slate-800 animate-pulse"></div>
                      <Image
                        src={
                          element?.webUrl
                            ? `${element?.host}${element?.path}${element?.webUrl}`
                            : Image1
                        }
                        layout="fill"
                        objectFit="cover"
                        alt="cover"
                        className=" h-full w-full "
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="h-full relative w-1/2 ">
              <div className={`${fonts.font_3.className} text-5xl text-white`}>
                {props.prodectDetails?.header}
              </div>
              <div
                className={`${fonts.font_11.className} text-white w-[80%] mt-5 `}
              >
                {props.prodectDetails?.description}
              </div>
              <br />
              <div className="w-[80%]">
                <span
                  className={`${fonts.font_3.className} text-3xl text-white`}
                >
                  price
                </span>{" "}
                <span className={`${fonts.font_11.className} text-white ml-2`}>
                  900$
                </span>
              </div>
              <div className="w-[80%]">
                <span
                  className={`${fonts.font_3.className} text-3xl text-white`}
                >
                  status
                </span>{" "}
                <span className={`${fonts.font_11.className} text-white ml-2`}>
                  In Stock
                </span>
              </div>
              <div className="w-[80%] flex items-center">
                <span
                  className={`${fonts.font_3.className} text-3xl text-white`}
                >
                  rate
                </span>{" "}
                <span className={`${fonts.font_11.className} text-white ml-2`}>
                  <RatingComponent />
                </span>
              </div>

              <div className="w-[80%]">
                <span
                  className={`${fonts.font_3.className} text-3xl text-white`}
                >
                  review
                </span>{" "}
                <span
                  className={`${fonts.font_11.className} text-white ml-2 cursor-pointer hover:underline`}
                >
                  comment(12)
                </span>
              </div>

              <div className="w-fit relative flex mt-2">
                <div className="h-10 w-10 relative text-white cursor-pointer border-2 border-white flex justify-center items-center text-2xl hover:scale-[0.99] transition-all">
                  +
                </div>
                <div className="w-14 h-10  ">
                  <input
                    type="number"
                    name=""
                    id=""
                    value={0}
                    className="h-full w-full relative border-2 bg-transparent flex justify-center items-center text-white text-center outline-none"
                    min={0}
                  />
                </div>
                <div className="h-10 w-10 relative text-white cursor-pointer border-2 border-white flex justify-center items-center text-2xl hover:scale-[0.99] transition-all">
                  -
                </div>
              </div>

              <div className="w-full mt-4 flex items-center ">
                <div
                  className={`h-10 w-36 bg-white mr-2 rounded-sm flex items-center justify-center ${fonts.font_7.className} cursor-pointer`}
                >
                  Buy
                </div>
                <div
                  className={`h-10 w-36 bg-white mr-2 rounded-sm flex items-center justify-center ${fonts.font_7.className} cursor-pointer`}
                >
                  Add-Cart
                </div>

                <div className="h-6 w-6 ml-2 cursor-pointer">
                  <LikeIcon fill="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1600px] relative m-auto mt-20">
        <div
          className={`text-center capitalize text-7xl ${fonts.font_7.className} text-white`}
        >
          suggesting Prodect
        </div>
        <div className="w-full relative py-2 flex justify-center flex-wrap">
          {props?.prodectItems?.map((element, index) => {
            return (
              <ProdectCard
                id={element._id}
                onDisplay={(e) => {
                  navigate.push(`/review/${e.prodectId}`, { scroll: true });
                }}
                key={index}
                image={`${element?.mainImage?.host}${element?.mainImage?.path}${element?.mainImage?.webUrl}`}
                header={element.header}
                des={element.description}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
