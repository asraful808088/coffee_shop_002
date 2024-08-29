"use client";
import Bg from "@/app/assets/bg/bg4.png";
import Image1 from "@/app/assets/coffee/andres-vera-BewKTZMv7V0-unsplash.jpg";
import AddCartIcon from "@/app/assets/icon/cart-plus-svgrepo-com.svg";
import LikeIcon from "@/app/assets/icon/favorite-svgrepo-com (1).svg";
import OptionIcon from "@/app/assets/icon/option.svg";
import TokenIcon from "@/app/assets/icon/token.svg";
import TransitionIcon from "@/app/assets/icon/wallet-svgrepo-com.svg";
import { fonts } from "@/app/components/fonts/font";
import Footer from "@/app/components/footer/footer";
import LoginAndCreateToast from "@/app/components/login_and_create/toast";
import Navheader from "@/app/components/nav-header/navHeader";
import ProdectCard from "@/app/components/prodectCard/card";
import RatingComponent from "@/app/components/starbar/starbar";
import Toast from "@/app/components/toast/toast";
import favoritePost from "@/app/network/favorite/favorite";
import { injectProdect } from "@/app/redux/cart/actions";
import { singleToastActive } from "@/app/redux/toats/action";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface ProdectReviewProps {
  prodectDetails: Object;
  prodectItems: Array;
  isLike: boolean;
}
export default function ProdectReview(props: ProdectReviewProps) {
  const navigate = useRouter();
  const [imageList, setImageList] = useState([]);
  const [activeImage, setActiveImage] = useState({});
  const [toastActive, setToastActive] = useState(false);
  const [activeLoginToast, setActiveLoginToast] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    if (props.prodectDetails) {
      setImageList([
        { ...props?.prodectDetails?.mainImage },
        ...props.prodectDetails?.imageItems,
      ]);
      setActiveImage({ ...props?.prodectDetails?.mainImage });
    }
  }, [props.prodectDetails]);
  return (
    <div className="w-full relative">
      <LoginAndCreateToast
        activeToast={activeLoginToast}
        onCloseToast={() => {
          setActiveLoginToast(false);
        }}
      />
      <Toast center activetoast={toastActive}>
        <div className="aspect-video w-[1200px] bg-white shadow-lg ">
          <div className="w-full relative p-2 pr-3 flex items-end justify-end cursor-pointer">
            <div
              className="rotate-45 text-3xl w-fit h-fit text-black font-extrabold"
              onClick={() => {
                setToastActive(false);
              }}
            >
              +
            </div>
          </div>
          <div className="w-full relative h-40 ">
            <div className="w-40 relative ml-4">
              <TransitionIcon />
            </div>
          </div>
          <div className="w-full relative px-3 flex">
            <div className="w-1/2 relative">
              <h3 className={`${fonts.font_1.className}`}>Token</h3>
              <div className="w-full relative pr-5">
                <div className="w-full relative bg-slate-500 mt-2   ">
                  <div className="w-full relative flex items-center">
                    <div className="h-12 aspect-square px-2  flex items-center">
                      <TokenIcon />
                    </div>
                    <div className={`${fonts.font_7.className} h-fit`}>
                      Token-Name
                    </div>
                  </div>
                  <div className=" px-3 ">asdasdsa</div>
                </div>
              </div>
            </div>
            <div className="w-1/2 relative">
              <h3 className={`${fonts.font_1.className}`}>Purchase History</h3>
            </div>
          </div>
        </div>
      </Toast>

      <Navheader
        hidddenLink
        onloginActive={() => {
          setActiveLoginToast(true);
        }}
        onLike={() => {
          if (!(userInfo.email && userInfo.name)) {
            setActiveLoginToast(true);
          } else {
          }
        }}
      />
      <div className="w-full h-full flex justify-center items-center ">
        <div className="w-full h-auto  relative overflow-hidden ">
          <Image
            src={Bg}
            layout="fill"
            objectFit="cover"
            alt="cover"
            className="absolute h-full w-full opacity-30"
          />
          <div className="relative max-w-[1600px] w-full mt-20 flex justify-center items-center lg:items-start m-auto flex-col lg:flex-row">
            <div className="w-full md:w-[700px] lg:w-1/2 h-full relative flex justify-center items-center flex-col p-3 xl:p-0 flex-grow ">
              <div className=" aspect-square xl:w-[600px] w-full  relative p-4 xl:p-0">
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
              <div className="h-auto w-full relative py-2 flex justify-center flex-wrap">
                {imageList.map((element, index) => {
                  return (
                    <div
                      key={index}
                      className={`h-20 w-20 bg-slate-400 rounded-sm mx-2 cursor-pointer relative mt-1${
                        `${element?.host}${element?.path}${element?.webUrl}` ==
                        `${activeImage?.host}${activeImage?.path}${activeImage?.webUrl}`
                          ? "border-2"
                          : ""
                      }`}
                      onClick={() => {
                        setActiveImage(element);
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
            <div className="h-full relative lg:w-1/2 p-3 lg:p-0">
              <div
                className={`${fonts.font_3.className} text-3xl lg:text-5xl text-white`}
              >
                {props.prodectDetails?.header}
              </div>
              <div
                className={`${fonts.font_11.className} text-white text-xs sm:text-sm xl:text-base w-full xl:w-[95%] 2xl:w-[80%] mt-5 `}
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
                  {props.prodectDetails.price}$ {props.prodectDetails.discount?<strike>({props.prodectDetails.price+ (props.prodectDetails.price + (props.prodectDetails?.discount/100))})</strike>:null}
                </span>
              </div>
              <div className="w-[80%]">
                <span
                  className={`${fonts.font_3.className} text-3xl text-white`}
                >
                  status
                </span>{" "}
                <span className={`${fonts.font_11.className} text-white ml-2`}>
                  {props.prodectDetails?.quantity?"In Stock":"out of stock"}
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
                <div
                  className="h-10 w-10 relative text-white cursor-pointer border-2 border-white flex justify-center items-center text-2xl hover:scale-[0.99] transition-all"
                  onClick={() =>
                    setCartCount((value) => {
                      return value + 1;
                    })
                  }
                >
                  +
                </div>
                <div className="w-14 h-10  ">
                  <input
                    type="number"
                    name=""
                    id=""
                    value={cartCount}
                    className="h-full w-full relative border-2 bg-transparent flex justify-center items-center text-white text-center outline-none"
                    min={0}
                  />
                </div>
                <div
                  className="h-10 w-10 relative text-white cursor-pointer border-2 border-white flex justify-center items-center text-2xl hover:scale-[0.99] transition-all"
                  onClick={() =>
                    setCartCount((value) => {
                      if (value <= 0) {
                        return 0;
                      }
                      return value - 1;
                    })
                  }
                >
                  -
                </div>
              </div>

              <div className="w-full mt-4 flex items-center ">
                <div
                  className={`h-10 w-36 bg-white mr-2 rounded-sm flex items-center justify-center ${fonts.font_7.className} cursor-pointer`}
                  onClick={() => {
                    if (!(userInfo.email && userInfo.name)) {
                      setActiveLoginToast(true);
                    } else {
                    }
                  }}
                >
                  Buy
                </div>
                <div
                  className={`h-10 w-36 bg-white mr-2 rounded-sm flex items-center justify-center ${fonts.font_7.className} cursor-pointer`}
                  onClick={() => {
                    try {
                      let listOfProdect = localStorage.getItem("cart_items");

                      if (!listOfProdect) {
                        const addItems = [
                          {
                            prodectName: props.prodectDetails?.header,
                            prodectCount: cartCount,
                            info: {
                              ...props.prodectDetails,
                            },
                          },
                        ];
                        dispatch(injectProdect(addItems));
                        localStorage.setItem(
                          "cart_items",
                          JSON.stringify(addItems)
                        );
                      } else {
                        listOfProdect = JSON.parse(listOfProdect);
                        const newItems = listOfProdect?.find(
                          (element2, index2) => {
                            return (
                              element2.prodectName ==
                              props?.prodectDetails?.header
                            );
                          }
                        );
                        if (!newItems) {
                          const addItems = [
                            ...listOfProdect,

                            {
                              prodectName: props.prodectDetails?.header,
                              prodectCount: cartCount,
                              info: {
                                ...props.prodectDetails,
                              },
                            },
                          ];
                          dispatch(injectProdect(addItems));
                          localStorage.setItem(
                            "cart_items",
                            JSON.stringify(addItems)
                          );
                        } else {
                          const newItems = listOfProdect?.map((ele2, index) => {
                            if (
                              ele2?.prodectName == props.prodectDetails?.header
                            ) {
                              return {
                                prodectName: props.prodectDetails?.header,
                                prodectCount: cartCount,
                                info: {
                                  ...props.prodectDetails,
                                },
                              };
                            }
                            return ele2;
                          });
                          dispatch(injectProdect(newItems));
                          localStorage.setItem(
                            "cart_items",
                            JSON.stringify(newItems)
                          );
                        }
                      }

                      dispatch(
                        singleToastActive({
                          icon: AddCartIcon,
                          header: props.prodectDetails.header,
                          description: props.prodectDetails.description,
                        })
                      );
                    } catch (error) {
                      const addItems = [
                        {
                          prodectName: props.prodectDetails?.header,
                          prodectCount: cartCount,
                          info: {
                            ...props.prodectDetails,
                          },
                        },
                      ];
                      dispatch(injectProdect(addItems));
                      localStorage.setItem(
                        "cart_items",
                        JSON.stringify(addItems)
                      );
                    }
                  }}
                >
                  Add-Cart
                </div>

                <div
                  className="h-6 w-6 ml-2 cursor-pointer"
                  onClick={() => {
                    if (!(userInfo.email && userInfo.name)) {
                      setActiveLoginToast(true);
                    } else {
                      favoritePost(
                        {
                          email: userInfo.email,
                          prodect_name: props.prodectDetails?.header,
                          convert:props.isLike
                        },
                        (res) => {
                          if (res.data) {
                          }
                        }
                      );
                    }
                  }}
                >
                  <LikeIcon fill="white" />
                </div>
                {userInfo.email && userInfo.name ? (
                  <div
                    className="h-7 w-7 ml-4 cursor-pointer"
                    onClick={() => {
                      setToastActive(true);
                    }}
                  >
                    <OptionIcon fill="white" />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1600px] w-full relative m-auto mt-20">
        <div
          className={`text-center capitalize text-4xl lg:text-7xl ${fonts.font_7.className} text-white mb-5`}
        >
          suggesting Prodect
        </div>
        <div className="w-full relative p-2 px-4 grid  grid-cols-prodect001-auto-fit gap-5 ">
          {props?.prodectItems?.map((element, index) => {
            return (
              <ProdectCard
                marginOff
                widthFull
                id={element._id}
                onDisplay={(e) => {
                  navigate.push(`/review/${e.prodectId}`, { scroll: true });
                }}
                key={index}
                image={`${element?.mainImage?.host}${element?.mainImage?.path}${element?.mainImage?.webUrl}`}
                header={element.header}
                des={element.description}
                price={element.price}
                discount={element.discount}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
