import Cartminus from "@/app/assets/icon/cart-minus-svgrepo-com.svg";
import CartPlus from "@/app/assets/icon/cart-plus-svgrepo-com.svg";
import DeleteIcon from "@/app/assets/icon/delete-button-svgrepo-com.svg";
import Love from "@/app/assets/icon/favorite-svgrepo-com (1).svg";
import LoveActive from "@/app/assets/icon/favorite-svgrepo-com (2).svg";
import { useState } from "react";
import { fonts } from "../fonts/font";
interface ListItems0001Props {
  like: boolean;
  cart: boolean;
  activeCart: boolean;
  name: string;
  prodectCount: Number;
  price: Number;
  onDelete: any;
}
export default function ListItems0001(props: ListItems0001Props) {
  const [prodectCount, setProdectCount] = useState(props.prodectCount ?? 0);
  return (
    <div className="w-full relative  bg-gray-900 text-white p-3 rounded mb-2">
      <div className={`${fonts.font_4.className} text-lg capitalize`}>
        {props.name ?? "Prodect-Name"}{" "}
        <span className="text-xs text-red-600"> {`  out of stock`}</span>
      </div>
      <div className="w-full flex items-center">
        <div
          className={`${fonts.font_4.className} pl-0`}
        >{`Price ${props.price}$ `}</div>
        <div className={`${fonts.font_4.className} pl-0`}>
          {props.activeCart
            ? `/ Total-Price ${props.price ? props.price * prodectCount : 0}$`
            : null}
        </div>
        <div
          className={`flex-grow  ${fonts.font_4.className} flex justify-between items-center`}
        >
          {
            <div className="flex items-center h-8 w-fit bg-slate-400 rounded-md text-gray-200 ml-2">
              {props.activeCart ? (
                <>
                  <div
                    className=" font-mono font-extrabold  aspect-square flex justify-center text-xl cursor-pointer items-center   mx-2 -translate-y-[1px]  "
                    onClick={() => {
                      setProdectCount((s) => s + 1);
                    }}
                  >
                    +
                  </div>
                  <div className="w-5">
                    <input
                      type="number"
                      value={prodectCount}
                      name=""
                      className="h-full w-full relative bg-transparent m-0 text-center"
                      id=""
                      onChange={(e) => {
                        if (e.target.value < 0) {
                          setProdectCount(0);
                        } else {
                          setProdectCount(e.target.value);
                        }
                      }}
                    />
                  </div>
                  <div
                    className="h-4 aspect-square flex justify-center items-center mx-2 text-xl cursor-pointer"
                    onClick={() => {
                      if (prodectCount < 1) {
                        setProdectCount(0);
                      } else {
                        setProdectCount((s) => s - 1);
                      }
                    }}
                  >
                    -
                  </div>
                </>
              ) : null}
            </div>
          }
          <div className="flex items-center">
            <div
              className={`  mr-3  font-extrabold text-2xl font-mono cursor-pointer`}
            >
              {props.activeCart ? (
                <div className="h-full  relative w-4 aspect-square">
                  {props.like ? <LoveActive /> : <Love />}
                </div>
              ) : (
                <div className="h-full  relative  w-5 aspect-square">
                  {!props.cart ? <CartPlus /> : <Cartminus />}
                </div>
              )}
            </div>
            <div
              className=" w-4 aspect-square font-extrabold text-2xl font-mono cursor-pointer"
              onClick={() => {
                if (props.onDelete) {
                  props.onDelete();
                }
              }}
            >
              <DeleteIcon fill="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
