import { getContactInfo, postHeroContext } from "network/contact/contact";
import { useEffect, useState } from "react";
import SimpleHeroImage from "../components/simpleHeroImage/simpleHeroImage";
import style from "./style.module.css";
export default function Contact() {
  const [heroImage, setHeroImage] = useState({
    fullFile: null,
    title: "",
    description: "",
    webUrl: null,
    host: "",
    path: "",
  });
  const [removeImage, setRemoveImage] = useState([]);
  const [oldImage, setOldImage] = useState(null);
  useEffect(() => {
    getContactInfo((res) => {
      setHeroImage({
        ...heroImage,
        title: res?.data?.title,
        description: res?.data?.description,
        webUrl: res?.data?.image[0].webUrl,
        host: res?.data?.image[0]?.host,
        path: res?.data?.image[0]?.path,
      });
      setOldImage(res?.data?.image[0]);
    });
  }, []);
  return (
    <div className={style.main}>
      <SimpleHeroImage
        onClose={() => {
          setHeroImage({
            ...heroImage,
            fullFile: null,
            webUrl: null,
          });
        }}
        onSubmit={() => {
          postHeroContext({ ...heroImage, oldImage: oldImage }, (res) => {
            setHeroImage({
              ...heroImage,
              title: res?.data?.data?.title,
              description: res?.data?.data?.description,
              webUrl: res?.data?.data?.image[0].webUrl,
              host: res?.data?.data?.image[0]?.host,
              path: res?.data?.data?.image[0]?.path,
            });
            setOldImage(res?.data?.data?.image[0]);
          });
        }}
        fullFile={heroImage?.fullFile}
        title={heroImage.title}
        description={heroImage.description}
        remoteUrl={
          heroImage.webUrl ? `${heroImage.host}${heroImage.path}${heroImage.webUrl}` : null
        }
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
