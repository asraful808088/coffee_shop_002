import { TextField } from "@mui/material";
import { getHomeHeroContext, postHomeHeroContext } from "network/page/home";
import { useEffect, useState } from "react";
import isEqual from "utility/isEql/isEql";
import { v4 as uuid } from "uuid";
import { config } from "../../../../../config";
import FileInput from "./components/file/file";
import style from "./style.module.css";
const textContextType = {
  ProdectName: "Prodect-Name",
  BigHeader: "Big-Header",
  Description: "Description",
  PointHeader: "Point-Header",
  PointDescription: "Point-Description",
  Point: "Point",
};
export default function Home(params) {
  const [heroImageContext, setHeroImageContext] = useState({
    image: [],
    header: "",
    title: "",
    description: "",
    buttonHide: false,
  });
  const [uploadedImage, setUploadedImage] = useState([]);
  const [populerBranch, setPopulerBranch] = useState([
    {
      id: "branch001",
      image: {},
      textContext: [],
    },
    {
      image: {},
      id: "branch002",

      textContext: [],
    },
    {
      image: {},
      id: "branch003",

      textContext: [],
    },
    {
      image: {},
      id: "branch004",

      textContext: [],
    },
    {
      image: {},
      id: "branch005",

      textContext: [],
    },
  ]);
  const [newCoffeeItem, setNewCoffeeItem] = useState([1]);
  const setHomeHeroData = (res) => {
    setUploadedImage(res.data?.hero_context?.images);
    setHeroImageContext({
      header: res.data?.hero_context?.header,
      title: res.data?.hero_context?.title,
      description: res.data?.hero_context?.description,
      image: res.data?.hero_context?.images,
    });
  };
  useEffect(() => {
    getHomeHeroContext((res) => {
      if (res.data) {
        setUploadedImage(res.data?.hero_context?.images);
        setHomeHeroData(res);
      }
    });
  }, []);
  const filterImage = () => {
    const removableImageFilter = [];
    uploadedImage.forEach((element, index) => {
      const findObj = heroImageContext?.image?.find((element2, index2) => {
        return isEqual(element, element2);
      });
      if (!findObj) {
        removableImageFilter.push(element);
      }
    });
    return removableImageFilter;
  };
  const updateHeroContent = () => {
    const remobleImage = filterImage();
    postHomeHeroContext(
      {
        heroImageContext,
        removeImage: remobleImage,
      },
      (res) => {
        setHomeHeroData(res);
      }
    );
  };
  return (
    <div className={`${style.main}   `}>
      <div className={`${style.content}`}>
        <h5>Hero-Image</h5>
        <div className={style.contextInput}>
          <div className={style.fileInputBox}>
            {heroImageContext?.image?.map((element, index) => {
              return (
                <FileInput
                  key={index}
                  id={element.id ?? element.webUrl}
                  fileUrl={
                    element.fullFile
                      ? URL.createObjectURL(element.fullFile)
                      : `${config.HOST_NAME}${element.path}${element.webUrl}`
                  }
                  onClear={(id) => {
                    const oldData = heroImageContext;
                    const updateImage = oldData.image.filter((element2, index) => {
                      if (element.webUrl) {
                        return element.webUrl != element2.webUrl;
                      } else {
                        return element.id != element2.id;
                      }
                    });
                    // console.log(updateImage);
                    setHeroImageContext({
                      ...oldData,
                      image: [...updateImage],
                    });
                  }}
                />
              );
            })}

            <FileInput
              onFile={(data) => {
                const oldData = heroImageContext;
                oldData.image.push(data);
                setHeroImageContext({
                  ...heroImageContext,
                });
              }}
            />
          </div>
          <div className={`${style.inputItems}`}>
            <div className={style.input}>
              <TextField
                placeholder="title"
                multiline
                value={heroImageContext.title}
                className={`${style.textinput}`}
                rows={5}
                onChange={(value) => {
                  setHeroImageContext({
                    ...heroImageContext,
                    title: value.target.value,
                  });
                }}
              />
            </div>
            <div className={style.input}>
              <TextField
                placeholder="header"
                multiline
                value={heroImageContext.header}
                className={`${style.textinput}`}
                rows={5}
                onChange={(value) => {
                  setHeroImageContext({
                    ...heroImageContext,
                    header: value.target.value,
                  });
                }}
              />
            </div>
            <div className={style.input}>
              <TextField
                value={heroImageContext.description}
                placeholder="description"
                multiline
                className={`${style.textinput}`}
                rows={5}
                onChange={(value) => {
                  setHeroImageContext({
                    ...heroImageContext,
                    description: value.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>
        {!heroImageContext.buttonHide ? (
          <div className={style.buttonBox}>
            <div className={style.button} onClick={updateHeroContent}>
              Save
            </div>
          </div>
        ) : null}
      </div>

      <div className={`${style.content}`}>
        <h5>Our Populer Branch</h5>
        <div className={`${style.branchItems}`}>
          {populerBranch.map((element, index) => {
            const createId = element.id;
            return (
              <div key={index} className={style.branchItem}>
                <FileInput
                  id={createId}
                  fullWidth
                  fileUrl={
                    element.image?.fullFile?.fullFile
                      ? URL.createObjectURL(element?.image?.fullFile?.fullFile)
                      : null
                  }
                  onClear={(id) => {
                    const items = populerBranch;
                    const newImageList = items.map((element2, index2) => {
                      if (id == element2.id) {
                        return { ...element2, image: {} };
                      }
                      return element2;
                    });
                    setPopulerBranch(newImageList);
                  }}
                  onFile={(file) => {
                    const allItems = populerBranch;
                    const newItems = allItems.map((element, index2) => {
                      if (index == index2) {
                        return {
                          ...element,
                          image: {
                            fullFile: file,
                          },
                          id: createId,
                        };
                      }
                      return { ...element };
                    });
                    setPopulerBranch(newItems);
                  }}
                />
                <div className={style.textContext}>
                  {element?.textContext?.map((element, index) => {
                    return (
                      <TextFieldWithPoint
                        textType={element.type}
                        key={index}
                        value={element.text}
                        onText={({ t, type }) => {
                          const olditems = populerBranch;
                          const newItems = olditems.map((element2, index2) => {
                            if (element2.id == createId) {
                              const textItems = element2.textContext.map((element3, index3) => {
                                if (element3.id == element.id) {
                                  return {
                                    ...element3,
                                    text: t,
                                    type: type,
                                  };
                                }
                                return element3;
                              });
                              return {
                                ...element2,
                                textContext: [...textItems],
                              };
                            }
                            return element2;
                          });
                          setPopulerBranch(newItems);
                        }}
                      />
                    );
                  })}

                  <div
                    onClick={() => {
                      const olditems = populerBranch;
                      const newItems = olditems.map((element2, index2) => {
                        if (element2.id == createId) {
                          return {
                            ...element2,
                            textContext: [
                              ...element2.textContext,
                              {
                                type: "Prodect-Name",
                                text: "",
                                id: uuid(),
                              },
                            ],
                          };
                        }
                        return element2;
                      });
                      setPopulerBranch(newItems);
                    }}
                    className={style.inputAdd}
                  >
                    +
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${style.content}`}>
        <h5>Our New Coffee</h5>
        <div className={`${style.branchItems}`}>
          {newCoffeeItem.map((element, index) => {
            return (
              <div key={index} className={style.branchItem}>
                <FileInput fullWidth />
                <div className={style.textContext}>
                  <TextFieldWithPoint placeholder="name" />
                  <TextFieldWithPoint placeholder="description" />
                  <TextFieldWithPoint placeholder="Person-Name" doubleInput />
                  <div className={style.inputAdd}>+</div>
                </div>
              </div>
            );
          })}
          <div className={`${style.branchItem} ${style.blueprint}`}>
            <div className={style.addIcon}>+</div>
          </div>
        </div>
      </div>

      <div className={`${style.content}`}>
        <h5>Client Review</h5>
        <div className={`${style.branchItems}`}>
          {[1, 1, 1, 1].map((element, index) => {
            return (
              <div key={index} className={style.branchItem}>
                <FileInput fullWidth />
                <div className={style.textContext}>
                  <div className={style.header}>Header</div>
                  <div className={style.des}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus sunt
                    similique assumenda voluptatibus laborum voluptate officiis dolore suscipit
                    exercitationem mollitia quo ex excepturi qui molestiae, dolores dicta, expedita
                    vel blanditiis! Eius exercitationem facere alias esse nam, dolor qui ex illo
                    fuga ipsum dolorem id nisi accusamus laboriosam eos quasi! Aliquam quo nostrum
                    neque quos officiis laborum explicabo odio pariatur illum!
                  </div>
                </div>
              </div>
            );
          })}
          <div className={`${style.branchItem} ${style.blueprint}`}>
            <div className={style.addIcon}>+</div>
          </div>
        </div>
      </div>

      <div className={`${style.content}`}>
        <h5>Our Popular Products</h5>
        <div className={style.offerProdect}></div>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function TextFieldWithPoint({
  // eslint-disable-next-line react/prop-types
  hideSeletor = false,
  // eslint-disable-next-line react/prop-types
  hideArrowButton = false,
  // eslint-disable-next-line react/prop-types
  hideCross = false,
  // eslint-disable-next-line react/prop-types
  placeholder = "",
  // eslint-disable-next-line react/prop-types
  value = "",
  // eslint-disable-next-line react/prop-types
  onText,
  // eslint-disable-next-line react/prop-types
  textType = "Prodect-Name",
  // eslint-disable-next-line react/prop-types
  doubleInput = false,
}) {
  return (
    <div className={style.textFieldBox}>
      <TextField
        value={value}
        placeholder={placeholder}
        multiline
        rows={5}
        style={{ width: "100%", marginTop: "5px" }}
        onChange={(element) => {
          if (onText) {
            onText({
              t: element.target.value,
              type: textType,
            });
          }
        }}
      />
      {doubleInput ? (
        <TextField
          value={value}
          placeholder={placeholder}
          multiline
          rows={5}
          style={{ width: "100%", marginTop: "5px", marginLeft: "5px" }}
          onChange={(element) => {
            if (onText) {
              onText({
                t: element.target.value,
                type: textType,
              });
            }
          }}
        />
      ) : null}
      {!hideSeletor && !doubleInput ? (
        <div className={style.selector}>
          <select
            className={style.select}
            name=""
            id=""
            onClick={(e) => {
              if (onText) {
                onText({
                  t: value,
                  type: e.target.value,
                });
              }
            }}
          >
            <option value="Prodect-Name">Prodect-Name</option>
            <option value="Big-Header">Big-Header</option>
            <option value="Description">Description</option>
            <option value="Point-Header">Point-Header</option>
            <option value="Point-Description">Point-Description</option>
            <option value="Point">Point</option>
          </select>
        </div>
      ) : null}
      {!hideArrowButton ? (
        <div className={style.arrowBox}>
          <div className={style.arrowItem}>
            <div className={style.arrow}></div>
          </div>
          <div className={style.arrowItem}>
            <div className={style.arrow}></div>
          </div>
        </div>
      ) : null}
      {!hideCross ? <div className={style.cross}>+</div> : null}
    </div>
  );
}
