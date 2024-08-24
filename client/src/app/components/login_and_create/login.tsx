import { fonts } from "../fonts/font";
interface LoginProps {
  onChangePage: any;
}
export default function Login(props: LoginProps) {
  return (
    <div className="h-full relative flex-grow p-10">
      <div className={`${fonts.font_3.className} text-5xl font-extrabold mt-3`}>
        Login
      </div>
      <div className="mt-20"></div>
      <div className="w-full max-w-[450px] h-11 bg-gray-200 shadow-lg mt-2 relative ">
        <input
          type="email"
          name="email"
          placeholder="email"
          className={`h-full w-full relative outline-none border-none bg-transparent px-3 text-xl   ${fonts.font_4.className}`}
          id="email"
        />
      </div>
      <div className="w-full max-w-[450px] h-11 bg-gray-200 mt-5 relative shadow-lg ">
        <input
          type="password"
          name="password"
          placeholder="password"
          className={`h-full w-full relative outline-none border-none bg-transparent px-3 text-xl   ${fonts.font_4.className}`}
          id="password"
        />
      </div>
      <div
        className="w-full p-1 relative cursor-pointer mt-2 text-sm hover:text-pink-900"
        onClick={() => props.onChangePage()}
      >
        Create Account !!!
      </div>
      <div className="w-full flex">
        <div
          className={`px-10 relative py-2 bg-black text-white  ${fonts.font_4.className} mt-2 cursor-pointer`}
        >
          Login
        </div>
      </div>
    </div>
  );
}
