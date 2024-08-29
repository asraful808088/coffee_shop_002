import CoffeeLogo from "@/app/assets/icon/logo copy.svg";
import { useState } from "react";
import Toast from "../toast/toast";
import CreateAccount from "./create";
import Login from "./login";
interface LoginAndCreateToastProps {
  activeToast: boolean;
  onCloseToast: any;
}

export default function LoginAndCreateToast(props: LoginAndCreateToastProps) {
  const [loginActive, setloginActive] = useState(true);
  return (
    <Toast activetoast={props.activeToast} center>
      <div className={`h-[650px] aspect-[1.5/.9] bg-white flex flex-col`}>
        <div className="w-full relative flex justify-end pr-3 mt-2">
          <div
            className="rotate-45 font-extrabold h-fit w-fit text-3xl cursor-pointer"
            onClick={() => {
              setloginActive(true);
              if (props.onCloseToast) {
                props.onCloseToast();
              }
            }}
          >
            +
          </div>
        </div>
        <div className="w-full relative flex flex-grow">
          <div className="h-full relative px-2 flex items-center pl-20">
            <div className="h-[250px] aspect-square relative -translate-y-[50%]">
              <CoffeeLogo fill="black" />
            </div>
          </div>
          {loginActive ? (
            <Login
              onClose={() => {
                if (props.onCloseToast) {
                  props.onCloseToast();
                }
              }}
              onChangePage={() => {
                setloginActive(!loginActive);
              }}
            />
          ) : (
            <CreateAccount
              onFormfinish={() => {
                setloginActive(!loginActive);
              }}
              onChangePage={() => {
                setloginActive(!loginActive);
              }}
            />
          )}
        </div>
      </div>
    </Toast>
  );
}
