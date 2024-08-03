import { tabItem } from "../../index";
import AboutUs from "./about";
import Blog from "./blog/blog";
import Contact from "./contact/contact";
import Home from "./home";
import Service from "./service/service";
import style from "./style.module.css";
// eslint-disable-next-line react/prop-types
export default function TabPage({ active }) {
  return (
    <div className={`${style.main}`}>
      {tabItem.HOME == active ? (
        <Home />
      ) : tabItem.ABOUT == active ? (
        <AboutUs />
      ) : tabItem.BLOG == active ? (
        <Blog />
      ) : tabItem.CONTACT == active ? (
        <Contact />
      ) : tabItem.SERVICE == active ? (
        <Service />
      ) : null}
      {/* <AboutUs /> */}
    </div>
  );
}
