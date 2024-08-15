import { TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { config } from "../../../../../../config";
import {
  getProdectItems,
  postProdectItems,
} from "../../../../../../network/prodectItems/prodectItems";
import FileInput from "../../home/components/file/file";
import style from "./style.module.css";
export default function TeaItems() {
  const [oldId, setOldId] = useState([]);
  const [prodectItem, setProdectItem] = useState([]);
  const [removeImage, setRemoveImage] = useState([]);
  useEffect(() => {
    getProdectItems({}, (result) => {
      if (result?.data) {
        setOldId(result?.data?.data);
        setProdectItem(result?.data?.data);
      }
    });
  }, []);
  return (
    <div className={style.main}>
      <h5>Prodects</h5>
      <div className={style.prodects}>
        {prodectItem.map((element, indexx2) => {
          return (
            <div key={indexx2} className={style.items}>
              <FileInput
                crossShow
                onClear={(id) => {
                  if (id) {
                    const newItems = prodectItem.map((element2, index2) => {
                      if (element2._id == element._id) {
                        if (element2?.mainImage?.webUrl) {
                          setRemoveImage([...removeImage, { ...element2.mainImage }]);
                        }

                        return {
                          ...element2,
                          mainImage: {},
                          prevId: element2.prevId ? element2.prevId : element2._id,
                          _id: uuid(),
                        };
                      }
                      return element2;
                    });
                    setProdectItem(newItems);
                  } else {
                    const removeItems = prodectItem?.filter((element2, index2) => {
                      if (element2._id == element._id) {
                        let imageItems = element2?.imageItems?.map((element, index) => {
                          if (element?.webUrl) {
                            return element;
                          }
                          return null;
                        });
                        imageItems = imageItems.filter((element, index) => element != null);
                        setRemoveImage([...removeImage, ...imageItems]);
                      }
                      return element2._id != element._id;
                    });
                    setProdectItem(removeItems);
                  }
                }}
                fullWidth
                id={Date.now() + uuid()}
                onFile={(file) => {
                  const newItems = prodectItem?.map((element2, index2) => {
                    if (index2 == indexx2) {
                      return {
                        ...element2,
                        mainImage: { fullFile: file.fullFile },
                        prevId: element2.prevId ? element2.prevId : element2._id,
                        _id: uuid(),
                      };
                    }
                    return element2;
                  });
                  setProdectItem(newItems);
                }}
                fileUrl={
                  element.mainImage?.fullFile
                    ? URL.createObjectURL(element?.mainImage?.fullFile)
                    : element.mainImage?.webUrl
                    ? `${config.HOST_NAME}${element?.mainImage?.path}${element?.mainImage?.webUrl}`
                    : null
                }
              />
              <div className={style.alternative}>
                {element?.imageItems?.map((element, index) => {
                  return (
                    <div className={style.item} key={index}>
                      <FileInput
                        id={Date.now() + uuid()}
                        fullWidth
                        fullheight
                        onClear={(id) => {
                          const newprodectItemn = prodectItem.map((element2, index2) => {
                            if (indexx2 == index2) {
                              const imageitems = element2?.imageItems?.filter((ele, ind) => {
                                if (ele.webUrl && index == ind) {
                                  setRemoveImage([...removeImage, { ...ele }]);
                                }
                                return index != ind;
                              });
                              return {
                                ...element2,
                                imageItems: imageitems,
                                prevId: element2.prevId ? element2.prevId : element2._id,
                                _id: uuid(),
                              };
                            }
                            return element2;
                          });
                          setProdectItem(newprodectItemn);
                        }}
                        fileUrl={
                          element.fullFile
                            ? URL.createObjectURL(element.fullFile)
                            : `${config.HOST_NAME}${element.path}${element.webUrl}`
                        }
                      />
                    </div>
                  );
                })}
                <div className={`${style.item} ${style.itemAdd}`}>
                  <FileInput
                    fullWidth
                    fullheight
                    id={uuid()}
                    onFile={(file) => {
                      const newprodectItemn = prodectItem.map((element2, index2) => {
                        if (indexx2 == index2) {
                          return {
                            ...element2,
                            imageItems: [...element2.imageItems, { fullFile: file.fullFile }],
                            prevId: element2.prevId ? element2.prevId : element2._id,
                            _id: uuid(),
                          };
                        }
                        return element2;
                      });
                      setProdectItem(newprodectItemn);
                    }}
                  />
                </div>
              </div>
              <div className={style.inputBox}>
                <TextField
                  className={style.input}
                  placeholder="name"
                  value={element.header}
                  onChange={(e) => {
                    const newItems = prodectItem.map((element2, index2) => {
                      if (index2 == indexx2) {
                        return {
                          ...element2,
                          header: e.target.value,
                          prevId: element2.prevId ? element2.prevId : element2._id,
                          _id: uuid(),
                        };
                      }
                      return element2;
                    });
                    setProdectItem(newItems);
                  }}
                />
              </div>
              <div className={style.inputBox}>
                <TextField
                  className={style.input}
                  multiline
                  rows={6}
                  value={element.description}
                  placeholder="description"
                  onChange={(e) => {
                    const newItems = prodectItem.map((element2, index2) => {
                      if (index2 == indexx2) {
                        return {
                          ...element2,
                          description: e.target.value,
                          prevId: element2.prevId ? element2.prevId : element2._id,
                          _id: uuid(),
                        };
                      }
                      return element2;
                    });
                    setProdectItem(newItems);
                  }}
                />
              </div>
              <div className={style.inputBox}>
                <TextField
                  className={style.input}
                  multiline
                  rows={6}
                  value={element.aiDescription}
                  placeholder="AI description"
                  onChange={(e) => {
                    const newItems = prodectItem.map((element2, index2) => {
                      if (index2 == indexx2) {
                        return {
                          ...element2,
                          aiDescription: e.target.value,
                          prevId: element2.prevId ? element2.prevId : element2._id,
                          _id: uuid(),
                        };
                      }
                      return element2;
                    });
                    setProdectItem(newItems);
                  }}
                />
              </div>
              <div className={style.inputBox}>
                <TextField
                  className={style.input}
                  placeholder="price"
                  value={element.price}
                  type="number"
                  onChange={(e) => {
                    const newItems = prodectItem.map((element2, index2) => {
                      if (index2 == indexx2) {
                        if (0 > e.target.value) {
                          return {
                            ...element2,
                            price: 0,
                            prevId: element2.prevId ? element2.prevId : element2._id,
                            _id: uuid(),
                          };
                        }
                        return {
                          ...element2,
                          price: e.target.value,
                          prevId: element2.prevId ? element2.prevId : element2._id,
                          _id: uuid(),
                        };
                      }
                      return element2;
                    });
                    setProdectItem(newItems);
                  }}
                />
              </div>
              <div className={style.inputBox}>
                <TextField
                  className={style.input}
                  placeholder="quantity"
                  value={element.quantity}
                  type="number"
                  onChange={(e) => {
                    const newItems = prodectItem.map((element2, index2) => {
                      if (index2 == indexx2) {
                        if (0 > e.target.value) {
                          return {
                            ...element2,
                            quantity: 0,
                            prevId: element2.prevId ? element2.prevId : element2._id,
                            _id: uuid(),
                          };
                        }
                        return {
                          ...element2,
                          quantity: e.target.value,
                          prevId: element2.prevId ? element2.prevId : element2._id,
                          _id: uuid(),
                        };
                      }
                      return element2;
                    });
                    setProdectItem(newItems);
                  }}
                />
              </div>
              {/* Checkbox */}
              <div className={style.inputBox}>
                <TextField
                  className={style.input}
                  placeholder="discount"
                  value={element.discount}
                  type="number"
                  onChange={(e) => {
                    const newItems = prodectItem.map((element2, index2) => {
                      if (index2 == indexx2) {
                        if (0 > e.target.value) {
                          return {
                            ...element2,
                            discount: 0,
                            prevId: element2.prevId ? element2.prevId : element2._id,
                            _id: uuid(),
                          };
                        }
                        return {
                          ...element2,
                          discount: e.target.value,
                          prevId: element2.prevId ? element2.prevId : element2._id,
                          _id: uuid(),
                        };
                      }
                      return element2;
                    });
                    setProdectItem(newItems);
                  }}
                />
              </div>
              <div className={style.checkinput}>
                <Checkbox
                  checked={element.heroDisplay}
                  value={element.heroDisplay}
                  onChange={(e) => {
                    const newItems = prodectItem.map((element2, index2) => {
                      if (indexx2 == index2) {
                        return {
                          ...element2,
                          heroDisplay: e.target.value == "false",
                          prevId: element2.prevId ? element2.prevId : element2._id,
                          _id: uuid(),
                        };
                      }
                      return element2;
                    });
                    setProdectItem(newItems);
                  }}
                />
                <div className={style.checkText}>Hero Display</div>
              </div>
            </div>
          );
        })}
        <div
          className={style.addButton}
          onClick={() => {
            const newItem = {
              _id: uuid(),
              header: "",
              description: "",
              price: "",
              quantity: "",
              mainImage: null,
              imageItems: [],
              aiDescription: "",
              prevId: null,
              heroDisplay: false,
              discount: "",
            };
            setProdectItem([...prodectItem, newItem]);
          }}
        >
          +
        </div>
      </div>
      <div className={style.buttonBox}>
        <div
          className={style.button}
          onClick={() => {
            postProdectItems({ prodectItem, oldId, removeImage }, ({ res, newData }) => {
              if (res?.data) {
                const newItems = prodectItem.filter((elementx, indexx) => {
                  const find = newData.find((x, y) => x._id == elementx._id);
                  if (find) {
                    return false;
                  }
                  return true;
                });
                setProdectItem([...newItems, ...res?.data?.data]);
              }
            });
          }}
        >
          Save
        </div>
      </div>
    </div>
  );
}
