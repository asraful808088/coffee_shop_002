"use client"
import DemoIcon from "@/app/assets/icon/blog.svg";
import ContactIcon from "@/app/assets/icon/contact.svg";
import CrossIcon from "@/app/assets/icon/cross.svg";
import HomeIcon from "@/app/assets/icon/home.svg";
import AboutIcon from "@/app/assets/icon/info.svg";
import ItemsIcon from "@/app/assets/icon/items.svg";
import CoffeeLogo from "@/app/assets/icon/logo.svg";
import ServiceIcon from "@/app/assets/icon/service.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { fonts } from "../fonts/font";
interface NavMenuProps {
  activeNav: boolean;
  onClose: any;
}
export default function NavMenu(props: NavMenuProps) {
  const p = usePathname();
  return (
    <>
      <div
        className={`max-w-[450px] w-full fixed top-0 bg-gray-950 h-screen block lg:hidden transition-transform z-[99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999] ${
          props.activeNav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full flex px-2 mt-2  h-16">
          <div className="flex-grow flex  relative top-0 ">
            <div className="aspect-square h-10 relative cursor-pointer p-1 mr-2">
              <CoffeeLogo />
            </div>
            <div
              className={`text-white  translate-y-[38%]  ${fonts.font_1.className}`}
            >
              Coffee Cove
            </div>
          </div>
          <div
            className="w-10 h-10 relative cursor-pointer p-1"
            onClick={props.onClose}
          >
            <CrossIcon />
          </div>
        </div>
        <div className="w-full relative p-5 px-2">
          <NavItems href="/" name="Home" icon={HomeIcon} active={p == "/"} />
          <NavItems
            href="/about"
            name="About Us"
            icon={AboutIcon}
            active={p == "/about"}
          />
          <NavItems
            href="/service"
            name="Service"
            icon={ServiceIcon}
            active={p == "/service"}
          />
          <NavItems
            href=""
            name="Items"
            icon={ItemsIcon}
            active={p == "/items/tea" || p == "/items/coffee"}
          />
          <NavItems
            href="/blog"
            name="Blog"
            icon={DemoIcon}
            active={p == "/blog"}
          />
          <NavItems
            href="/contact"
            name="Contacts"
            icon={ContactIcon}
            active={p == "/contact"}
          />
        </div>
      </div>
    </>
  );
}
interface NavItemsProps {
  name: string;
  icon: any;
  href: string;
  active: boolean;
}
function NavItems(props: NavItemsProps) {
  return (
    <Link href={props.href ?? "/"}>
      <div className="w-full relative mt-5 cursor-pointer">
        <div className="w-full relative   flex items-center">
          <div className="aspect-square w-7 relative mr-3 ml-1">
            {props.icon ? <props.icon /> : <DemoIcon />}
          </div>
          <div className={`text-white ${fonts.font_4.className} text-lg`}>
            {props.name ?? "Blog"}
          </div>
          {props.active ? (
            <div className="w-1 h-5 bg-white absolute right-1 rounded-lg"></div>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
