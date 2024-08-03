import { postHeroContext } from "network/about/about";
import { useEffect, useState } from "react";
import SimpleHeroImage from "../components/simpleHeroImage/simpleHeroImage";
import style from "./style.module.css";
export default function AboutUs() {
  const [heroImage, setHeroImage] = useState({
    fullFile: null,
    title: "",
    description: "",
    webUrl: null,
    host: "",
  });
  const [removeImage, setRemoveImage] = useState([]);
  useEffect(() => {}, []);
  return (
    <div className={`${style.main}`}>
      <SimpleHeroImage
        onSubmit={() => {
          postHeroContext(heroImage, (res) => {
            console.log(res);
          });
        }}
        fullFile={heroImage?.fullFile}
        title={heroImage.title}
        description={heroImage.description}
        remoteUrl={heroImage.webUrl}
        onTitle={(onTitle) => {
          setHeroImage({
            ...heroImage,
            title: onTitle,
          });
        }}
        onDes={(onDes) => {
          setHeroImage({
            ...heroImage,
            description: onDes,
          });
        }}
        onFile={(file) => {
          setHeroImage({
            ...heroImage,
            fullFile: file.fullFile,
          });
        }}
      />
    </div>
  );
}
